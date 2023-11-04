import "./StudentProfile.css";

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
      <h1>This is a Mentor Profile</h1>
    </>
  );
}

export default StudentProfile;
