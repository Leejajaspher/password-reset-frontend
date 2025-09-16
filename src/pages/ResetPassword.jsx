import { useState } from "react";
import API from "../api";
import { useParams, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post(`/auth/reset-password/${token}`, { password });
      alert("Password reset successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid or expired link");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Reset Password</h2>
        <input type="password" placeholder="New Password"
          onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full mb-3" />
        <button className="bg-red-500 text-white px-4 py-2 rounded w-full">Reset Password</button>
      </form>
    </div>
  );
}
