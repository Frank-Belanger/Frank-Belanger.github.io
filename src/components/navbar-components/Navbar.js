import React from 'react';
import LanguageToggler from './LanguageToggler';
import Navigation from './Navigation';
import SocialMediaIcons from '../common-components/SocialMediaIcons';

export default function Navbar() {
    return (
        <div className="navbar">
            <LanguageToggler />
            <SocialMediaIcons SocialMediaIconsLandscape="social-media-icon-lndscp" />
            <Navigation />
        </div>
    )
}