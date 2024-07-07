import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const { userId } = useParams();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
        const user = response.data;
        setEmail(user.email);
        setUsername(user.username);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the user data!", error);
        setError("Error fetching user data.");
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8080/api/users/${userId}`, {
        email,
        username
      });
      console.log("User updated:", response.data);
      navigate("/admin/Users"); // Điều hướng về trang /admin/Users sau khi cập nhật thành công
    } catch (error) {
      console.error("There was an error updating the user!", error);
      setError("Error updating user data.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-2 sm:text-lg">
      <div className="p-3 flex flex-col gap-3 my-10">
        <h1 className="font-bold text-3xl">Update User</h1>
        <p className="text-gray-500">breadcrumbs</p>
      </div>
      <form className="flex flex-col gap-4 min-w-2xl items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full">
          <div className="w-full p-4">
            <p className="p-2">Email:</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border p-3 rounded-lg w-full"
            />
          </div>
          <div className="w-full p-4">
            <p className="p-2">Username:</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="border p-3 rounded-lg w-full"
            />
          </div>
          <div className="flex flex-row ml-5 gap-4">
            <button type="submit" className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white">
              Update
            </button>
            <Link to="/admin/Users" className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white">
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
