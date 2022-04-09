/** @format */

import React, { useState, useEffect, useRef } from "react";
import "./VideoScrollComponents.css";
export const VideoScroll = () => {
    const [clicked1, setClicked1] = useState(true);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [clicked4, setClicked4] = useState(false);
    const [muted, setMuted] = useState(true);
    const vidRef = useRef();
    useEffect(() => {
        vidRef.current.play();
    }, []);
    return (
        <div className='videoBox'>
            <video className='video' autoPlay loop muted={muted} ref={vidRef}>
                <source
                    src={
                        "https://acharya.ac.in/assets/Video/My%20Movie%2012.mp4"
                    }></source>
            </video>
            <button
                className='mute'
                onClick={() => {
                    setMuted(!muted);
                }}>
                {muted ? "unmute" : "mute"}
            </button>
            <div className='ScrollBar'>
                <button
                    className='ScrollButton'
                    id='button'
                    style={{ backgroundColor: clicked1 && "#00087B" }}
                    onClick={() => {
                        setClicked1(true);
                        setClicked2(false);
                        setClicked3(false);
                        setClicked4(false);
                        console.log(clicked1);
                    }}></button>
                <button
                    className='ScrollButton'
                    id='button2'
                    style={{ backgroundColor: clicked2 && "#00087B" }}
                    onClick={() => {
                        setClicked1(false);
                        setClicked2(true);
                        setClicked3(false);
                        setClicked4(false);
                        console.log(clicked2);
                    }}></button>
                <button
                    className='ScrollButton'
                    id='button3'
                    style={{ backgroundColor: clicked3 && "#00087B" }}
                    onClick={() => {
                        setClicked1(false);
                        setClicked2(false);
                        setClicked3(true);
                        setClicked4(false);
                        console.log(clicked3);
                    }}></button>
                <button
                    className='ScrollButton'
                    id='button'
                    style={{ backgroundColor: clicked4 && "#00087B" }}
                    onClick={() => {
                        setClicked1(false);
                        setClicked2(false);
                        setClicked3(false);
                        setClicked4(true);
                        console.log(clicked4);
                    }}></button>
            </div>
        </div>
    );
};

export default VideoScroll;
