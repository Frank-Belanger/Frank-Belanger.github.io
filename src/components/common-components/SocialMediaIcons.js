import React from 'react';
import SocialMediaIcon from "./SocialMediaIcon";

export default function SocialMediaIcons(props) {
    const socialMedia = [
            {
                href: "mailto:frank.belange@gmail.com",
                icon: "envelope",
                prefix: "far"
            },
            {
                href: "www.linkedin.com/in/frankbelanger",
                icon: "linkedin",
                prefix: "fab"           
            },
            {
                href: "https://github.com/Frank-Belanger",
                icon: "github",
                prefix: "fab"
            }
    ]
    return (
        <div className={`social-media-links ${ props.SocialMediaIconsLandscape }`}>
            {socialMedia.map((item, index) => (
                <SocialMediaIcon
                    key={index}
                    href={item.href}
                    icon={item.icon}
                    prefix={item.prefix}
                />
            ))}
        </div>
    )
}