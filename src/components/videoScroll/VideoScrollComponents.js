/** @format */

import React, { useState, useRef, useEffect } from "react";
import "./VideoScrollComponents.css";
import { VolumeOff, VolumeUp } from "@material-ui/icons";
export const VideoScroll = () => {
    const [clicked1, setClicked1] = useState(true);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [clicked4, setClicked4] = useState(false);
    const [muted, setMuted] = useState(true);

    const [vidRef, setVidRef] = useState(null);
    const setVideoToFullScreen = () => {
        const el = vidRef.current;
        console.log(el);
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        } else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        }
    };
    const videoNext1 = () => {
        setClicked1(false);
        setClicked2(true);
        setClicked3(false);
        setClicked4(false);
    };
    const videoNext2 = () => {
        setClicked1(false);
        setClicked2(false);
        setClicked3(true);
        setClicked4(false);
    };
    const videoNext3 = () => {
        setClicked1(false);
        setClicked2(false);
        setClicked3(false);
        setClicked4(true);
    };
    const videoNext4 = () => {
        setClicked1(true);
        setClicked2(false);
        setClicked3(false);
        setClicked4(false);
    };
    useEffect(() => {
        setVidRef(document.querySelector(".video"));
    }, []);
    return (
        <div className='videoBox'>
            {clicked1 && (
                <video
                    className='video'
                    autoPlay
                    muted={muted}
                    ref={vidRef}
                    onEnded={() => videoNext1()}
                    onClick={setVideoToFullScreen}>
                    <source
                        src={
                            "https://dl.dropboxusercontent.com/s/efqes1zh1s3xw3z/CHRIST.mp4"
                        }></source>
                </video>
            )}
            {clicked2 && (
                <video
                    className='video'
                    autoPlay
                    muted={muted}
                    ref={vidRef}
                    onEnded={() => videoNext2()}
                    onClick={setVideoToFullScreen}>
                    <source
                        src={
                            "https://dl.dropboxusercontent.com/s/y5j2mfehx49h6p2/SEA%20COLLEGE%20_%20GROUP%20OF%20INSTITUTIONS%2CBANGLORE%20%23INBONDEDUCARE%20%237907088220%20%23BANGALORE.mp4"
                        }></source>
                </video>
            )}
            {clicked3 && (
                <video
                    className='video'
                    autoPlay
                    muted={muted}
                    ref={vidRef}
                    onEnded={() => videoNext3()}
                    onClick={setVideoToFullScreen}>
                    <source
                        src={
                            "https://dl.dropboxusercontent.com/s/dznmriuk2gaomn4/Acharya%20campus%20college%20tour.mp4"
                        }></source>
                </video>
            )}
            {clicked4 && (
                <video
                    className='video'
                    autoPlay
                    muted={muted}
                    ref={vidRef}
                    onEnded={() => videoNext4()}
                    onClick={setVideoToFullScreen}>
                    <source
                        src={
                            "https://dl.dropboxusercontent.com/s/98k6uygxdybipat/REVA%20University%20%E2%80%93%20One%20Association%20for%20Many%20Great%20Careers.mp4"
                        }></source>
                </video>
            )}
            <button
                className='mute'
                onClick={() => {
                    setMuted(!muted);
                }}>
                {muted ? (
                    <VolumeOff className='muteIcon' />
                ) : (
                    <VolumeUp className='muteIcon' />
                )}
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
