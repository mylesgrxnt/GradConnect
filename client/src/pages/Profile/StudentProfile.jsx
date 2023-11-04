import "./StudentProfile.css";
import homePhoto from "./home.png"
import networkPhoto from "./network.png"
import profilePhoto from "./profile.jpg"

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
        <img src={homePhoto} className="photos"/>
        <input className="name" defaultValue="Name"/>
        <input className="name" defaultValue="Name"/>
        <input className="name" defaultValue="Name"/>
        <img src={networkPhoto} className="photos"/>
        <img src={profilePhoto} className="photos"/>
      </div>
    </>
  );
}

export default StudentProfile;
