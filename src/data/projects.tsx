import { IProjectCard } from '../components/ProjectCard';
// import dwellingly from '../assets/dwellingly.png';
import mindDriftGif from '../assets/mind-drift.gif';
import connect4 from '../assets/connect4.png';
import mazeApi from '../assets/maze-api.png';
import whiskepedia from '../assets/whiskepedia.gif';
import mindDriftTS from '../assets/mind-drift-TS.gif';

const projectsData: IProjectCard[] = [
  {
    title: 'mindDrift',
    imageUrl: mindDriftGif,
    summary: `Meditation through guided breathing.`,
    details: `Designed to be gently encouraging to its users through 
      mobile accessibility (PWA), easy-to-use interface, and a calming color palette.`,
    technologies: `Javascript, React, Redux, Bootstrap, Firebase, Node, Express, MongoDB, Mongoose, Netlify, Heroku`,
    sourceUrl: 'https://github.com/mindDrift/mind-drift-fe',
    sourceUrlTitle: 'Frontend',
    secondaryUrl: 'https://github.com/mindDrift/mind-drift-be',
    secondaryUrlTitle: 'Backend',
    deployedUrl: 'https://mind-drift.netlify.com'
  },
  {
    title: 'Connect4 AI',
    imageUrl: connect4,
    summary: `A Connect4 game played against a computerized AI or against another human.`,
    details: `Multiple difficulty settings make this game easy to learn 
      or turn it into a true mental challenge!
      Computer AI moves are provided by an NPM library I authored.`,
    technologies: `Javascript, React, Jest, webpack, Netlify, NPM`,
    sourceUrl: 'https://github.com/DaveTrost/connect4-ui',
    sourceUrlTitle: 'Frontend',
    secondaryUrl: 'https://www.npmjs.com/package/connect4-ai',
    secondaryUrlTitle: 'npm',
    deployedUrl: 'https://a-connect4-game.netlify.com/'
  },
  {
    title: 'MAZE API',
    imageUrl: mazeApi,
    summary: `A public, RESTful API serving maze puzzles`,
    details: `Mazes are created using a selection of recursive algorithms. 
      Users can sign up, receive a key, and request mazes with specific parameters. 
      Custom mazes can be generated via POST requests.`,
    technologies: `Node, Express, MongoDB, Mongoose, Jest, Heroku`,
    sourceUrl: 'https://github.com/maze-api/maze-api',
    deployedUrl: 'https://maze-api.herokuapp.com/'
  },
  {
    title: 'Whiskepedia',
    imageUrl: whiskepedia,
    summary: `Explore hundreds of bottles of whiskey according to their flavor profiles.`,
    details: `Our database is seeded with Whiskey data which we migrated from the open-access WhiskeyProject. 
      Our server adds search and sort functionality to the data. 
      The app provides an easy entry-point for whiskey research to any type of drinker.`,
    technologies: `Javascript, Node, Express, SQL, PostgreSQL, ChartJS, Heroku`,
    sourceUrl: 'https://github.com/team-whiskepedia/whiskepedia',
    deployedUrl: 'https://whiskepedia.herokuapp.com/index.html'
  },
  {
    title: 'mindDrift TS',
    imageUrl: mindDriftTS,
    summary: `The same guided breathing app, re-written with Typescript.`,
    details: `Backend translation and refactor is complete.
      Front end translation is in progress and hope to deploy this soon.`,
    technologies: `Typescript, React, Redux, Bootstrap, Firebase, Node, Express, MongoDB, Mongoose, Netlify, Heroku`,
    sourceUrl: 'https://github.com/DaveTrost/mind-drift-ts-components',
    sourceUrlTitle: 'Frontend',
    secondaryUrl: 'https://github.com/DaveTrost/mind-drift-be-ts',
    secondaryUrlTitle: 'Backend',
  },
];

export default projectsData;
