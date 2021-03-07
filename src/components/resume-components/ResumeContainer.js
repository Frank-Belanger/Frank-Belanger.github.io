import React from 'react';
import ResumeButton from '../buttons/ResumeButton';
import ResumeDescription from '../resume-components/ResumeDescription';

export default function ResumeContainer() {
    return (
        <div className="resume-section">
            <div className="resume-container">
                <ResumeDescription />     
                <ResumeButton addClassName={["button-outline"]}/>
            </div>
        </div>
    );
}