import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectShowcaseProps {
    maxProjects?: number;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ maxProjects }) => {
    const projects = [
        { title: 'Cool Project', description: 'This project is a card-based roguelike game where players build a deck of cards to navigate through procedurally generated dungeons. Each card represents an action, such as attacks, defense, or special abilities, and players must strategically choose their moves to survive increasingly difficult enemies and challenges.', 
            imageUrl: 'https://fastly.picsum.photos/id/41/400/300.jpg?hmac=pFL0jIQpf3Ri-60M7k0fzEa0D3wLQFyiLfmZRmMrvok', webAddress: '/projects/cool-project' },
        { title: 'Epic Project', description: 'This project involves creating a short platformer game in Godot, featuring a main character that navigates through various levels filled with obstacles and enemies.',
             imageUrl: 'https://fastly.picsum.photos/id/848/400/300.jpg?hmac=mG-uf7YDQEwO82Xj5fhefIh-w3guMMWczQuFe2pkPmg', webAddress: '/projects/epic-project' },
        { title: 'Super Project', description: 'This project focuses on creating a database to manage a Magic: The Gathering card collection. It will store key details such as card name, set, rarity, card type, and abilities, allowing users to easily search, filter, and organize their collection. The goal is to provide an efficient way to track and manage cards while ensuring quick access to relevant information.', 
            imageUrl: 'https://fastly.picsum.photos/id/966/400/300.jpg?hmac=sgi57fkehXoB_xOaf3n0BnJtDsgojSggX0D53hgai-k', webAddress: '/projects/super-project' },
        { title: 'Amazing Project', description: 'This project is a weather forecasting application that provides real-time weather updates, forecasts, and alerts. Users can search for weather information by city or zip code and view detailed weather data, including temperature, humidity, wind speed, and precipitation. The app also features interactive weather maps and radar images.', 
            imageUrl: 'https://fastly.picsum.photos/id/943/400/300.jpg?hmac=mDRGKGY7tW2-WxqopytUAOzxudLVWX04wULlHjhkE_M', webAddress: '/projects/amazing-project' },
        { title: 'Fantastic Project', description: 'This project is a personal finance management tool that helps users track their income, expenses, and savings. It includes features such as budget creation, expense categorization, and financial goal setting. Users can generate reports and visualizations to gain insights into their spending habits and make informed financial decisions.', 
            imageUrl: 'https://fastly.picsum.photos/id/1012/400/300.jpg?hmac=o5TZ36SB16B0Tjn_eiLGKj-wynwSmiiov-jutCGl3Ww', webAddress: '/projects/fantastic-project' },
        { title: 'Incredible Project', description: 'This project is a fitness tracking app that allows users to log their workouts, set fitness goals, and track their progress over time. The app includes features such as workout routines, exercise tutorials, and progress charts. Users can also connect with friends and share their achievements on social media.', 
            imageUrl: 'https://fastly.picsum.photos/id/834/400/300.jpg?hmac=EYPykEvnCTX5zgKvddKJ1nrFitzE8g3u2t53fikhelk', webAddress: '/projects/incredible-project' },
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