import "./style.css";
import passwordIcon from "./../../icons/password.png";
import userIcon from "./../../icons/user-icon.png";
import loginIcon from "./../../icons/login-icon.png";
export default function MyLogin({ setLoggedIn }) {
  return (
    <>
      <div className="myLogin">
        <div className="loginImage">
          <img className="loginImage" src={loginIcon} alt="Login Icon" />
        </div>
        <div>
          <div className="welcomeText">Welcome Back,</div>
          <div className="inputForm">
            <div className="input-container">
              <input
                className="input-field"
                type="text"
                placeholder="Username"
              />
              <i className="icon">
                <img className="icon" src={userIcon} alt="userIcon" />
              </i>
            </div>
            <div className="input-container">
              <input
                className="input-field"
                type="password"
                placeholder="Password"
              />
              <i className="icon">
                <img className="icon" src={passwordIcon} alt="passwordIcon" />
              </i>
            </div>
            <button
              className="loginBtn"
              onClick={() => {
                setLoggedIn(true);
              }}
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
