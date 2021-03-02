import React from 'react';
import Navlink from './Navlink';
import PreviousButton from '../buttons/PreviousButton';
import NextButton from '../buttons/NextButton';

export default function Navigation() {
    return (
        <span>
            <PreviousButton />
            <Navlink title="Home" link="/" />
            <Navlink title="Portfolio" link="/portfolio" />
            <Navlink title="Resume" link="/resume" />
            <NextButton />
        </span>
    )
}