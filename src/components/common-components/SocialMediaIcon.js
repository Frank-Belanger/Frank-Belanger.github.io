import React, { useContext } from 'react';
import Context from '../../Context';

export default function SocialMediaIcon(props) {
  const { FontAwesomeIcon } = useContext(Context);

    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={[props.prefix, props.icon]} className="button social-media-icon" />
      </a>
  );
}