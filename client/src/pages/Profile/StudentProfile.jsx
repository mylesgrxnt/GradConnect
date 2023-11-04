import "./StudentProfile.css";
import homePhoto from "./home.png"

const StudentProfile = () => {
  return (
    <main className="student-profile-main">
      <About />
    </main>
  );
};

function About() {
  return (
    <>
      <div classname="topnav">
        <a classname="home"><img src={homePhoto} classname="home"></img></a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </>
  );
}

export default StudentProfile;
