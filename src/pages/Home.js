import React from 'react';
import { StyledHeading, StyledBody } from '../components/Styles/StyledBodyElements';

const Home = () => {
    const skills = [
        "Senior",
        "Programming",
        "Fullstack",
        "Frontend",
        "Backend",
        "Java",
        "Python",
        "Javascript",
        "HTML",
        "CSS",
        "SQL",
        "C++",
        "C#",
        "OOP",
        "REST",
        "Virtualization",
        "Networking",
        "MongoDB",
        "Azure",
        "ReactJS",
        "JQuery",
        "Bootstrap",
        "Cyber Security",
        "Github",
        "UML",
        "ERD",
        "ASP.NET",
        "Linux",
        "Arch",
        "Debian",
        "Server Management",
        "Web Development",
        "Agile",
        "Algorithm",
        "API",
        "Bug",
        "Cache",
        "Code",
        "Data",
        "Debug",
        "Documentation",
        "DNS",
        "Domain",
        "Framework",
        "HTTP",
        "FTP",
        "Telnet",
        "SSH",
        "RDP",
        "Mobile",
        "Responsive",
        "MERN",
        "CRUD",
        "UI",
        "UX",
        "AJAX",
        "Async",
        "CLI",
        "TUI",
        "GUI"

    ];

    const randomSpacing = () => {
        const maxSpaces = window.screen.availWidth/6;
        return Math.floor(Math.random() * (maxSpaces));

    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            // random index from 0 to i
            let j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]];
        };
    };

    // shuffle skills to be random
    shuffleArray(skills);

    // put randomized skills into div
    let skillsDiv = [];
    for(let i = 0; i < skills.length; i++){

        //push div, random # of spaces, skills[i], then /div
        skillsDiv.push(<div style={{whiteSpace: "pre-wrap"}}>{' '.repeat(randomSpacing()) + skills[i]}</div>);
    };

    return(
        <div>
            <StyledHeading>
            Zach Nelson
            </StyledHeading>

            <StyledBody>
                <p>
                {skillsDiv}

                </p>
            </StyledBody>
        </div>
    )
}

export default Home;