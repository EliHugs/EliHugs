import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectShowcaseProps {
    maxProjects?: number;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ maxProjects }) => {
    const projects = [
        { title: 'Cool Project', description: 'This project is a card-based roguelike game where players build a deck of cards to navigate through procedurally generated dungeons. Each card represents an action, such as attacks, defense, or special abilities, and players must strategically choose their moves to survive increasingly difficult enemies and challenges. The game focuses on deck-building, tactical decision-making, and replayability, offering a unique experience with every playthrough.', imageUrl: 'https://futuretechnologies.com/wp-content/uploads/2016/05/placeholder.gif', webAddress: '/projects/cool-project' },
        { title: 'Epic Project', description: 'This project involves creating a short platformer game in Godot, featuring a main character that navigates through various levels filled with obstacles and enemies. Players will control the characters movement, jumping, and interactions to complete each level while collecting items and avoiding hazards. The goal is to build a fun, polished experience with smooth controls, engaging level design, and simple yet challenging gameplay.', imageUrl: 'https://t3.ftcdn.net/jpg/06/04/96/54/360_F_604965492_lCfxDUwNF1YiogR3SN0lbmbdvFnfDCHa.jpg', webAddress: '/projects/epic-project' },
        { title: 'Super Project', description: 'This project focuses on creating a database to manage a Magic: The Gathering card collection. It will store key details such as card name, set, rarity, card type, and abilities, allowing users to easily search, filter, and organize their collection. The goal is to provide an efficient way to track and manage cards while ensuring quick access to relevant information.', imageUrl: 'https://baconmockup.com/1280/720', webAddress: '/projects/super-project' },
        { title: 'Amazing Project', description: 'This project is a weather forecasting application that provides real-time weather updates, forecasts, and alerts. Users can search for weather information by city or zip code and view detailed weather data, including temperature, humidity, wind speed, and precipitation. The app also features interactive weather maps and radar images.', imageUrl: 'https://images.ctfassets.net/ihx0a8chifpc/oPtkn7DsBOsv8aitV1qns/1606c26302d81bab448e3a39581f86b5/lorem-flickr-1280x720.jpg', webAddress: '/projects/amazing-project' },
        { title: 'Fantastic Project', description: 'This project is a personal finance management tool that helps users track their income, expenses, and savings. It includes features such as budget creation, expense categorization, and financial goal setting. Users can generate reports and visualizations to gain insights into their spending habits and make informed financial decisions.', imageUrl: 'https://picsum.photos/id/29/367/267', webAddress: '/projects/fantastic-project' },
        { title: 'Incredible Project', description: 'This project is a fitness tracking app that allows users to log their workouts, set fitness goals, and track their progress over time. The app includes features such as workout routines, exercise tutorials, and progress charts. Users can also connect with friends and share their achievements on social media.', imageUrl: 'https://placebear.com/1280/720', webAddress: '/projects/incredible-project' },
    ];
        const navigate = useNavigate();

    const handleProjectClick = (webAddress: string) => {
        navigate(webAddress);
    };

    const displayedProjects = maxProjects ? projects.slice(0, maxProjects) : projects;

    return (
        <div className="project-showcase">
            <ul>
                {displayedProjects.map((project, index) => (
                    <li 
                        key={index} 
                        className="project-item"
                        onClick={() => handleProjectClick(project.webAddress)}
                        style={{ cursor: 'pointer' }}
                    >
                        <h3>{project.title}</h3>
                        <img src={project.imageUrl} alt={project.title} className="project-image" /> 
                        <div className="project-description">   
                            <p>{project.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectShowcase;