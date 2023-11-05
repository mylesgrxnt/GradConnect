import "./Search.css";

const Search = () => {
  return (
    <main className="search-main d-flex h-100">
      <Filters />
      <Search_Page />
    </main>
  );
};

function Search_Page() {
  return (
    <section class=" h-100 search-page container my-4 ms-2 me-4 rounded-3 col-8 p-3 justify-content-between">
      <div class="d-flex justify-content-between">
        <p>Showing <b>6</b> Results</p> 
        <p>Sort by: <b>Alphabetical</b></p>
      </div>

      <div class="user-info-section d-flex align-items-center my-4 w-100 justify-content-between">
        <img class="rounded-circle" src="https://picsum.photos/90/90"/>
        <div class="text-container">
          <p class="p-0 m-0">First Last, <br />
          Student at <b>Boston College</b></p>
        </div>
        <div class="text-container">
          <p class="p-0 m-0">Boston,<br />
          Massachusetts</p>
        </div>
        <div class="major bg-primary rounded-3 d-flex align-items-center me-2">
          <p class="px-5 py-3 m-0">Computer Science</p>
        </div>
      </div>

      <hr />

      <div class="user-info-section d-flex align-items-center my-4 w-100 justify-content-between">
        <img class="rounded-circle" src="https://picsum.photos/90/90"/>
        <div class="text-container">
          <p class="p-0 m-0">First Last, <br />
          Student at <b>Boston College</b></p>
        </div>
        <div class="text-container">
          <p class="p-0 m-0">Boston,<br />
          Massachusetts</p>
        </div>
        <div class="major bg-primary rounded-3 d-flex align-items-center me-2">
          <p class="px-5 py-3 m-0">Computer Science</p>
        </div>
      </div>

      <hr />

      <div class="user-info-section d-flex align-items-center my-4 w-100 justify-content-between">
        <img class="rounded-circle" src="https://picsum.photos/90/90"/>
        <div class="text-container">
          <p class="p-0 m-0">First Last, <br />
          Student at <b>Boston College</b></p>
        </div>
        <div class="text-container">
          <p class="p-0 m-0">Boston,<br />
          Massachusetts</p>
        </div>
        <div class="major bg-primary rounded-3 d-flex align-items-center me-2">
          <p class="px-5 py-3 m-0">Computer Science</p>
        </div>
      </div>

      <hr />

      <div class="user-info-section d-flex align-items-center my-4 w-100 justify-content-between">
        <img class="rounded-circle" src="https://picsum.photos/90/90"/>
        <div class="text-container">
          <p class="p-0 m-0">First Last, <br />
          Student at <b>Boston College</b></p>
        </div>
        <div class="text-container">
          <p class="p-0 m-0">Boston,<br />
          Massachusetts</p>
        </div>
        <div class="major bg-primary rounded-3 d-flex align-items-center me-2">
          <p class="px-5 py-3 m-0">Computer Science</p>
        </div>
      </div>

      <hr />

      <div class="user-info-section d-flex align-items-center my-4 w-100 justify-content-between">
        <img class="rounded-circle" src="https://picsum.photos/90/90"/>
        <div class="text-container">
          <p class="p-0 m-0">First Last, <br />
          Student at <b>Boston College</b></p>
        </div>
        <div class="text-container">
          <p class="p-0 m-0">Boston,<br />
          Massachusetts</p>
        </div>
        <div class="major bg-primary rounded-3 d-flex align-items-center me-2">
          <p class="px-5 py-3 m-0">Computer Science</p>
        </div>
      </div>
    </section>
  );
}

function Filters() {
  return (
    <section class="filters container my-4 ms-4 me-2 rounded-3 col-3 p-3 h-75">
      <h2>Add Filters</h2>
      <hr />
      <div className="active-filters container">
        <h3>Active Filters</h3>
        <p class="text-muted">No Active Filters</p>
      </div>
      <hr />
      <div className="major container">
        <h3>Major</h3>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <hr />
      <div className="college container">
        <h3>College</h3>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <hr />
      <div className="availability container">
        <h3>Availability</h3>
        <h4>Open to ...</h4>
        <ul>
          <li className="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Essay Reading</label>
          </li>
          <li className="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">General Advice</label>
          </li>
          <li className="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Video Calling</label>
          </li>
        </ul>
      </div>   
    </section>
  )
}

export default Search;
