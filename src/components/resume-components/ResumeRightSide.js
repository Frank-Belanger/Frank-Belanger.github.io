import React, { useContext } from 'react';
import Context from '../../Context';
import ResumeRightSideLine from './ResumeRightSideLine';

export default function ResumeRightSide() {
    const { textContent } = useContext(Context);

    return (
        <div className="resume-right-side">
            <div className="resume-right-side-element">
                <ResumeRightSideLine text={textContent.resume.education.degree} />
                <ResumeRightSideLine text={textContent.resume.education.university} />
                <ResumeRightSideLine text={textContent.resume.education.years} />
            </div>
            <div className="resume-right-side-element">
                <ResumeRightSideLine text={ textContent.resume.experience.place } />
                <ResumeRightSideLine text={ textContent.resume.experience.work } />
                <ResumeRightSideLine text={ textContent.resume.experience.year } />
            </div>
            <div className="resume-right-side-element">
                <ResumeRightSideLine text={ textContent.resume.languages.french } />
                <ResumeRightSideLine text={ textContent.resume.languages.english } />
                <ResumeRightSideLine text={ textContent.resume.languages.german } />
            </div>
            <div className="resume-right-side-element right-side-stack-grid">
                <div className="right-side-stack-item">Java</div>
                <div className="right-side-stack-item">Python</div>
                <div className="right-side-stack-item">Javascript</div>
                <div className="right-side-stack-item">C#</div>
                <div className="right-side-stack-item">C++</div>
                <div className="right-side-stack-item">Bash</div>
                <div className="right-side-stack-item">Powershell</div>
                <div className="right-side-stack-item">PostgreSQL</div>
                <div className="right-side-stack-item">MongoDB</div>
                <div className="right-side-stack-item">NoSQL</div>
            </div>
        </div>
    );
}