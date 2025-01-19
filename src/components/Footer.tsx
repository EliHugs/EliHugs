import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; 2025 Elijah Hughes</p>
            <div className="social-media">
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/elijah-hughes-361829255/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/EliHug" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;