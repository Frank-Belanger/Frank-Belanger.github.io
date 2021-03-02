import React from 'react';
import SocialMediaIcons from '../common-components/SocialMediaIcons';
import ResumeButton from '../buttons/ResumeButton';

export default function Footer() {
    return (
        <div className="footer">
            <ResumeButton />
            <SocialMediaIcons />
        </div>
    )
}