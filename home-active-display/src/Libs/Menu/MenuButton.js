import React, {useState} from 'react';
import './styles.scss';

export default function MenuButton(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        props.onClick();
    }

    const switchClass = (name) => {
        return isOpen ? name : null;
    }

    return (
        <div className="menu" onClick={toggleMenu}>
            <div className={switchClass("bar1")} ></div>
            <div className={switchClass("bar2")}></div>
            <div className={switchClass("bar3")}></div>
        </div>
    );
}