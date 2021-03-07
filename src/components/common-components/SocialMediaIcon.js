import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function SocialMediaIcon() {
    return (
        <div>
          <a href="mailto:frank.belange@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="button social-media-icon" size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/francois-belanger-8539a0154/">
            <FontAwesomeIcon icon={faLinkedin} className="button social-media-icon" size="2x" />
          </a>
          <a href="https://github.com/Frank-Belanger">
            <FontAwesomeIcon icon={faGithub} className="button social-media-icon" size="2x" />
          </a>
        </div>
  );
}