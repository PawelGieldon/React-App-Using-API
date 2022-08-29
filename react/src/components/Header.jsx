import React from "react"
import dog from "../images/dogo.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={dog}
                className="header-image"
                alt="dog"
            />
            <h3 className="left-text">Dogs</h3>
            <p className="paragraph">What the dog doing?</p>
            <h4 className="right-text">Many Dog Images</h4>
        </header>
    )
}