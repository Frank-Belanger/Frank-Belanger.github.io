import React, { useContext } from "react";
import Context from "../../Context";

export default function PortfolioCard(props) {
    const { FontAwesomeIcon } = useContext(Context);

    return (
        <div className="inline-block">
            <div className="portfolio-card">
                <div className="portfolio-card-title">{props.title}</div>
                <div className="portfolio-card-desc">{props.desc}</div>
                <div className="portfolio-card-buttons-container">
                    <a href={props.src} className="button button-outline portfolio-btn">
                        <FontAwesomeIcon icon={["fab", "github"]} />
                        {"Code"}
                    </a>
                    <a href={props.url} className="button button-outline portfolio-btn">
                        <FontAwesomeIcon icon={["fas", "cogs"]} />
                        {"Live"}
                    </a>
                </div>
                <div className="portfolio-card-img" style={{ backgroundImage: `url(${props.img})` }} />
            </div>
        </div>
    );
}
