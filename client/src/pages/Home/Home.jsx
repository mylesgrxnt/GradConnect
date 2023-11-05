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
      <h1 class="text-muted">High School Networking App</h1>
    </>
  );
}

export default Home;
