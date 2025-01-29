/* eslint-disable react/prop-types */

import { useState } from "react";
const MinButton = ({ text, link, isButton, isSubmitting }) => {

    const [isActive, setIsActive] = useState(false);

    const handleTouchStart = () => {
        setIsActive(true);
    };

    const handleTouchEnd = () => {
        setIsActive(false);
    };

    const handleClick = () => {
        setIsActive(true);
        // Delay setting isActive back to false to ensure the animation is visible
        setTimeout(() => setIsActive(false), 200);
    }


    if (isButton) return (
        <button
            className={`button-link ${isActive ? "active-1" : ""}`}
            onClick={handleClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd} type="submit" disabled={isSubmitting}

        >


            {text}

        </button>)

    else return (<a


        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`button-link ${isActive ? "active-1" : ""}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
    >
        {text}

    </a>);

}

export default MinButton;