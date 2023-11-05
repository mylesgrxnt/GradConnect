import axios from "axios";

const fetchData = async () => {
  try {
    const res = await axios.get("/");
    console.log(res.data);
  } catch (error) {
    console.error("Server call failed", error);
    throw error;
  }
};

export { fetchData };
