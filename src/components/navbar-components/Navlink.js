import React from 'react';
import { Link } from 'react-router-dom';

export default function Navlink(props) {
    return (
        <Link to={props.link}>
            <span className="button navlink">{props.title}</span>
        </Link>
    )
}