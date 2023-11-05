import { useState } from "react";
import axios from "axios";

const ProfileUpdateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    major: "",
    gradYear: "",
    region: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // You need to replace this with your actual endpoint
      const response = await axios.put("/api/user/update", formData);
      console.log(response.data);
      // Handle success - perhaps show notification & redirect
    } catch (error) {
      console.error(error);
      // Handle error - perhaps show error notification
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="major">Major:</label>
        <input
          type="text"
          id="major"
          name="major"
          value={formData.major}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="gradYear">Graduation Year:</label>
        <input
          type="number"
          id="gradYear"
          name="gradYear"
          value={formData.gradYear}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="region">Region:</label>
        <select
          id="region"
          name="region"
          value={formData.region}
          onChange={handleChange}
        >
          <option value="">Select Region</option>
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          {/* Add other regions as necessary */}
        </select>
      </div>

      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileUpdateForm;
