import "./style.css";
import userImage from "./../../icons/user-image.png";
import profileIcon from "./../../icons/profile.png";
import reportIcon from "./../../icons/list.png";
import transactionIcon from "./../../icons/transaction-1.png";
import userIcon from "./../../icons/profileSmallIcon.png";
import { Link } from "react-router-dom";

export default function NavigationComp({ setNavList, navList }) {
  const userName = "Abhijit M";

  return (
    <>
      <div className="w3-sidebar my-navigation w3-bar-block">
        <div className="user-container">
          <div>
            <img className="nav-icon" src={userImage} alt="user" />
          </div>
          <div>
            <p className="user-info">
              Welcome,<div className="user-name">{userName}</div>
            </p>
          </div>
        </div>
        <Link to="/home">
          <div
            className={`nav-item ${
              navList.MyNewProfile ? "nav-highlight" : null
            }`}
            onClick={() => {
              setNavList({
                MyNewProfile: true,
                MyReport: false,
                MyTransaction: false,
                MyProfile: false,
              });
            }}
          >
            <span>
              <img className="nav-icon" src={profileIcon} alt="profile icon" />
            </span>
            <span className="nav-text">Home</span>
          </div>
        </Link>
        <Link to="/report">
          <div
            className={`nav-item ${navList.MyReport ? "nav-highlight" : null}`}
            onClick={() => {
              setNavList({
                MyNewProfile: false,
                MyReport: true,
                MyTransaction: false,
                MyProfile: false,
              });
            }}
          >
            <span>
              <img className="nav-icon" src={reportIcon} alt="profile icon" />
            </span>
            <span className="nav-text">Report</span>
          </div>
        </Link>
        <Link to="/transactions">
          <div
            className={`nav-item ${
              navList.MyTransaction ? "nav-highlight" : null
            }`}
            onClick={() => {
              setNavList({
                MyNewProfile: false,
                MyReport: false,
                MyTransaction: true,
                MyProfile: false,
              });
            }}
          >
            <span>
              <img
                className="nav-icon"
                src={transactionIcon}
                alt="transaction icon"
              />
            </span>
            <span className="nav-text">Transaction</span>
          </div>
        </Link>
        <Link to="/profile">
          <div
            className={`nav-item ${navList.MyProfile ? "nav-highlight" : null}`}
            onClick={() => {
              setNavList({
                MyNewProfile: false,
                MyReport: false,
                MyTransaction: false,
                MyProfile: true,
              });
            }}
          >
            <span>
              <img className="nav-icon" src={userIcon} alt="profile icon" />
            </span>
            <span className="nav-text">Profile</span>
          </div>
        </Link>
      </div>
    </>
  );
}
