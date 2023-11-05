import { useState } from "react";
import axios from "axios";
import "./RegistrationInfo.css";

const Registration_Info_Student = () => {
  const [formData, setFormData] = useState({
    name: "",
    major: "",
    schools: "",
    region: "",
    gradYear: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        availability: checked
          ? [...prevFormData.availability, value]
          : prevFormData.availability.filter((av) => av !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/student/update", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to send form data:", error);
    }
  };

  return (
    <main className="registration-Info">
      <form className="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="m-2">Name</label>
          <input
            type="text"
            className="form-control w-auto mr-auto"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-describedby="emailHelp"
            placeholder="Enter First and Last Name"
          />
        </div>
        <div className="form-group">
          <label className="m-2"> Prospective Major </label>
          <input
            type="text"
            className="form-control w-auto m-2"
            id="major"
            name="major"
            placeholder="Major"
            value={formData.major}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="m-2"> Schools </label>
          <input
            id="schools"
            name="schools"
            type="text"
            className="form-control m-2 w-auto"
            placeholder="Schools"
            value={formData.schools}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="m-2"> Hometown </label>
          <input
            id="region"
            name="region"
            type="text"
            value={formData.region}
            onChange={handleChange}
            className="form-control m-2 w-auto"
            placeholder="Hometown"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1" className="m-2">
            {" "}
            Grad Year{" "}
          </label>
          <input
            type="number"
            id="gradYear"
            name="gradYear"
            className="form-control m-2 w-auto"
            placeholder="Year"
            value={formData.gradYear}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Registration_Info_Student;
