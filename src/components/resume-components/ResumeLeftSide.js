import React, { useContext } from 'react';
import Context from '../../Context';
import ResumeLeftSideLine from './ResumeLeftSideLine';

export default function ResumeLeftSide() {
    const { textContent } = useContext(Context);

    const content = {
        first: {
            title: textContent.resume.education.title,
            props: {
                icon: "graduation-cap", 
                size: "sm",
                css: "resume-section-icon"
            }
        },
        second: {
            title: textContent.resume.experience.title,
            props: {
                icon: "briefcase"
            }
        },
        third: {
            title: textContent.resume.stack.title,
            props: {
                icon: "terminal"
            }
        },
        fourth: {
            title: textContent.resume.languages.title,
            props: {
                icon: "language"
            }
        }
    }
    
    return (
        <div className="resume-left-side">
            <ResumeLeftSideLine text={ content.first.title } iconProps={ content.first.props } />
            <ResumeLeftSideLine text={ content.second.title } iconProps={ content.second.props } />
            <ResumeLeftSideLine text={ content.third.title } iconProps={ content.third.props } />
            <ResumeLeftSideLine text={ content.fourth.title } iconProps={ content.fourth.props } />
        </div>
    );
}