import "./style.css";
import React, { useState } from "react";

export default function MyDropDown({ iconFileName, optionsArr }) {
  const [extend, setExtend] = useState(false);
  return (
    <>
      <div className="ddContainer">
        <div
          className="myddStyle"
          onClick={() => {
            setExtend(!extend);
          }}
        >
          <img
            src={`${window.location.origin}/images/${iconFileName}`}
            alt={iconFileName}
          />
          {extend ? (
            <>
              {/* dropdownoptions */}
              <div className="myddOptions ">
                {optionsArr.map((element, idx) => {
                  return (
                    <>
                      <div className="grayText" key={idx}>{element}</div>
                    </>
                  );
                })}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
