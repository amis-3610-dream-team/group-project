import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import LogBook from "../../Pages/LogBook/LogBook";
import MySchedule from "../../Pages/MySchedule/MySchedule";
import Reserve from "../../Pages/Reserve/Reserve";
import Weather from "../../Pages/Weather/Weather";

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/LogBook" component={LogBook} />
            <Route path="/MySchedule" component={MySchedule} />
            <Route path="/Reserve" component={Reserve} />
            <Route path="/Weather" component={Weather} />
        </Switch>
    );
}
