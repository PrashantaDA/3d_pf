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
  island,
  movie,
  ytube,
  threejs,
  pfsite,
  gpt3,
  restro,
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
    image: ytube,
    source_code_link: 'https://github.com/PrashantaDA/YTube',
    live_link: 'https://ytubecl.netlify.app/',
  },
  {
    name: 'Movie App',
    description: 'Movies App to view popular movies and also search for movies and view the details.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'the_movieDB',
        color: 'green-text-gradient',
      },
      {
        name: 'styled_component',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    source_code_link: 'https://github.com/PrashantaDA/MovieDB/',
    live_link: 'https://movyedb.netlify.app/',
  },
  {
    name: 'Portfolio Site',
    description: 'A simple portfolio website..',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer_motion',
        color: 'green-text-gradient',
      },
      {
        name: 'mui',
        color: 'pink-text-gradient',
      },
    ],
    image: pfsite,
    source_code_link: 'https://github.com/PrashantaDA/PortFo/',
    live_link: 'https://prashantapf.netlify.app/',
  },
  {
    name: 'Restaurant UI- Gericht',
    description: 'A simple restaurant static website..',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'ui',
        color: 'green-text-gradient',
      },
    ],
    image: restro,
    source_code_link: 'https://github.com/PrashantaDA/ModernRestro',
    live_link: 'https://modrestro.netlify.app/',
  },
  {
    name: 'GPT3 UI - Open AI',
    description: 'GPT3 OpenAI static website..',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'ui',
        color: 'green-text-gradient',
      },
    ],
    image: gpt3,
    source_code_link: 'https://github.com/PrashantaDA/Gpt3',
    live_link: 'https://gpt3des.netlify.app/',
  },
];

export { services, technologies, experiences, projects };
