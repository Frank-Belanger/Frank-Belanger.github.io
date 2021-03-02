import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCloudDownloadAlt);

export default function ResumeButton() {
    return (
      <div className="button button-download-resume">
        <FontAwesomeIcon icon={['fas', 'cloud-download-alt']} size="2x" />
        <p>Resume</p>
      </div>
    )
}