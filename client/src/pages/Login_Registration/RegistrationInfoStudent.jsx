import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./RegistrationInfo.css";

const RegistrationInfoStudent = () => {
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [schools, setSchools] = useState("");
  const [region, setRegion] = useState("");
  const [gradYear, setGradYear] = useState("");

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        setToken(accessToken);
      } catch (error) {
        console.error("Error getting access token", error);
      }
    };

    getToken();
  }, [getAccessTokenSilently]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      major,
      schools,
      region,
      gradYear,
    };

    try {
      const response = await axios.post("/api/student/update", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response data:", response.data);
      navigate("/landing");
    } catch (error) {
      console.error("Failed to send form data:", error);
    }
  };

  return (
    <main className="registration-info">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="m-2">
            Name
          </label>
          <input
            type="text"
            className="form-control w-auto mr-auto"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter First and Last Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="schools" className="m-2">
            Schools
          </label>
          <input
            type="text"
            className="form-control w-auto mr-auto"
            id="schools"
            name="schools"
            value={schools}
            onChange={(e) => setSchools(e.target.value)}
            placeholder="Schools"
          />
        </div>
        <div className="form-group">
          <label htmlFor="major" className="m-2">
            Major
          </label>
          <input
            type="text"
            className="form-control w-auto mr-auto"
            id="major"
            name="major"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            placeholder="Major"
          />
        </div>
        <div className="form-group">
          <label htmlFor="region" className="m-2">
            Region
          </label>
          <input
            type="text"
            className="form-control w-auto mr-auto"
            id="region"
            name="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            placeholder="Region"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gradYear" className="m-2">
            Grad Year
          </label>
          <input
            type="number"
            id="gradYear"
            name="gradYear"
            className="form-control m-2 w-auto"
            placeholder="Year"
            value={gradYear}
            onChange={(e) => setGradYear(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Submit
        </button>
      </form>
    </main>
  );
};

export default RegistrationInfoStudent;
