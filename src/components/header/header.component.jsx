import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/internet.svg'

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="navigations">
                <Link className="navigation" to="/">Home</Link>
                <Link className="navigation" to="/about">About</Link>
            </div>
        </div>
    )
}

export default Header
