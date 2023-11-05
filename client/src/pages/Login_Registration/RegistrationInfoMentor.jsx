import "./RegistrationInfo.css";

const Registration = () => {
  return (
    <main className="registration-Info">
      <Registration_Info_Mentor />
    </main>
  );
};
/* Student: Name, Propspective Major, Schools, Hometown, Grad Year
  Mentor:  Availability, Involvement, Major, Name*/
function Registration_Info_Mentor() {
  return (
    <>
      <form class="">
        <div class="form-group">
          <label for="exampleInputEmail1" class="m-2">
            Name
          </label>
          <input
            type="text"
            class="form-control w-auto mr-auto"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter First and Last Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="m-2">
            {" "}
            Major{" "}
          </label>
          <input
            type="text"
            class="form-control w-auto m-2"
            id="exampleInputPassword1"
            placeholder="Major"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="m-2">
            {" "}
            School{" "}
          </label>
          <input
            type="text"
            class="form-control m-2 w-auto"
            id="exampleInputPassword1"
            placeholder="School"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="m-2">
            {" "}
            Availability{" "}
          </label>{" "}
          <br />
          <input type="checkbox" class="m-2" /> Essay Reading <br />
          <input type="checkbox" class="m-2" /> General <br />
          <input type="checkbox" class="m-2" /> Video Calling <br />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="m-2">
            {" "}
            Grad Year{" "}
          </label>
          <input
            type="text"
            class="form-control m-2 w-auto"
            id="exampleInputPassword1"
            placeholder="Year"
          />
        </div>
        <button type="submit" class="btn btn-primary m-3">
          Submit
        </button>
      </form>
    </>
  );
}

export default Registration;
