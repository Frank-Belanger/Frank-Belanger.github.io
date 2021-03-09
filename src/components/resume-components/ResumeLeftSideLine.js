import React, { useContext } from 'react';
import Context from '../../Context';

export default function ResumeLeftSideLine(props) {  
    const { FontAwesomeIcon } = useContext(Context);
    
    return (          
        <div className="resume-left-side-element">
            <FontAwesomeIcon icon={ props.icon } className="resume-section-icon"/>
            { props.text }
        </div>
    );
}