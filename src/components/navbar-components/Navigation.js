import React, { useContext, useState } from 'react';
import Context from '../../Context';
import Navlink from './Navlink';

export default function Navigation() {
    const { textContent, FontAwesomeIcon } = useContext(Context);
    const [isMenuOpen, setIsMenuOpen ] = useState(false);

    function handleOpen() {
        isMenuOpen === true ? setIsMenuOpen(false) : setIsMenuOpen(true);
    }

    return (
        <div>
            <span className="nav-links-lg-screen">
                <Navlink title={ textContent.navigation.home } link="/" />
                <Navlink title={ textContent.navigation.portfolio } link="/portfolio" />
                <Navlink title={ textContent.navigation.resume } link="/resume" />
            </span>
            <span className="nav-sm-screen">
            {isMenuOpen === true ? (
                <span className="button" onClick={ handleOpen }>
                    <FontAwesomeIcon icon={["fas", "times"]} />
                </span>
                ) : (
                <span className="button" onClick={ handleOpen }>
                    <FontAwesomeIcon icon={["fas", "bars"]} />
                </span>
            )}
            <ul className={ isMenuOpen ? "nav-links-sm-screen show-nav" : "nav-links-sm-screen" }>
                <li className="navlink-sm-screen" onClick={ handleOpen }>
                    <Navlink title={ textContent.navigation.home } link="/" />
                </li>
                <li className="navlink-sm-screen" onClick={ handleOpen }>
                    <Navlink title={ textContent.navigation.portfolio } link="/portfolio" />
                </li>
                <li className="navlink-sm-screen" onClick={ handleOpen }>
                    <Navlink title={ textContent.navigation.resume } link="/resume" />
                </li>
                </ul>
            </span>
        </div>
    )
}