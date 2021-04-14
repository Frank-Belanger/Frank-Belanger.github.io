import React, { useContext, useEffect } from "react";
import Context from "../../Context";
import PortfolioCardsContainer from "./PortfolioCardsContainer";
import sleep from '../../helpers/sleep';

export default function PortfolioSectionContainer() {
    const { 
        FontAwesomeIcon, 
        textContent, 
        currentIndex, 
        setCurrentIndex,
        isMoving,
        setIsMoving
    } = useContext(Context);
    const length = textContent.portfolio.length;

    useEffect(() => {
        if (isMoving) sleep(300).then(() => setIsMoving(false));
    }, [isMoving, setIsMoving]);

    const prevClick = (next = 1) => {
        if (!isMoving) 
        {
            setIsMoving(true);
            setCurrentIndex(prev => {
                return (((prev - next) % length) + length) % length;
            });
        }
    };

    const nextClick = (next = 1) => {
        if (!isMoving) 
        {
            setIsMoving(true);
            setCurrentIndex(prev => {
                return (((prev + next) % length) + length) % length;
            });
        }
    };

    const handleDotClick = (index) => {
        if (index < currentIndex) prevClick(currentIndex - index);
        if (index > currentIndex) nextClick(index - currentIndex);
    };

    return (
        <div className="portfolio-section-container">
            <button className="portfolio button left" onClick={() => prevClick()}>
                <FontAwesomeIcon icon={["fas", "caret-left"]} />
            </button>
            <PortfolioCardsContainer />
            <button className="portfolio button right" onClick={() => nextClick()}>
                <FontAwesomeIcon icon={["fas", "caret-right"]} />
            </button>
            <div className="carousel-dots">
                {Array.from(textContent.portfolio).map((pos, index) => (
                    <button 
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={currentIndex === index ? "active dot" : "dot"} 
                    />
                ))}
            </div>
        </div>
    );
}
