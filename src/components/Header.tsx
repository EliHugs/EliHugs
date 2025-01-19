import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>EliHug</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
            </nav>
        </header>
    );
};

export default Header;