import { useEffect, useState } from "react";
import { Package } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface Sample {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  profession: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  purpose: string;
  projectDetails: string;
  selectedSamples: string[];   // ✅ REAL BACKEND FIELD
  createdAt: string;
}

/* SAMPLE ID → NAME MAP — SAME AS BACKEND */
const sampleProducts: Record<string, string> = {
  "1": "Ananta 12mm Structural BWP",
  "2": "Ananta 19mm Structural BWP",
  "3": "Agni 12mm Fire-Resistant",
  "4": "Bhima 12mm Marine Grade",
  "5": "Samrat 12mm Premium BWP",
  "6": "Samrat 19mm Premium BWP",
  "7": "Vajra 12mm Resilient BWP",
  "8": "Ujval 9mm Interior",
  "9": "Block Board 19mm",
  "10": "Flush Door Sample Panel",
};

export default function AdminSampleRequests() {
  const [requests, setRequests] = useState<Sample[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();


  /* 🚪 LOGOUT */
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin";
  };

  /* 📥 FETCH SAMPLE REQUESTS */
  useEffect(() => {
  const token = localStorage.getItem("adminToken");


  if (!token) {
    toast.error("Token nahi mila – please login again");
    window.location.href = "/admin";
    return;
  }


  fetch("http://localhost:5000/api/sample-requests", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.status === 401) {
        toast.error("Token expire – login again");
        window.location.href = "/admin";
        return null;
      }
      return res.json();
    })
    .then((data) => {
      if (data) {
        setRequests(data);
      }
      setLoading(false);
    })
    .catch(() => {
      toast.error("Failed to load sample requests");
      setLoading(false);
    });
}, []);


  /* ❌ DELETE SAMPLE REQUEST */
  const handleDelete = async (id: string) => {
    const token = localStorage.getItem("adminToken");

    try {
      const res = await fetch(
        `http://localhost:5000/api/sample-requests/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error();

      setRequests((prev) => prev.filter((item) => item._id !== id));

      toast.success("Deleted successfully");
    } catch {
      toast.error("Delete failed");
    }
  };

  /* 🔍 SEARCH / FILTER */
  const filtered = requests.filter((r) =>
    `${r.fullName} ${r.email} ${r.phone} ${r.city} ${r.profession} ${r.pincode}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  /* 📄 PAGINATION LOGIC */
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

  /* 📤 EXPORT CSV */
  const exportCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "City",
      "Company",
      "Profession",
      "Purpose",
      "Samples",
      "Project Details",
      "Date",
    ];

    const rows = filtered.map((r) => [
      r.fullName || "N/A",
      r.email,
      r.phone,
      r.city,
      r.company || "N/A",
      r.profession || "N/A",
      r.purpose || "N/A",

      /* ✅ MAIN FIX HERE */
      r.selectedSamples?.length
        ? r.selectedSamples
            .map((id) => sampleProducts[id] || id)
            .join(" | ")
        : "N/A",

      r.projectDetails || "N/A",
      r.projectDetails || "N/A",
      new Date(r.createdAt).toLocaleString(),
    ]);

    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "sample-requests.csv";
    a.click();
  };

  if (loading) {
    return <div>Loading Sample Requests...</div>;
  }

  return (
    <div className="admin-container p-10">
      <h1 className="admin-title flex items-center gap-2">
        <Package className="w-6 h-6" />
        Sample Requests (Admin)
      </h1>

      {/* 🔍 SEARCH BAR */}
      <div className="admin-topbar flex gap-4 my-6">
        <input
          type="text"
          placeholder="🔍 Search by name, email, phone, city, samples"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="admin-search border p-2 rounded w-80"
        />
        {/* 🔙 BACK TO LEADS */}
        <div className="admin-actions">
    <button
      onClick={() => navigate("/admin/leads")}
      className="sample-btn"
      type="button"
    >
      Back to Leads
    </button>
    
        {/* 📤 EXPORT CSV  */}
        <button className="admin-btn export bg-green-600 text-white px-4 py-2 rounded" onClick={exportCSV}>
          Export CSV
        </button>
      </div>
      </div>

      {/* 📋 TABLE */}
      <div className="table-wrapper bg-white rounded shadow">
        <table className="admin-table w-full">
          <thead className="bg-[#432011] text-white">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Company</th>
              <th>Profession</th>
              <th>Purpose</th>
              <th>Samples</th>
              <th>Project Details</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((s) => (
              <tr key={s._id} className="border-t">
                <td>{s.fullName}</td>
                <td>{s.email}</td>
                <td>{s.phone}</td>
                <td>{s.city}</td>
                <td>{s.company || "N/A"}</td>
                <td>{s.profession || "N/A"}</td>
                <td>{s.purpose || "N/A"}</td>

                {/* ✅ SHOW SAMPLES */}
                <td className="font-semibold">
                  {s.selectedSamples?.length ? (
                    <ul className="sample-list">
                      {s.selectedSamples.map((id) => (
                        <li key={id}>
                          {sampleProducts[id] || id}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    "N/A"
                  )}
                </td>

                <td>{s.projectDetails}</td>

                <td>{new Date(s.createdAt).toLocaleString()}</td>

                <td>
                  {/* 🔴 RED DELETE BUTTON */}
                                <button
                                onClick={() => handleDelete(s._id)}
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

      {/* 📄 PAGINATION FOOTER */}
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


      {/* 🚪 LOGOUT */}
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
