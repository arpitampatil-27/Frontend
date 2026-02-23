import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await axios.get(
                    "http://localhost:5000/users",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setUsers(response.data);
            } catch (error) {
                console.error("Access denied", error);

            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Protected User List</h2>
            {users.map((user) => (
                <div key={user._id}>
                    {user.name} - {user.role}
                </div>
            ))}
        </div>
    );
}

export default Dashboard;