import "./StudentProfile.css";
import homePhoto from "./home.png"
import networkPhoto from "./network.png"
import profilePhoto from "./profile.png"
import collegePhoto from "./collegeStudent.jpeg"
import collegeBanner from "./collegeBannerPhoto.jpg"
import { Link } from "react-router-dom";

const StudentProfile = () => {
  return (
    <main className="student-profile-main py-3">
      <About />
    </main>
  );
};

function About({user}) {
  return (
    <>
      {/* <div className="w-auto topnav">
        <Link to={"/"} className="link"><img src={homePhoto} className="photos"/></Link>
        <input className="fields" placeholder="Name"/>
        <select className="fields"> 
          <option value="BC"> Boston College </option>
          <option value="BU"> Boston University </option>
          <option value="NEU"> Northeastern </option>
        </select>
        <Link to={"/search"} className="link"> <button className="fields"> Search </button> </Link>
        <img src={profilePhoto} className="endPhotos"/>
        <img src={networkPhoto} className="endPhotos"/>
      </div> */}
      <div className="content rounded-3 mx-3 pb-2">
        <img className="top rounded-3 shadow" src={collegeBanner}/>
        <img src={collegePhoto} className="profileImage rounded-circle border border-primary border-5"/>
        <div className="d-flex m-3">

          <div className="shadow bottom col card mx-2 p-1 h-auto">
            <span className="basic">
              <h4 class="text-center">Information</h4>
              <p class="mb-3 lh-1"><b>Name:<br /> </b>Jane Doe </p>
              <p class="mb-3 lh-1"><b>Email:<br /> </b>doeja@bc.edu </p>
              <p class="lh-1"><b>Major Interest:<br /> </b>Computer Science </p>
            </span>
            <button type="submit" class=" mx-5 mb-2 mt-2 btn btn-primary btn-sm">Edit Information</button>
          </div>

          <div className="col-1"></div>

          <div className="shadow bottom schools col card mx-2 p-1">
            <h4 class="text-center">School Interests</h4>            
            <ul>
              <li className="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Boston College</label>
              </li>
              <li className="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Boston University</label>
              </li>
              <li className="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Harvard</label>
              </li>
              <li className="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">MIT</label>
              </li>
              <li className="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Northeastern</label>
              </li>
              <li className="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Suffolk</label>
              </li>
              <li className="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">UMass Amherst</label>
              </li>
            </ul>
            <button type="submit" class=" mx-5 mb-2 btn btn-primary btn-sm">Update Interests</button>
          </div>

          <div className="col-1"></div>

          <div className="shadow bottom preferences col card mx-2 p-1">
            <h4 class="text-center">School Preferences </h4>
            <h5 class="ms-4">Size</h5>
            <ul>
              <li className="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Less than 10,000 Students</label>
              </li>
              <li className="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">10,000 to 20,000 Students</label>
              </li>
              <li className="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">more than 20,000 Students</label>
              </li>
            </ul>
            <h5 class="ms-4">Cost</h5>
            <div class="range mx-5">
              <input type="range" class="form-range" min="0" max="80000" step="5000" />
            </div>
            <h5 class="ms-4">Location</h5>
            <ul>
              <li className="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Urban</label>
              </li>
              <li className="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Suburban</label>
              </li>
            </ul>
            <button type="submit" class="mx-5 mb-2 btn btn-primary btn-sm">Update Preferences</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentProfile;
