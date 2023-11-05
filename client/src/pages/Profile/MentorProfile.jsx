import "./MentorProfile.css";
import collegePhoto from "./collegeStudent.jpeg"
import collegeBanner from "./collegeBannerPhoto.jpg"

const MentorProfile = () => {
  return (
    <main className="mentor-profile-main">
      <About />
    </main>
  );
};

function About() {
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
            <div className="basic">
              <h4 class="text-center">Information</h4>
              <p class="mb-3"><b>Name: </b>Jane Doe </p>
              <p class="mb-2"><b>Email: </b>doeja@bc.edu </p>
              <span class="mt-1 major"><b>Major: </b>Communications </span>
            </div>
            <button type="submit" class=" mx-5 mb-2 btn btn-primary btn-sm">Edit Information</button>
          </div>

          <div className="col-1"></div>

          <div className="shadow bottom schools col card mx-2 p-1 mb-2">
            <h4 class="text-center">College Information</h4>            
            <p class="m-2"> School: Boston College </p>
            <p class="m-2"> Size: 9, 484 </p>
            <p class="m-2"> Location: Chestnut Hill, MA</p>
            <p class="m-2"> Type: Private </p>
            <p class="major m-2"> Popular Majors: Business, Computer Science, Economics, Psychology </p>
            <p class="m-2"> Cost: $80,658 </p>
          </div>

          <div className="col-1"></div>

          <div className="shadow bottom preferences col card mx-2 p-1">
            <h4 class="text-center"> Preferences </h4>
            <h5 class="ms-4">Availability</h5>
            <ul>
              <li className="form-check">
                <label class="form-check-label" for="exampleCheck1"> Reading Advice </label>
              </li>
              <li className="form-check">
                <label class="form-check-label" for="exampleCheck1"> General Advice </label>
              </li>
              <li className="form-check">
                <label class="form-check-label" for="exampleCheck1"> Zoom Call </label>
              </li>
            </ul>
            <h5 class="ms-4">Involvement</h5>
            <div class="range mx-5">
              <ul>
                <li>
                  <label class="form-check-label" for="exampleCheck1"> BCCSS </label>
                </li>
                <li>
                  <label class="form-check-label" for="exampleCheck1"> Club Frisbee </label>
                </li>
                <li>
                  <label class="form-check-label" for="exampleCheck1"> For Boston </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorProfile;
