import "./Home.css";

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
