import React from 'react';
import ProjectShowcase from '../components/ProjectShowcase';

const Home: React.FC = () => {
    return (
        <div className="content-box">
            <h1>Welcome to my Site!</h1>
            <p>
                I am a web developer with a passion for creating dynamic web applications. I specialize in front-end technologies like React and Angular, but I also have experience with back-end technologies like Node.js and Express.
            </p>
            <ProjectShowcase maxProjects={3} />
        </div>
    );
};

export default Home;