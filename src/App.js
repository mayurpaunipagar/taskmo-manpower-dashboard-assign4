import { useState } from "react";
import MyLogin from "./component/myLogin";
import MyNewProfile from "./component/myNewProfile";
import MyProfile from "./component/myProfile";
import NavigationComp from "./component/navigationComp";

import "./App.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [navList, setNavList] = useState({
    MyNewProfile: true,
    MyReport: false,
    MyTransaction: false,
    MyProfile: false
  });
  return (
    <div className="App">
      {loggedIn ? (
        <>
          <NavigationComp setNavList={setNavList} navList={navList} />
          <div className="my-main-content">
            {navList.MyNewProfile ? <MyNewProfile /> : null}
            {navList.MyReport ? <MyNewProfile /> : null}
            {navList.MyTransaction ? <MyNewProfile /> : null}
            {navList.MyProfile ? <MyProfile /> : null}
          </div>
        </>
      ) : (
        <MyLogin setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}
