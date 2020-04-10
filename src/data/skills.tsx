import { ISkill } from '../components/Skill';
import reactLogo from '../assets/reactlogo.png';
import typescriptLogo from '../assets/typescript.png';
import javaScriptLogo from '../assets/JavaScript-logo.png';
import html5Logo from '../assets/html5.png';
import cssLogo from '../assets/css-logo.png';
import reduxLogo from '../assets/redux-logo.png';
import bootstrapLogo from '../assets/bootstrap-icon.svg';
import materializeLogo from '../assets/materialize-logo.png';
import python3Logo from '../assets/python3_icon.png';
import javaLogo from '../assets/javaIcon.png';
import expressLogo from '../assets/Express-JS.png';
import mongoDbLogo from '../assets/mongoDB.png';
import mongooseLogo from '../assets/mongoose.png';
import postgresLogo from '../assets/postgres.png';
import jestLogo from '../assets/jest.png';
import githubLogo from '../assets/github-contact-icon.png';
import shellLogo from '../assets/shell.png';
import cplusplusLogo from '../assets/C++_Logo.png';
import nodejsIcon from '../assets/nodejsIcon.svg';
import sqlIcon from '../assets/sql-badge.webp';
import herokuIcon from '../assets/heroku.webp';
import netlifyIcon from '../assets/netlify.png';
import vbIcon from '../assets/VB_Logo.png';
import perlIcon from '../assets/perl-icon.svg';

export const languageSkills: ISkill[] = [
  {
    title: 'Typescript',
    imageUrl: typescriptLogo,
    infoUrl: 'https://www.typescriptlang.org/'
  },
  {
    title: 'Javascript',
    imageUrl: javaScriptLogo,
    infoUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    title: 'HTML5',
    imageUrl: html5Logo,
    infoUrl: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
  },
  {
    title: 'CSS3',
    imageUrl: cssLogo,
    infoUrl: 'https://www.w3.org/Style/CSS/'
  },
  {
    title: 'NodeJS',
    imageUrl: nodejsIcon,
    infoUrl: 'https://nodejs.org/en/'
  },
  {
    title: 'Python 3',
    imageUrl: python3Logo,
    infoUrl: 'https://www.python.org/download/releases/3.0/'
  },
  {
    title: 'Java',
    imageUrl: javaLogo,
    infoUrl: 'https://www.java.com/en/'
  },
  {
    title: 'Shell',
    imageUrl: shellLogo,
    infoUrl: 'https://www.shellscript.sh/'
  },
  {
    title: 'C++',
    imageUrl: cplusplusLogo,
    infoUrl: 'https://devdocs.io/cpp/'
  },
  {
    title: 'VisualBasic',
    imageUrl: vbIcon,
    infoUrl: 'https://www.vbtutor.net/vb6/vbtutor.html'
  },
  {
    title: 'Perl',
    imageUrl: perlIcon,
    infoUrl: 'https://www.perl.org/'
  }
];

export const frontendSkills: ISkill[] = [
  {
    title: 'ReactJS',
    imageUrl: reactLogo,
    infoUrl: 'https://reactjs.org/'
  },
  {
    title: 'Redux',
    imageUrl: reduxLogo,
    infoUrl: 'https://redux.js.org/'
  },
  {
    title: 'React-Bootstrap',
    imageUrl: bootstrapLogo,
    infoUrl: 'https://react-bootstrap.github.io/'
  },
  {
    title: 'MaterializeCSS',
    imageUrl: materializeLogo,
    infoUrl: 'https://materializecss.com/'
  },
];

export const backendSkills: ISkill[] = [
  {
    title: 'Express',
    imageUrl: expressLogo,
    infoUrl: 'https://expressjs.com/'
  },
  {
    title: 'PostgreSQL',
    imageUrl: postgresLogo,
    infoUrl: 'https://www.postgresql.org/'
  },
  {
    title: 'Mongoose',
    imageUrl: mongooseLogo,
    infoUrl: 'https://mongoosejs.com/'
  },
  {
    title: 'SQL',
    imageUrl: sqlIcon,
    infoUrl: 'https://en.wikipedia.org/wiki/SQL'
  },
  {
    title: 'MongoDB',
    imageUrl: mongoDbLogo,
    infoUrl: 'https://www.mongodb.com/'
  },
];

export const otherSkills: ISkill[] = [
  {
    title: 'Jest',
    imageUrl: jestLogo,
    infoUrl: 'https://jestjs.io/'
  },
  {
    title: 'Github',
    imageUrl: githubLogo,
    infoUrl: 'https://github.com/'
  },
  {
    title: 'Heroku',
    imageUrl: herokuIcon,
    infoUrl: 'https://www.heroku.com/'
  },
  {
    title: 'Netlify',
    imageUrl: netlifyIcon,
    infoUrl: 'https://www.netlify.com/'
  },
];
