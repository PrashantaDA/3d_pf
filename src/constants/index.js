import {
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mui,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  shopify,
  carrent,
  jobit,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },

  {
    title: 'UI Designer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Material UI | MUI',
    icon: mui,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'React.js Intern',
    company_name: 'EKbana',
    icon: reactjs,
    iconBg: '#383E56',
    date: 'Jan 2022 - April 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },

  {
    title: 'Web Developer',
    company_name: 'Trident',
    icon: web,
    iconBg: '#383E56',
    date: 'Nov 2022 - April 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const projects = [
  {
    name: 'YTube',
    description: 'A youtube clone made with React and Rapid API.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'rapidapi',
        color: 'green-text-gradient',
      },
      {
        name: 'mui',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Movie App',
    description:
      'Web application that enables users to search for movies, view the cast, budget and rating of the movie .',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'styled component',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, projects };
