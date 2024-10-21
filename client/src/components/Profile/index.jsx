import { useEffect, useState } from "react";

import styles from "./styles.module.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    at: "",
    phone: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/api/profile/edit-my-profile"; // Update the URL to your backend server running on port 8080
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      })
      console.log("Profile created:", response.data);
      alert("Profile updated successfully");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        console.error("Error creating profile:", error);
      }
    }
  };

  

  useEffect(()=>{
    const getProfile = async () => {
      const url = "http://localhost:8080/api/profile/get-my-profile"; // Update the URL to your backend server running on port 8080
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setFormData(data);
    }
    getProfile();
  },[])
  

  return (
    <div className={styles.profile_container}>
      <form onSubmit={handleSubmit} className={styles.profile_form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={formData.phone}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={formData.bio}
          onChange={handleChange}
          className={styles.input}
        />
        
        <input
          type="text"
          name="at"
          placeholder="Acoount"
          value={formData.at}
          onChange={handleChange}
          className={styles.input}
        />
        {error && <div className={styles.error_msg}>{error}</div>}
        <button type="submit" class="btn btn-secondary">Update Profile</button>
        
        
      </form>
    </div>
  );
};

export default Profile;
