import React, { useContext } from 'react';
import Context from '../../Context';

export default function LanguageToggler() {
  const { handleSwitch } = useContext(Context);
    return (
      <div className="toggler">
        FR{" "}
        <label className="switch">
            <input type="checkbox" onChange={handleSwitch} />
            <span className="slider round"></span>
        </label>{" "}
        EN
      </div>
    );
  }