/** @format */

import React, { Component } from "react";
import HomeScreen from "./screens/Home/HomeScreen";
import VideoScroll from "./components/videoScroll/VideoScrollComponents";
export class App extends Component {
    render() {
        return (
            <div>
                <HomeScreen />
                <VideoScroll />
            </div>
        );
    }
}

export default App;
