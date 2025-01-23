import React from 'react';
import './Projects.css';

function Projects() {
    const fileMap = [
        {name: "Project Database", icon: "icons/MS_newspaper.png", link: "https://github.com/jayskar99/Project-Management-Database"},
        {name: "Store Database", icon: "icons/MS_newspaper.png", link: "https://github.com/jayskar99?tab=repositories"},
        {name: "Dungeon Crawler", icon: "icons/MS_dice.png", link: "https://github.com/jayskar99/dungeon-crawler"},
        {name: "Logic Gate CPU", icon: "icons/MS_computer.png", link: "https://github.com/jayskar99/CPU"},
        {name: "Pokemon Go", icon: "icons/MS_dice.png", link: "https://github.com/jayskar99/pokemon-go"},
        {name: "Java Testing", icon: "icons/MS_tree.png", link: "https://github.com/jayskar99/JavaTesting"}
    ]

    return (
        <div className="background">
            <div className="options">
                <div className="option">File</div>
                <div className="option">Edit</div>
                <div className="option">Search</div>
                <div className="option">Help</div>
            </div>
            <div className="files">
                {fileMap.map(({ name, icon, link}) => (
                    <a className="file" href={link}>
                        <img className="project-icon" src={icon} alt={`${name.toLowerCase()} icon`} />
                        <p className="project-icon-name">{name}</p>
                    </a>

                ))}
            </div>
        </div>
    );
}

export default Projects;