import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/socialight.png";
import github from "./assets/img/icons/common/BRK.png";
import airbnb from "./assets/img/icons/common/Emed.png";

export const greetings = {
    name: "Dennis Chebon",
    title: "Hi all, I'm Chebon",
    description: "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Angular / React / Angular js / Nodejs / Php / Laravel / Python / Django / Flask and some other cool libraries and frameworks and Cross Platform Mobile Apps With React Native. Keep Scrolling For more!",
    resumeLink: "https://docs.google.com/document/d/1G69jtP2S-3IrFcWLSzBvIrF6nLrgfNcdwjIlqGODyFU/",
};

export const openSource = {
    githubUserName: "Chebon",
};

export const contact = {};

export const socialLinks = {
    facebook: "https://www.facebook.com/Chebon",
    instagram: "https://www.instagram.com/Chebon",
    twitter: "https://twitter.com/Chebon",
    github: "https://github.com/Chebon",
    linkedin: "https://ke.linkedin.com/in/dennis-chebon",
};

export const skillsSection = {
    title: "What I do",
    subTitle: "CURIOUS FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
        ),
        emoji(
            "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
        ),
        emoji(
            "⚡ Integration of third party services such as AWS / Digital Ocean / Azure "
        ),
    ],

    softwareSkills: [{
            skillName: "html-5",
            fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "logos:javascript",
        },
        {
            skillName: "TypeScript",
            fontAwesomeClassname: "logos:typescript-icon",
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "vscode-icons:file-type-npm",
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "vscode-icons:file-type-sql",
        },
        {
            skillName: "mongoDB",
            fontAwesomeClassname: "vscode-icons:file-type-mongo",
        },
        {
            skillName: "aws",
            fontAwesomeClassname: "logos:aws",
        },
        {
            skillName: "python",
            fontAwesomeClassname: "logos:python",
        },
        {
            skillName: "git",
            fontAwesomeClassname: "logos:git-icon",
        },
        {
            skillName: "docker",
            fontAwesomeClassname: "logos:docker-icon",
        },

    ],
};

export const SkillBars = [{
        Stack: "Frontend/Design", //Insert stack or technology you have experience in
        progressPercentage: "90", //Insert relative proficiency in percentage
    },
    {
        Stack: "Backend",
        progressPercentage: "70",
    },
    {
        Stack: "Programming",
        progressPercentage: "60",
    },
];

export const educationInfo = [{
    schoolName: "Kabarak University",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2012 - Dec 2015",
    desc: "",
    descBullets: [
        "Concentrated on data structures and algorithm optimization and architecture by using computer infrastructure to optimize business processes and ensure smooth operations.",
        "Developed a home automation prototype; an IOT based project using Raspberry pi, Webiopi and python programming language.",
    ],
}, ];

export const experience = [{
        role: "Software Engineer",
        company: "Socialight Media Ltd",
        companylogo: googlelogo,
        date: "Aug 2017 – Present",
        desc: "",
        descBullets: [
            "Migrating monolithic applications to a microservices approach to facilitate maintainability and efficiency",
            "Ensured site design integrity and quality control consistency throughout the project's lifecycle",
        ],
    },
    {
        role: "Software Developer",
        company: " BuyRentKenya ",
        companylogo: github,
        date: "Jan 2016 – Jun 2017",
        desc: "",
        descBullets: [
            "Used Object Oriented Programming concepts to develop components that could be reused across the Web Application.",
            "Involved in Unit, Integration and System Test and maintain the application."
        ],
    },
    {
        role: "Junior Software Developer",
        company: "Emed Solutions",
        companylogo: airbnb,
        date: "Sept 2014 – Nov 2015",
        desc: "",
        descBullets: [
            "Gathered and analyzed the requirements and converted them into User Requirement Specifications and Functional Requirement Specifications",
            "Preparing flowcharts, use case stories and UML diagram"
        ]
    },
];

export const projects = [{
        name: "Agpo",
        desc: "https://agpo.go.ke/pages/about-agpo",
        link: "https://agpo.go.ke/",
    },
    {
        name: "LMM",
        desc: "https://lastminutemara.com/about",
        link: "https://lastminutemara.com/",
    },
    {
        name: "Scale Ke",
        desc: "https://scale.co.ke/faqs",
        link: "https://scale.co.ke/",
    },
];

export const feedbacks = [{
        name: "Hassan Mehmood",
        feedback: "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Dennis Chebon has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose Dennis web developer services for u.",
    },
    {
        name: "Maheen Altaf",
        feedback: "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
    },
];
