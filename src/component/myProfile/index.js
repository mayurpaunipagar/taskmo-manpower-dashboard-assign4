import "./style.css";
import profileIcon from "./../../icons/profile1.png";

export default function MyProfile() {
  return (
    <>
      <div className="my-profile-container">
        <br/>
        <div className="categoryStyle">Personal</div>
        <div className="myProfileItem-1">
          <div className="center mycol">
            <img
              className="profileAnimeImageSize"
              src={profileIcon}
              alt="profile icon"
            />
            <div className="helloText">Hello</div>
          </div>
          <div className="profileInputContainer center">
            <div className="mycol">
              <div>
                <label className="profile-input-label">Name</label>
                <input
                  className="p1-iField"
                  type="text"
                  placeholder="Eg. your text here"
                />
              </div>
              <div>
                <label className="profile-input-label">Contact</label>
                <input
                  className="p1-iField"
                  type="text"
                  placeholder="Eg. your text here"
                />
              </div>
              <div>
                <label className="profile-input-label">Department</label>
                <input
                  className="p1-iField"
                  type="text"
                  placeholder="Eg. your text here"
                />
              </div>
            </div>
            <div className="mycol">
              <div>
                <label className="profile-input-label">Designation</label>
                <input
                  className="p1-iField"
                  type="text"
                  placeholder="Eg. your text here"
                />
              </div>
              <div>
                <label className="profile-input-label">Email</label>
                <input
                  className="p1-iField"
                  type="text"
                  placeholder="Eg. your text here"
                />
              </div>
              <div>
                <label className="profile-input-label">State</label>
                <input
                  className="p1-iField"
                  type="text"
                  placeholder="Eg. your text here"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="categoryStyle">Company</div>
        <div className="myProfileItem-2 ">
          <div className="mycol">
            <div className="m5">
              <label className="profile-input-label">TDS</label>
              <input
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
            </div>
            <div className="m5">
              <label className="profile-input-label">Company Name</label>
              <input
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
            </div>
            <div className="m5">
              <label className="profile-input-label">Brand Logo</label>
              <div
                className="BrandLogoBtnContainer"
              />
            </div>
            <div className="m5">
              <label className="profile-input-label">Website</label>
              <input
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
            </div>
            <div className="m5">
              <label className="profile-input-label">About Company</label>
              <textarea
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
            </div>
          </div>
          {/* another column */}
          <div className="mycol">
            <div className="m5">
              <label className="profile-input-label">GST IN</label>
              <input
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
            </div>
            <div className="m5">
              <label className="profile-input-label">Brand Name</label>
              <input
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
            </div>
            <div className="brandImageContainer" style={{border:"1px solid red",height:"136px"}}>
              
            </div>
            <div className="m5">
              <label className="profile-input-label">
                Company Registration Number
              </label>
              <input
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
            </div>
            <div className="m5">
              <label className="profile-input-label">Billing Address</label>
              <input
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
