const navigate = useNavigate();

const GoToProfile = () => {
  return (
    <button
      className="logout-btn btn btn-secondary rounded-3"
      onClick={navigate("/landing")}
    >
      Go to Profile
    </button>
  );
};

export default GoToProfile;
