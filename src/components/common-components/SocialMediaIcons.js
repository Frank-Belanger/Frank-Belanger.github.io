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
                href: "https://www.linkedin.com/in/francois-belanger-8539a0154/",
                icon: "linkedin",
                prefix: "fab"           
            },
            {
                href: "https://github.com/Frank-Belanger",
                icon: "github",
                prefix: "fab"
            }
    ]
    console.log(props.SocialMediaIconsLandscape)
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