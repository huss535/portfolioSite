const HamMenu = ({ isOpen, onToggle }) => {
    return (
        <div className={`ham-menu ${isOpen ? 'open' : ''}`} onClick={onToggle}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>

        </div>
    );
}


export default HamMenu;