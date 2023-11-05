import "./Home.css";
import axios from "axios";

const handleLogin = () => {
  axios
    .get("/profile", { withCredentials: true })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const Home = () => {
  return (
    <main className="home-main">
      <About />
    </main>
  );
};

function About() {
  return (
    <>
      <h1>High School Networking App</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Home;
