import React from 'react';
import Skill, { ISkill } from '../components/Skill';
import './SkillList.scss';

const skillsData: ISkill[] = [
  {
    altText: 'Typescript',
    imageUrl: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png',
    infoUrl: 'https://www.typescriptlang.org/'
  },
  {
    altText: 'Javascript',
    imageUrl: 'https://www.w3schools.com/whatis/img_js.png',
    infoUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    altText: 'HTML5',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
    infoUrl: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
  },
  {
    altText: 'CSS3',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'ReactJS',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    infoUrl: 'https://reactjs.org/'
  },
  {
    altText: 'Redux',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'Bootstrap',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'MaterialUI',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'MaterializeCSS',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'NodeJS',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'Express',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'MongoDB',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'Mongoose',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'SQL',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'PostgreSQL',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'Jest',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'Github',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'Heroku',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'Netlify',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'Python',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'Java',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'Shell',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'C++',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'VisualBasic',
    imageUrl: '',
    infoUrl: ''
  },
  {
    altText: 'Perl',
    imageUrl: '',
    infoUrl: ''
  },
]

const SkillList = () => {
  const skills = skillsData.map((props: ISkill, i) => (
    <Skill key={i} { ...props } />
  ));
  return (
    <div className='appContainer'>
      <h3>Skills</h3>
      <div className='SkillList'>
        {skills}
      </div>
    </div>
  );
}

export default SkillList;