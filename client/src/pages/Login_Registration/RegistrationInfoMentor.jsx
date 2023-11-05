import "./RegistrationInfo.css";

const Registration_Info_Mentor = () => {
  return (
    <main className="registration-Info">
      <form className="">
        <div className="form-group">
          <label for="exampleInputEmail1" className="m-2">
            Name
          </label>
          <input
            type="text"
            className="form-control w-auto mr-auto"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter First and Last Name"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1" className="m-2">
            {" "}
            Major{" "}
          </label>
          <input
            type="text"
            className="form-control w-auto m-2"
            id="exampleInputPassword1"
            placeholder="Major"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1" className="m-2">
            {" "}
            School{" "}
          </label>
          <input
            type="text"
            className="form-control m-2 w-auto"
            id="exampleInputPassword1"
            placeholder="School"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1" className="m-2">
            {" "}
            Availability{" "}
          </label>{" "}
          <br />
          <input type="checkbox" className="m-2" /> Essay Reading <br />
          <input type="checkbox" className="m-2" /> General <br />
          <input type="checkbox" className="m-2" /> Video Calling <br />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1" className="m-2">
            {" "}
            Grad Year{" "}
          </label>
          <input
            type="text"
            className="form-control m-2 w-auto"
            id="exampleInputPassword1"
            placeholder="Year"
          />
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Registration_Info_Mentor;
