import React from 'react';
import ResumeLeftSide from './ResumeLeftSide';
import ResumeRightSide from './ResumeRightSide';

export default function ResumeDescription() {
    return (
        <div className="resume-description">
           <ResumeLeftSide />
           <ResumeRightSide />
        </div>
    );
}