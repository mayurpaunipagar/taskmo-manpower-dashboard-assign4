import "./style.css";

export default function MyNewProfile() {
  const formData = [
    "Name",
    "Email",
    "Contact",
    "Whatsapp",
    "Job Role",
    "State",
    "City",
    "Pincode",
  ];

  return (
    <>
      <div className="new-profile-container">
        <div className="my-new-profile">
          <div className="my-new-profile-form-container">
            <div>
              <div className="new-profile-text">Add New Profile </div>
              <img
                className="my-new-profile-img"
                src={window.location.origin +"/images/add-employe-image.svg"}
                alt="profile icon"
              />
            </div>
            <div className="my-form">
              {formData.map((el) => {
                if (el === "Job Role" || el === "State" || el === "City") {
                  return (
                    <>
                      <label className="profile-input-label">{el}</label>
                      <select
                        className="profile-input-field gray"
                        // type="text"
                        // placeholder="Eg. your text here"
                      >
                        <option value="Eg. your text here">Eg. your text here</option>
                        </select>
                    </>
                  );
                } else {
                  return (
                    <>
                      <label className="profile-input-label">{el}</label>
                      <input
                        className="profile-input-field"
                        type="text"
                        placeholder="Eg. your text here"
                      />
                    </>
                  );
                }
              })}
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
