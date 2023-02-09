import React, { useEffect, useState } from "react";
import "./ProgressBar.scss"
/**
 * Component Progressbar
 * @param {String} title
 * @param {Number} progression
 * @returns  {JSX} React Component
 */
const ProgressBar = ({title, progression}) => {
    const colors = {
        color1 : "#7160E8",
        color2: "#60ADE8",
        color3: "#60E8B6",
        color4: "#30DB63"
    }
const [color, setColor] = useState(colors.color1)

    const progressBarStyle = {
        width : `${progression}%`,
        height : "100%",
        transition: "width .26s ease-in-out",
        backgroundColor: `${color}`
    }
    useEffect(() => {
        if(progression < 25){
            setColor(colors.color1)
        }
        if(progression >= 25){
            setColor(colors.color2)
        }
        if(progression >= 50){
            setColor(colors.color3)
        }
        if(progression >= 75){
            setColor(colors.color4)
        }

    }, [colors.color1, colors.color2, colors.color3, colors.color4, progression])


    return(
        <div className="container__progressbar">
            <div className="container__progressbar-title">
                <span>{title}</span>
            </div>
            <div className="container__progressbar-wrapper">
                <span>{`${progression}%`}</span>
                <div className="box-progressbar">
                    <span style={progressBarStyle}></span>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;