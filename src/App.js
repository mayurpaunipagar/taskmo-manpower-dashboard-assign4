import { useState } from "react";
import MyLogin from "./component/myLogin";
import MyNewProfile from "./component/myNewProfile";
import MyProfile from "./component/myProfile";
import NavigationComp from "./component/navigationComp";

import "./App.css";
import MyTransaction from "./component/myTransaction";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MyHome from "./component/myHome";
import MyReport from "./component/myReport";
import MyReportDetails from "./component/myReportDetails";
import MyDropDown from "./component/myDropDown";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [navList, setNavList] = useState({
    MyNewProfile: true,
    MyReport: false,
    MyTransaction: false,
    MyProfile: false,
  });
  return (
    <BrowserRouter>
      <div className="App">
        {loggedIn ? (
          <>
            <NavigationComp setNavList={setNavList} navList={navList} />
            <div className="my-main-content">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                <Route path="/home" component={MyHome} />
                <Route path="/new-profile" component={MyNewProfile} />
                <Route path="/report" component={MyReport} exact={true} />
                <Route path="/transactions" component={MyTransaction} />
                <Route path="/profile" component={MyProfile} />
                <Route path="/report/1" component={MyReportDetails} />
              </Switch>
            </div>
          </>
        ) : (
          <MyLogin setLoggedIn={setLoggedIn} />
        )}
      </div>
    </BrowserRouter>
  );
}
