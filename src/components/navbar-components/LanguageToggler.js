import React from 'react';

export default function LanguageToggler() {  
    return (
      <div>
        FR{" "}
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>{" "}
        EN
      </div>
    );
  }