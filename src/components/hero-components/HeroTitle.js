import React, { useContext } from 'react';
import Context from "../../Context";

export default function HeroTitle() {
    const { FontAwesomeIcon } = useContext(Context);

    return (
        <div className="hero-title">
            <FontAwesomeIcon
                className="hero-title-image"
                icon="user-circle"
                size="3x"
            />
        </div>
    )
}