import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; 2025 Elijah Hughes</p>
            <div className="social-media">
                <a href="https://x.com/theelihug" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/elijah-hughes-361829255/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/EliHug" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" />
                </a>
                <a href="https://bsky.app/profile/theelihug.bsky.social" target="_blank" rel="noopener noreferrer">
                    <img src="https://blueskyweb.xyz/favicon.ico" alt="BlueSky" style={{ width: '24px', height: '24px', marginLeft: '10px' }} />
                </a>
                <a href="https://elihug.itch.io/" target="_blank" rel="noopener noreferrer">
                    <img src="https://static.itch.io/images/itchio-textless-black.svg" alt="itch.io" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;