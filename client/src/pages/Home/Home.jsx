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
<<<<<<< HEAD
      <h1>High School Networking App</h1>
      <button onClick={handleLogin}>Login</button>
=======
      <h1 class="text-muted">High School Networking App</h1>
>>>>>>> dad267bbb9be5da602db114af8b43d29d6656e27
    </>
  );
}

export default Home;
