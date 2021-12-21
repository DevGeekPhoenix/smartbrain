import "./SignInAndUp.css";
import Logopic from "../SideBar/logo.jpg.png";

const SignInAndUp = ({ onRouteChange }) => {
  return (
    <div className="login-wrap">
      <div className="login-html">
        <img className="logoimg" style={{ height: "150px" }} src={Logopic} />
        <br />
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
        <label htmlFor="tab-1" className="tab">
          Sign In
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label htmlFor="tab-2" className="tab">
          Sign Up
        </label>
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label htmlFor="user" className="label">
                Username
              </label>
              <input id="user" type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>

            <div className="group">
              <input
                onClick={() => onRouteChange("home")}
                type="submit"
                className="button"
                value="Sign In"
              />
            </div>
          </div>
          <div className="sign-up-htm">
            <div className="group">
              <label htmlFor="user" className="label">
                Username
              </label>
              <input id="user" type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>

            <div className="group">
              <label htmlFor="pass" className="label">
                Email Address
              </label>
              <input id="pass" type="text" className="input" />
            </div>
            <div className="group">
              <input
                onClick={() => onRouteChange("home")}
                type="submit"
                className="button"
                value="Sign Up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignInAndUp;
