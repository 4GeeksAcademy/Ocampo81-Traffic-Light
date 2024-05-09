//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import TrafficLight from "./component/TrafficLight";

// include your styles into the webpack bundle


ReactDOM.render(<TrafficLight/>, document.querySelector('#app'));