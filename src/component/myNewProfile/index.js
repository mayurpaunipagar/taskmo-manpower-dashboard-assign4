import "./style.css";
import addProfileIcon from "./../../icons/add-profile.png";

export default function MyNewProfile() {
  return (
    <>
      <div className="new-profile-container">
        <div className="my-new-profile">
          <div className="my-new-profile-form-container">
            <div>
              <div className="new-profile-text">Add New Profile </div>
              <img
                className="my-new-profile-img"
                src={addProfileIcon}
                alt="profile icon"
              />
            </div>
            <div className="my-form">
              <label className="profile-input-label">Name</label>
              <input
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
              <label className="profile-input-label">Email</label>
              <input
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
              <label className="profile-input-label">Contact</label>
              <input
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
              <label className="profile-input-label">Whatsapp</label>
              <input
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
              <label className="profile-input-label">Job Role</label>
              <input
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
              <label className="profile-input-label">State</label>
              <input
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
              <label className="profile-input-label">City</label>
              <input
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
              <label className="profile-input-label">Pincode</label>
              <input
                className="profile-input-field"
                type="text"
                placeholder="Eg. your text here"
              />
              <div className="profile-button-container">
                <button className="profile-btn-add btn-style">ADD</button>
                <button className="profile-btn-clear btn-style">CLEAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
