import HtmlIcon from "./components/svg/HtmlIcon";
import CssIcon from "./components/svg/CssIcon";
import JsIcon from "./components/svg/JsIcon";
import ReactIcon from "./components/svg/ReactIcon";
import NextJsIcon from "./components/svg/NextJsIcon";
import GitIcon from "./components/svg/GitIcon";
import JenkinsIcon from "./components/svg/JenkinsIcon";
import PostmanIcon from "./components/svg/PostmanIcon";
import SwaggerIcon from "./components/svg/SwaggerIcon";

export const ULR_PORTFOLIO = "https://nicolas-aldao.vercel.app";

export const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/#education",
    display: "Experience",
  },
  {
    path: "/#portfolio",
    display: "Portfolio",
  },
  {
    path: "/#about",
    display: "About",
  },
  {
    path: "/#contact",
    display: "Contact",
  },
];

export const PORTFOLIO_DATA = [
  {
    id: "5",
    title: "Digital Wallet",
    description: `A digital wallet where you can send and receive money from other users. You can see your money movements too!`,
    shortDescription:
      "A digital wallet where you can send and receive money from other users.",
    img: ["/images/portfolio-5.png"],
    category: "Mobile App",
    keyword: ["React", "Node", "MongooDB", "NextUI"],
    repoUrl: "https://github.com/nicolas-aldao/digital-wallet",
    deployUrl: "https://digital-wallet-one.vercel.app/",
    liveUrl: "/project/5",
  },
  {
    id: "6",
    title: "Artgram",
    description: `It's an app based in Instagram's style where you can browse through different art paintings.
      Initially, I developed it with midudev's course on Platzi, and I kept working on it, giving it more features.
      Some of the funcionalities are a login system, filter paintings depending of its art genre, give likes to your favorites, and have a section where you can see all the paintings you've liked.`,
    importantInfo: `Note: You can use the demo account.
      user: demo
      pass: demo`,
    shortDescription:
      "It's an app based in Instagram's style where you can browse through different art paintings.",
    img: ["/images/portfolio-6.png"],
    category: "Mobile App",
    keyword: ["HTML", "CSS", "React", "Node", "MongooDB"],
    repoUrl: "https://github.com/nicolas-aldao/instagram-clone",
    deployUrl: "https://nagram.vercel.app/",
    liveUrl: "/project/6",
  },
  // {
  //   id: "7",
  //   title: "Avocado Store",
  //   description: "This is an app where you can buy avocados.",
  //   shortDescription: "This is an app where you can buy avocados.",
  //   img: ["/images/portfolio-7.png"],
  //   category: "Mobile App",
  //   keyword: ["React", "Next.js", "CSS Modules"],
  //   repoUrl: "https://github.com/nicolas-aldao/avocado-app",
  //   deployUrl: "https://avocado-app-bice.vercel.app/",
  //   liveUrl: "/project/7",
  // },
  {
    id: "9",
    title: "Grid Layout Concept Art: Beatles",
    description:
      "This is a concept art for a grid layout. I used to The Beatles as an example.",
    shortDescription:
      "This is a concept art for a grid layout. I used to The Beatles as an example.",
    img: ["/images/portfolio-9.png"],
    category: "Web Design",
    keyword: ["HTML", "CSS", "Grid Layout"],
    repoUrl: "https://github.com/nicolas-aldao/grid-layout-concept-art",
    deployUrl: "https://nicolas-aldao.github.io/grid-layout-concept-art/",
    liveUrl: "/project/9",
  },
];

export const EDUCATION_WORK = [
  {
    education: [
      {
        id: "1",
        title: "System Analist Career",
        time: "2016 - 2020",
        institute: "Instituto Santo Tomás de Aquino",
        description: "3-year tertiary career at an institute in Argentina",
        tasks: [
          "Be able to analize requirements, algoriths and computer systems",
          "Learn and build web pages and desktop applications",
          "Elaborate and apply good practices to relational databases",
        ],
      },
      {
        id: "2",
        title: "Fullstack Intensive Course",
        time: "Oct 2018 - Nov 2018",
        institute: "Baufest",
        description:
          "15 day Fullstack Intensive Training with other 19 students, in the end, we took an exam and if we passed it we could get a job in the company.",
        tasks: [
          "OPP, C#, MVC",
          "SQL Server, Entity Framework",
          "HTML, CSS, Javascript, JQuery",
          "Razor, Unit testing",
        ],
      },
      {
        id: "3",
        title: "C# .NET Core Courses",
        time: "63hs.",
        institute: "Platzi",
        tasks: [
          "OOP, Collections, Linq",
          "Interfaces, Inheritance",
          "MVC, Razor, HTTP Requests",
        ],
      },
      {
        id: "4",
        title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
        time: "2020 (31hs)",
        institute: "Coursera",
        tasks: ["CSS Components", "Javascript Components", "Web Tools"],
      },
      {
        id: "5",
        title: "React Courses",
        time: "2022 (16hs)",
        institute: "Platzi",
        tasks: [
          "Local Storage, Session Storage",
          "Webpack, babel",
          "Lazy loading",
          "PWA's",
        ],
      },
      {
        id: "6",
        title: "React Native Intensive Course",
        time: "Dic 2022 (160hs aprox.)",
        institute: "Baufest",
        description:
          "React Intensive Training emulating a real project, building a digital wallet MVP in React to send and receive money",
        tasks: ["Consuming API's", "Form validations", "Atomic Design"],
      },
      {
        id: "7",
        title: "The Complete React Native + Hooks Course",
        time: "Jan 2023 (22hs)",
        institute: "Udemy",
        tasks: [
          "State Management with Context",
          "In-App Authentication",
          "Json Web Token",
        ],
      },
      {
        id: "8",
        title: "SOLID and Clean Code Principles Course",
        time: "Apr 2024 (6.5hs)",
        institute: "Udemy",
        tasks: [
          "Tech Debt",
          "Code Smells",
          "SOLID Principles",
          "Good practices",
        ],
      },
      {
        id: "9",
        title: "React Testing Library with Jest / Vitest Course",
        time: "Apr 2024 (7.5hs)",
        institute: "Udemy",
        tasks: [
          "Test-Driven Development",
          "Test behavior instead of implementation",
        ],
      },
    ],
    work: [
      {
        id: "21",
        role: "Technical Support",
        time: "2018 - 2019",
        company: "Baufest, Argentina",
        description:
          "Support project, helping to the client via email and calls",
        tasks: [
          "Control data sellout reports",
          "Automated tasks using Excel and VBA macros",
          "Collaborated with clients via email to resolve daily business problems",
        ],
      },
      {
        id: "22",
        role: "BI Tools Support",
        time: "Dec 2019 - Sept 2020",
        company: "Baufest, Argentina",
        description:
          "Maintenance to an internal app of an important supermarket in Argentina",
        tasks: [
          "Modify and run Powershell Scripts",
          "Modify and run SQL Scripts",
          "Modify, fix and deploy SQL Data Tools (Integration Services)",
        ],
      },
      {
        id: "23",
        role: "SQL Server and Backend Development Support",
        time: "Oct 2020 - Dic 2021",
        company: "Baufest, Argentina",
        description:
          "Give support to internal tool for argentinian agro company.",
        tasks: [
          "Fix bugs in application MVC .NET with Razor",
          "Modify and run SQL Scripts",
          "Use GIT, branches and control versions",
        ],
      },
      {
        id: "24",
        role: "C# Developer",
        time: "Jan 2021 - Mar 2021",
        company: "Baufest, Argentina",
        description:
          "Temporaly project giving support to an internal app for an argentinian agro company",
        tasks: [
          "Fix bugs and develop new features in application MVC .NET with Razor",
        ],
      },
      {
        id: "25",
        role: "React Native Developer",
        time: "Jun 2022 - Dic 2022",
        company: "Baufest, Argentina",
        description:
          "Project english speaked, for a bank in Jamaica, digital wallet mobile app.",
        tasks: [
          "Fix bugs and develop new features",
          "Fix linting errors",
          "Styled Components",
          "Consume APIs",
        ],
      },
      {
        id: "26",
        role: "React Developer",
        time: "Feb 2023 - Present",
        company: "Baufest, Argentina",
        description: "Responsive web app for an important bank in Argentina.",
        tasks: [
          "Styled Components",
          "Fix bugs and develop new features",
          "Code refactoring",
          "Consume APIs",
          "Deploys with Jenkins",
        ],
      },
    ],
  },
];

export const technologies = [
  { icon: <HtmlIcon />, text: "HTML" },
  { icon: <CssIcon />, text: "CSS" },
  { icon: <JsIcon />, text: "JAVASCRIPT" },
  { icon: <ReactIcon />, text: "REACT" },
  { icon: <NextJsIcon />, text: "NEXT.JS" },
];

export const tools = [
  { icon: <GitIcon />, text: "GIT" },
  { icon: <PostmanIcon />, text: "POSTMAN" },
  { icon: <SwaggerIcon />, text: "SWAGGER" },
  { icon: <JenkinsIcon />, text: "JENKINS" },
];
