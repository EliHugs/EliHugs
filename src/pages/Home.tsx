import React from 'react';
import ProjectShowcase from '../components/ProjectShowcase';

const Home: React.FC = () => {
    return (
        <div className="content-box">
            <h1>Welcome to my Site!</h1>
            <p>
           I am a recent graduate of Appalachian State University with a Bachelor of Science in Computer Science, complemented by an Associate of Science in Business Administration. Below you can find some of my most recent projects where I combine strong technical skills in programming with a creative and solution-oriented approach to problem-solving.
            </p>
            <ProjectShowcase maxProjects={3} />
        </div>
    );
};

export default Home;