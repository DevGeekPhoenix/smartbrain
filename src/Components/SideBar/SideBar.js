import Logopic from "./user.png";

const SideBar = ({ onRouteChange }) => {
  return (
    <div className="sidebar">
      <div className="sidebaritems">
        <div className="userinfo">
          <img className="logoimg" style={{ height: "150px" }} src={Logopic} />
          <div>{"Hi Ho3ein"}</div>
          <div>{"Your current rank is: #5"}</div>
        </div>
      </div>
      <button
        className="btnsignout"
        onClick={() => onRouteChange("SignInAndUp")}
      >
        Sign Out
      </button>
    </div>
  );
};
export default SideBar;
