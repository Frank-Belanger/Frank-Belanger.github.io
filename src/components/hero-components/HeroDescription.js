import React, { useContext } from 'react';
import Context from '../../Context';

export default function HeroDescription() {
    const { textContent } = useContext(Context);

    return (
        <div className="hero-description">{ textContent.home.greetings }<br/>{ textContent.home.description }</div>
    )
}