import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Create() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        role: "", // Sẽ chứa roleId
    });

    const [roles, setRoles] = useState([]);

    useEffect(() => {
        // Lấy danh sách các roles từ API
        axios.get("http://localhost:8080/api/roles")
            .then((response) => setRoles(response.data))
            .catch((error) => console.error("Error fetching roles:", error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (!formData.username || !formData.password || !formData.email || !formData.role) {
        alert("Please fill all fields.");
        return;
    }

    const payload = {
        ...formData,
        role: {
            roleId: formData.role  // Send role as an object with roleId
        }
    };

    try {
        const response = await axios.post("http://localhost:8080/api/users", payload, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("User created successfully:", response.data);
    } catch (error) {
        console.error("Error creating user:", error.response ? error.response.data : error.message);
    }
};


    return (
        <div className="max-w-6xl mx-auto p-3 sm:text-lg">
            <div className="p-3 flex flex-col gap-8 my-10">
                <h1 className="font-bold text-3xl">Create User</h1>
                <p className="text-gray-500">breadcrumbs</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 min-w-2xl items-center">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row gap-4">
                        <div className="w-full p-4">
                            <p className="p-2">Email:</p>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="border p-3 rounded-lg w-full"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>
                        <div className="w-full p-4">
                            <p className="p-2">Username:</p>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                className="border p-3 rounded-lg w-full"
                                maxLength="62"
                                onChange={handleChange}
                                value={formData.username}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="w-full p-4">
                            <p className="p-2">Password:</p>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="border p-3 rounded-lg w-full"
                                maxLength="62"
                                minLength="10"
                                onChange={handleChange}
                                value={formData.password}
                            />
                        </div>
                        <div className="w-full p-4">
                            <p className="p-2">Role:</p>
                            <select
                                name="role"
                                className="border rounded-lg h-12 pl-4 w-full"
                                onChange={handleChange}
                                value={formData.role}
                            >
                                <option value="">Select a role</option>
                                {roles.map((role) => (
                                    <option key={role.roleId} value={role.roleId}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 p-4">
                        <button
                            type="submit"
                            className="bg-blue-600 p-3 rounded-lg hover:opacity-85 disabled:opacity-70 hover:text-white"
                        >
                            Create
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
