import "./Home.css";
import axios from "axios";
import mentorIcon from "./mentoring.png";
import videoIcon from "./cam-recorder.png";
import essayIcon from "./wirte.png";
import { useAuth0 } from "@auth0/auth0-react";

const LoggedInHome = () => {
  const { user } = useAuth0();
  return (
    <main className="home-main">
      <section class="w-100 d-inline-block text-center align-items-center">
        <div class="pt-5 m-5 d-flex justify-content-center">
          <div>
            <h1 class="logo ">Welcome back, {user.name}</h1>
          </div>
        </div>
        <br />
        <div class="container my-5">
          <div class="d-flex justify-content-center align-items-center">
            <div class="col-8">
              <div class="search">
                <i class="fa fa-search"></i>

                <input
                  type="text"
                  id="search-bar"
                  class="form-control"
                  placeholder="Search for Name, School, Major..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="spacer"></div>
      <div class="row connections mt-4 pb-4 rounded-3 justify-content-center">
        <div class=" bg-white card col-7 me-3 rounded-3">
          <h3 class="m-2">My Connections</h3>
          <div class="row row-cols-2">
            <div class="col mb-3">
              <div className="grow container bg-white rounded-3 card shadow">
                <div class="d-flex flex-column text-center justify-content-center align-items-center">
                  <img
                    src="https://picsum.photos/150/150"
                    class="rounded-circle border p-2 my-2 mt-3 "
                    width="150"
                  ></img>
                  <div class="text-container ">
                    <p class="p-0 mb-2">
                      <b>
                        <span class="names ">Thomas Jefferson</span>
                      </b>
                      <br />
                      Boston College &#8226; Computer Science
                      <br />
                      Brownsburg, IN
                    </p>
                  </div>
                  <div class="open-to-icons d-flex justify-content-evenly my-1">
                    <div class="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                      <img
                        src={mentorIcon}
                        class=""
                        width="30"
                        height="auto"
                        title="Mentoring"
                      />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={videoIcon} width="30" height="auto" />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={essayIcon} width="30" height="auto" />
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                  >
                    Chat Now
                  </button>

                  <div class="content-container ">
                    <p class="pb-2 mb-2">Interests & Involvements</p>
                    <div class="row d-flex justify-content-evenly align-items-center ">
                      <div class="col ">
                        <p>Maker</p>
                      </div>
                      <div class="col ">
                        <p>Full Stack Developer</p>
                      </div>
                      <div class="col ">
                        <p>Robotics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col mb-3">
              <div className="grow container bg-white rounded-3 card shadow">
                <div class="d-flex flex-column text-center justify-content-center align-items-center">
                  <img
                    src="https://picsum.photos/150/150"
                    class="rounded-circle border p-2 my-2 mt-3 "
                    width="150"
                  ></img>
                  <div class="text-container ">
                    <p class="p-0 mb-2">
                      <b>
                        <span class="names ">Thomas Jefferson</span>
                      </b>
                      <br />
                      Boston College &#8226; Computer Science
                      <br />
                      Brownsburg, IN
                    </p>
                  </div>
                  <div class="open-to-icons d-flex justify-content-evenly my-1">
                    <div class="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                      <img
                        src={mentorIcon}
                        class=""
                        width="30"
                        height="auto"
                        title="Mentoring"
                      />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={videoIcon} width="30" height="auto" />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={essayIcon} width="30" height="auto" />
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                  >
                    Chat Now
                  </button>

                  <div class="content-container ">
                    <p class="pb-2 mb-2">Interests & Involvements</p>
                    <div class="row d-flex justify-content-evenly align-items-center ">
                      <div class="col ">
                        <p>Maker</p>
                      </div>
                      <div class="col ">
                        <p>Full Stack Developer</p>
                      </div>
                      <div class="col ">
                        <p>Robotics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col mb-3">
              <div className="grow container bg-white rounded-3 card shadow">
                <div class="d-flex flex-column text-center justify-content-center align-items-center">
                  <img
                    src="https://picsum.photos/150/150"
                    class="rounded-circle border p-2 my-2 mt-3 "
                    width="150"
                  ></img>
                  <div class="text-container ">
                    <p class="p-0 mb-2">
                      <b>
                        <span class="names ">Thomas Jefferson</span>
                      </b>
                      <br />
                      Boston College &#8226; Computer Science
                      <br />
                      Brownsburg, IN
                    </p>
                  </div>
                  <div class="open-to-icons d-flex justify-content-evenly my-1">
                    <div class="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                      <img
                        src={mentorIcon}
                        class=""
                        width="30"
                        height="auto"
                        title="Mentoring"
                      />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={videoIcon} width="30" height="auto" />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={essayIcon} width="30" height="auto" />
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                  >
                    Chat Now
                  </button>

                  <div class="content-container ">
                    <p class="pb-2 mb-2">Interests & Involvements</p>
                    <div class="row d-flex justify-content-evenly align-items-center ">
                      <div class="col ">
                        <p>Maker</p>
                      </div>
                      <div class="col ">
                        <p>Full Stack Developer</p>
                      </div>
                      <div class="col ">
                        <p>Robotics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col mb-3">
              <div className="grow container bg-white rounded-3 card shadow">
                <div class="d-flex flex-column text-center justify-content-center align-items-center">
                  <img
                    src="https://picsum.photos/150/150"
                    class="rounded-circle border p-2 my-2 mt-3 "
                    width="150"
                  ></img>
                  <div class="text-container ">
                    <p class="p-0 mb-2">
                      <b>
                        <span class="names ">Thomas Jefferson</span>
                      </b>
                      <br />
                      Boston College &#8226; Computer Science
                      <br />
                      Brownsburg, IN
                    </p>
                  </div>
                  <div class="open-to-icons d-flex justify-content-evenly my-1">
                    <div class="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                      <img
                        src={mentorIcon}
                        class=""
                        width="30"
                        height="auto"
                        title="Mentoring"
                      />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={videoIcon} width="30" height="auto" />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={essayIcon} width="30" height="auto" />
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                  >
                    Chat Now
                  </button>

                  <div class="content-container ">
                    <p class="pb-2 mb-2">Interests & Involvements</p>
                    <div class="row d-flex justify-content-evenly align-items-center ">
                      <div class="col ">
                        <p>Maker</p>
                      </div>
                      <div class="col ">
                        <p>Full Stack Developer</p>
                      </div>
                      <div class="col ">
                        <p>Robotics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 bg-secondary rounded-3 card">
          <i>
            <h3 class="m-2">Pending Connections</h3>
          </i>
          <div class="row row-cols 1">
            <div class="col mb-3">
              <div className="grow container bg-white rounded-3 card shadow-sm">
                <div class="d-flex flex-column text-center justify-content-center align-items-center">
                  <img
                    src="https://picsum.photos/150/150"
                    class="rounded-circle border p-2 my-2 mt-3 "
                    width="150"
                  ></img>
                  <div class="text-container ">
                    <p class="p-0 mb-2">
                      <b>
                        <span class="names ">Thomas Jefferson</span>
                      </b>
                      <br />
                      <span class="last-online">
                        <i>Last Online - Tuesday</i>
                      </span>
                      <br />
                      Boston College &#8226; Computer Science
                      <br />
                      Brownsburg, IN
                    </p>
                  </div>
                  <div class="open-to-icons d-flex justify-content-evenly my-1">
                    <div class="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                      <img
                        src={mentorIcon}
                        class=""
                        width="30"
                        height="auto"
                        title="Mentoring"
                      />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={videoIcon} width="30" height="auto" />
                    </div>
                    <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                      <img src={essayIcon} width="30" height="auto" />
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                  >
                    Message
                  </button>

                  <div class="content-container ">
                    <p class="pb-2 mb-2">Interests & Involvements</p>
                    <div class="row d-flex justify-content-evenly align-items-center ">
                      <div class="col ">
                        <p>Maker</p>
                      </div>
                      <div class="col ">
                        <p>Full Stack Developer</p>
                      </div>
                      <div class="col ">
                        <p>Robotics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col mb-3">
            <div className="grow container bg-white rounded-3 card shadow-sm">
              <div class="d-flex flex-column text-center justify-content-center align-items-center">
                <img
                  src="https://picsum.photos/150/150"
                  class="rounded-circle border p-2 my-2 mt-3 "
                  width="150"
                ></img>
                <div class="text-container ">
                  <p class="p-0 mb-2">
                    <b>
                      <span class="names ">Thomas Jefferson</span>
                    </b>
                    <br />
                    <span class="last-online">
                      <i>Last Online - Tuesday</i>
                    </span>
                    <br />
                    Boston College &#8226; Computer Science
                    <br />
                    Brownsburg, IN
                  </p>
                </div>
                <div class="open-to-icons d-flex justify-content-evenly my-1">
                  <div class="icons d-flex col p-2 mx-2 justify-content-center border border-primary rounded-circle">
                    <img
                      src={mentorIcon}
                      class=""
                      width="30"
                      height="auto"
                      title="Mentoring"
                    />
                  </div>
                  <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                    <img src={videoIcon} width="30" height="auto" />
                  </div>
                  <div class="d-flex col mx-2 p-2 justify-content-center border border-primary rounded-circle">
                    <img src={essayIcon} width="30" height="auto" />
                  </div>
                </div>

                <button
                  type="button"
                  class="btn btn-lg rounded-pill shadow-sm btn-primary my-3"
                >
                  Message
                </button>

                <div class="content-container ">
                  <p class="pb-2 mb-2">Interests & Involvements</p>
                  <div class="row d-flex justify-content-evenly align-items-center ">
                    <div class="col ">
                      <p>Maker</p>
                    </div>
                    <div class="col ">
                      <p>Full Stack Developer</p>
                    </div>
                    <div class="col ">
                      <p>Robotics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //       <h1>High School Networking App</h1>
//       <button onClick={handleLogin}>Login</button> */}
    </main>
  );
};

export default LoggedInHome;
