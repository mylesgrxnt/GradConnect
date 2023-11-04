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
      <div className="w-75 topnav">
        <img src={homePhoto} className="home"/>
        <text href="#news">News</text>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </>
  );
}

export default StudentProfile;
