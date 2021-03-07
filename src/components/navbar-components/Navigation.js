import React, { useContext } from 'react';
import Context from '../../Context';
import Navlink from './Navlink';

export default function Navigation() {
    const { textContent } = useContext(Context);
    return (
        <span className="nav-links">
            <Navlink title={ textContent.navigation.home } link="/" />
            <Navlink title={ textContent.navigation.portfolio } link="/portfolio" />
            <Navlink title={ textContent.navigation.resume } link="/resume" />
        </span>
    )
}