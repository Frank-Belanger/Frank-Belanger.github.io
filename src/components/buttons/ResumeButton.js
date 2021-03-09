import React, { useContext } from 'react';
import Context from '../../Context';

export default function ResumeButton(props) {
  const { FontAwesomeIcon, textContent } = useContext(Context);
  let CSSClasses = ["button", "button-download-resume", "navlink"];
  if(Object.keys(props).length !== 0)
  {
    props.addClassName.forEach(element => {
      CSSClasses.push(element);
    });
  }

  return (
    <a href={ textContent.download.resume } className={ CSSClasses.join(' ') }>
      <FontAwesomeIcon icon="cloud-download-alt" size="1x" className="resume-button-icon" />
      <p className="resume-text">{ textContent.navigation.resume }</p>
    </a>
  )
}