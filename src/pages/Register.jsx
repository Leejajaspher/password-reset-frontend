import { useState } from "react";
import API from "../api.js";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("User registered successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Error registering user");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input name="username" type="text" placeholder="Username"
          onChange={handleChange} className="border p-2 w-full mb-3" />
        <input name="email" type="email" placeholder="Email"
          onChange={handleChange} className="border p-2 w-full mb-3" />
        <input name="password" type="password" placeholder="Password"
          onChange={handleChange} className="border p-2 w-full mb-3" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Register</button>
        <p className="mt-3 text-sm">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
      </form>
    </div>
  );
}
