import { useState } from "react";
import { Package, Lock, User } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";


export default function AdminLogin({ onSuccess }: { onSuccess: () => void }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("adminToken", data.token);

        toast.success("Login successful");
        onSuccess();   // existing success logic
      } else {
        setError("Invalid Admin Credentials");
        toast.error("Invalid Admin Credentials");
      }

    } catch (err) {
      setError("Login failed – backend not reachable");
      toast.error("Backend connect nahi ho pa raha");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f1ed]">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-[400px]"
      >

        <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          <Package className="w-6 h-6" />
          Admin Login
        </h2>

        <div className="flex flex-col gap-4">

          <div className="flex items-center border rounded px-3">
            <User className="w-4 h-4 mr-2" />
            <input
              className="w-full p-2 outline-none"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex items-center border rounded px-3">
            <Lock className="w-4 h-4 mr-2" />
            <input
              type="password"
              className="w-full p-2 outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="logout-btn-red w-full mt-2"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && (
            <p className="text-center text-red-700 font-semibold text-sm">
              {error}
            </p>
          )}

        </div>

      </motion.div>
    </div>
  );
};
