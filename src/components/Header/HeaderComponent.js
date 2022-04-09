/** @format */

import React from "react";
import "./HeaderComponent.css";
export default function HeaderComponent() {
    return (
        <div>
            <header>
                <nav className='navBar'>
                    <div className='container'>
                        <img
                            src={require("../../assets/images/SOClogo.png")}
                            alt='soc logo'
                            className='logo'
                        />
                        <h1 className='logoText'>STUDENTS ONLY CHOICE</h1>
                    </div>
                    <div
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            display: "flex",
                        }}>
                        <button
                            onClick={() => {
                                console.log("Top Courses");
                            }}
                            style={{
                                height: "15%",
                                width: "30%",
                                background: "#fff",
                                marginLeft: 30,
                                borderRadius: 3,
                                alignItems: "center",
                                justifyContent: "space-between",
                                cursor: "pointer",
                                paddingLeft: 10,
                                paddingRight: 10,
                                display: "flex",
                                border: 0,
                            }}>
                            <p
                                style={{
                                    fontSize: 12,
                                    alignSelf: "center",
                                    font: "Roboto",
                                }}>
                                TOP COURSES
                            </p>
                            <img
                                src={require("../../assets/images/arrow.png")}
                                alt='arrow'
                                style={{ height: 20 }}
                            />
                        </button>
                        <div
                            style={{
                                height: "15%",
                                width: "60%",
                                background: "#fff",
                                marginLeft: 20,
                                borderRadius: 7,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",

                                justifyContent: "space-between",
                            }}>
                            <input
                                placeholder='Search Collages or Courses'
                                style={{
                                    height: 20,
                                    fontSize: 13,
                                    width: "80%",
                                    margin: "2.4%",
                                    paddingLeft: 10,
                                    outline: "none",
                                }}
                            />
                            <img
                                src={require("../../assets/images/search.png")}
                                alt='search'
                                style={{ height: 20, paddingRight: 10 }}
                            />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
