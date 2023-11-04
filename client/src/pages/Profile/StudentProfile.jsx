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
      <div className="topnav">
        <img src={homePhoto} className="home"><a></a></img>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </>
  );
}

export default StudentProfile;
