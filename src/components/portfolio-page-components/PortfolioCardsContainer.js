import React, { useContext, useState, useEffect } from "react";
import Context from "../../Context";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioCardsContainer() {
    const { textContent, currentIndex } = useContext(Context);
    const length = textContent.portfolio.length;
    const [style, setStyle] = useState(() => { return {width: `calc(${length} * 67vw)`}});

    useEffect(() => {
        setStyle(() => {
            return {
                width: `calc(${length} * 67vw)`,
                transform: `translateX(calc(${currentIndex} * -67vw))`
            }
        })
    }, [length, currentIndex])

    return (
        <div className="portfolio-cards-container">
            <div className="portfolio-cards-wrapper" style={style}>
                {textContent.portfolio.map((item, index) => (
                    <PortfolioCard
                        index={index}
                        key={item.key}
                        title={item.title}
                        desc={item.desc}
                        img={item.img}
                        src={item.src}
                        url={item.url}
                        translate={index - currentIndex}
                    />
                ))}
            </div>
        </div>
    );
}
