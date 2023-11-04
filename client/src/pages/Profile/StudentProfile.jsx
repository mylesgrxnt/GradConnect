import "./StudentProfile.css";
import homePhoto from "./home.png"
import networkPhoto from "./network.png"
import profilePhoto from "./profile.png"
import collegePhoto from "./collegeStudent.jpeg"
import collegeBanner from "./collegeBannerPhoto.jpg"
import { Link } from "react-router-dom";

const StudentProfile = () => {
  return (
    <main className="student-profile-main">
      <About />
    </main>
  );
};

function About({user}) {
  return (
    <>
      <div className="w-auto topnav">
        <Link to={"/"} className="link"><img src={homePhoto} className="photos"/></Link>
        <input className="fields" placeholder="Name"/>
        <select className="fields"> 
          <option value="BC"> Boston College </option>
          <option value="BU"> Boston University </option>
          <option value=""> Northeastern </option>
        </select>
        <Link to={""} className="link"> <button className="fields"> Search </button> </Link>
        <img src={profilePhoto} className="endPhotos"/>
        <img src={networkPhoto} className="endPhotos"/>
      </div>
      <div className="h-100 content">
        <img className="top" src={collegeBanner}/>
          <img src={collegePhoto} className="profileImage"/>
        <div className="h-50 bottom">
          <span className="w-25 basic">
            <p> Jane Doe </p>
            <p> doeja@bc.edu </p>
            <p> Computer Science </p>
          </span>
          <span className="w-25 schools">
            <p> Interested Schools </p>
          </span>
          <span className="w-25 preferences">
            <p> School Preferences </p>
          </span>
        </div>
      </div>
    </>
  );
}

export default StudentProfile;
