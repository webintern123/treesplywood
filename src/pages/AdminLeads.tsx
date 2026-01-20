import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ClipboardList } from "lucide-react";

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  products: string[];
  projects: string[];
  quantity: string;
  timeline: string;
  urgency: string;
  createdAt: string;
}

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const itemsPerPage = 5;

  /* 🚪 LOGOUT */
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin";
  };

  /* ❌ DELETE LEAD */
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this lead?")) return;

    const token = localStorage.getItem("adminToken");

    try {
      const res = await fetch(`http://localhost:5000/api/leads/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error();

      setLeads((prev) => prev.filter((l) => l._id !== id));
      toast.success("Lead deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  /* 📥 FETCH LEADS */
  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      window.location.href = "/admin";
      return;
    }

    fetch("http://localhost:5000/api/leads", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLeads(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load leads");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-10">Loading leads...</p>;

  /* 🔍 FILTER */
  const filtered = leads.filter((l) =>
    `${l.name} ${l.email} ${l.phone} ${l.city}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  /* 📄 PAGINATION */
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);

  /* 📤 EXPORT CSV */
  const exportCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "City",
      "Products",
      "Projects",
      "Urgency",
      "Date",
    ];

    const rows = filtered.map((l) => [
      l.name,
      l.email,
      l.phone,
      l.city,
      l.products?.join(" | "),
      l.projects?.join(" | "),
      l.urgency,
      new Date(l.createdAt).toLocaleString(),
    ]);

    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "crm-leads.csv";
    a.click();
  };

  return (
    <div className="p-10 bg-white min-h-screen">

      {/* TITLE */}
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <ClipboardList className="w-6 h-6" />
        CRM Leads (Admin)
      </h1>

      {/* TOP BAR */}
{/* TOP BAR */}
<div className="admin-topbar">

  {/* SEARCH */}
  <input
    type="text"
    placeholder="🔍 Search by name, email, phone, city"
    value={search}
    onChange={(e) => {
      setSearch(e.target.value);
      setCurrentPage(1);
    }}
    className="admin-search"
  />

  {/* RIGHT BUTTONS */}
  <div className="admin-actions">
    <button
      onClick={() => navigate("/admin/sample-requests")}
      className="sample-btn"
      type="button"
    >
      Sample Requests
    </button>

    <button
      onClick={exportCSV}
      className="export-btn"
      type="button"
    >
      Export CSV
    </button>
  </div>
</div>

      {/* TABLE WITH SCROLL */}
<div className="table-wrapper bg-white rounded shadow">
        <table className="admin-table w-full">
          <thead className="bg-[#432011] text-white">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Products</th>
              <th>Projects</th>
              <th>Quantity</th>
              <th>Timeline</th>
              <th>Urgency</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>


    <tbody>
      {paginated.map((lead) => (
        <tr key={lead._id} className="border-b hover:bg-gray-50">

          <td className="px-4 py-3 whitespace-nowrap">{lead.name}</td>

          <td className="px-4 py-3 whitespace-nowrap">
            {lead.email}
          </td>

          <td className="px-4 py-3 whitespace-nowrap">
            {lead.phone}
          </td>

          <td className="px-4 py-3 whitespace-nowrap">
            {lead.city}
          </td>

          <td className="px-4 py-3">
            {lead.products?.join(" , ")}
          </td>

          <td className="px-4 py-3">
            {lead.projects?.join(" , ")}
          </td>

          <td className="px-4 py-3 text-center">
            {lead.quantity}
          </td>

          <td className="px-4 py-3 text-center">
            {lead.timeline}
          </td>

          <td className="px-4 py-3 text-center">
  <span
    className={`urgency-badge ${lead.urgency?.toLowerCase()}`}
  >
    {lead.urgency}
  </span>
</td>

          <td className="px-4 py-3 whitespace-nowrap">
            {new Date(lead.createdAt).toLocaleString()}
          </td>

          <td className="px-4 py-3 whitespace-nowrap">
  <button
                                onClick={() => handleDelete(lead._id)}
                                className="admin-btn-delete"
                              >
                                🗑 Delete
                              </button>
</td>

        </tr>
      ))}
    </tbody>

  </table>
</div>



     <div className="admin-footer flex justify-center gap-6 my-6">

  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage((p) => p - 1)}
    className="page-btn-prev"
  >
    ◀ Prev
  </button>

  <span>Page {currentPage} of {totalPages}</span>

  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage((p) => p + 1)}
    className="page-btn-next"
  >
    Next ▶
  </button>

</div>


      {/* LOGOUT */}
      <div className="text-center mt-10">
            <button
              onClick={handleLogout}
              className="admin-btn-logout"
            >
              🚪 Logout
            </button>
            </div>

    </div>
  );
}
