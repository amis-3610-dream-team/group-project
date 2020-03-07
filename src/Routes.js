import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import LogBook from "./LogBook/LogBook";
import Logout from "./Logout/Logout";
import MySchedule from "./MySchedule/MySchedule";
import Reserve from "./Reserve/Reserve";
import Weather from "./Weather/Weather";

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/LogBook" component={LogBook} />
            <Route path="/Logout" component={Logout} />
            <Route path="/MySchedule" component={MySchedule} />
            <Route path="/Reserve" component={Reserve} />
            <Route path="/Weather" component={Weather} />
        </Switch>
    );
}
