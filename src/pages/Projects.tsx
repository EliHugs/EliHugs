import React from 'react';
import { Link } from 'react-router-dom';
import ProjectShowcase from '../components/ProjectShowcase'; // Adjust the path as necessary

const Projects: React.FC = () => {
    return (
        <div className="content-box">
            <h1>Projects Page</h1>
            <ProjectShowcase />
        </div>
    );
};

export default Projects;