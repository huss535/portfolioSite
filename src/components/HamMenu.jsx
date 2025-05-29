import { useState } from 'react';
import moonIcon from '../assets/dark.svg';
import sunIcon from '../assets/light.svg';

const HamMenu = ({ isOpen, onToggle, isLightMode, setIsLightMode }) => {

    const [spinning, setIsSpinning] = useState(false);


    const handletoggle = () => {

        setIsLightMode((prev) => { return !prev; })

        setIsSpinning(true);
        setTimeout(() => setIsSpinning(false), 500); // Matching CSS animation duration


    };


    return (

        <div id='bottom-nav'>

            <div className={`ham-menu ${isOpen ? 'open' : ''}`} onClick={onToggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>

            </div>
        </div>
    );
}


export default HamMenu;