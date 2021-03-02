import React from 'react';
import LanguageToggler from './LanguageToggler';
import Navigation from './Navigation';

export default function Navbar() {
    return (
        <div className="navbar">
            <LanguageToggler />
            <Navigation />
        </div>
    )
}