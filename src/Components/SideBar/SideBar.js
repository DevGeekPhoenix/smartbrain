import Logopic from "./user.png";

const SideBar = ({ onRouteChange }) => {
  return (
    <div className="sidebar">
      <div className="sidebaritems">
        <div className="userinfo">
          <img className="logoimg" src={Logopic} />
          <br />
          <br />

          <div>{"Hi Ho3ein"}</div>
          <br />

          <div>{"Your current rank is: #5"}</div>
          <br />
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
