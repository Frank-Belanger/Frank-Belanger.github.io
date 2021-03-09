import React, { useContext } from 'react';
import Context from '../../Context';
import ResumeLeftSideLine from './ResumeLeftSideLine';

export default function ResumeLeftSide() {
    const { textContent } = useContext(Context);

    const content = {
        education: {
            title: textContent.resume.education.title,
            icon: "graduation-cap"
        },
        experience: {
            title: textContent.resume.experience.title,
            icon: "briefcase"
        },
        stack: {
            title: textContent.resume.stack.title,
            icon: "terminal"
        },
        languages: {
            title: textContent.resume.languages.title,
            icon: "comment"
        }
    }
    
    return (
        <div className="resume-left-side">
            <ResumeLeftSideLine text={ content.education.title } icon={ content.education.icon } />
            <ResumeLeftSideLine text={ content.experience.title } icon={ content.experience.icon } />
            <ResumeLeftSideLine text={ content.languages.title } icon={ content.languages.icon } />
            <ResumeLeftSideLine text={ content.stack.title } icon={ content.stack.icon } />
        </div>
    );
}