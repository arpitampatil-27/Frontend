import { useState } from "react";
import axios from "axios";

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5000/signup",
                formData
            );

           const token = response.data.token;
           
           localStorage.setItem("token", token);

           alert("signup successfull");
        } catch(error) {
            alert(error.response?.data?.error || "signup failed");  
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit= {handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} />
                <input name="role" placeholder="Role" onChange={handleChange} />
                <input name="email" placeholder="Email" onChange={handleChange} />
                <input 
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;