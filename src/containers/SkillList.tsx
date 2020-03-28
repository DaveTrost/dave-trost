import React from 'react';
import Skill, { ISkill } from '../components/Skill';
import reactlogo from '../assets/reactlogo.png';
import './SkillList.scss';

const skillsData: ISkill[] = [
  {
    title: 'Typescript',
    imageUrl: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png',
    infoUrl: 'https://www.typescriptlang.org/'
  },
  {
    title: 'Javascript',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    infoUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    title: 'HTML5',
    imageUrl: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/96-html5-512.png',
    infoUrl: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
  },
  {
    title: 'CSS3',
    imageUrl: 'https://i.ya-webdesign.com/images/css-3-logo-png-7.png',
    infoUrl: 'https://www.w3.org/Style/CSS/'
  },
  {
    title: 'ReactJS',
    imageUrl: reactlogo,
    infoUrl: 'https://reactjs.org/'
  },
  {
    title: 'Redux',
    imageUrl: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
    infoUrl: 'https://redux.js.org/'
  },
  {
    title: 'React-Bootstrap',
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTI3Ljk4IDIwMTYuODciIGZpbGw9IiM0MWUwZmQiPgogIDxwYXRoICBkPSJNODg4IDExMTkuMTdjMTYtMzIuNjIgMzIuODQtNjUuMzcgNTAuMTctOTcuMzVsLjE1LS4yNyAxOC4zOS0zNS42OCAyNy4xNi00NSAuMTctLjI5YzEwLjE0LTE3LjI2IDIwLjY2LTM0LjY4IDMxLjI3LTUxLjc4bDE4LjY5LTMwLjg3YzI0Ljg4LTQxLjE5IDQ0Ljg4LTcxLjIzIDc2LjQzLTExNC43NiAxNy0yMy40MyAzMy4xMi00NCA1OC42Ni03NS45MmwuMDYtLjA2IDEuMjYtMS41OS40OS0uNjNjMTAuMzctMTMuMjIgMjAuODQtMjYuMjUgMzEuMTEtMzguNzNsLjM0LS40Mi4yLS4yNWMyMy44My0yOS41MSA0OC4xMi01OS4xMyA3Mi4xOS04OGw5LjU3LTExLjQ4VjM1Ni41NEgxMjY3Yy05LjIzLTguNjgtMTguNjYtMTcuMy0yOC4wOC0yNS42OS03Ni4zMi02Ny43Mi0xNTIuNDMtMTIwLjg1LTIyNi4yNy0xNTcuNzktNzUuNzEtMzcuOTItMTQ1LjYzLTU3LjE0LTIwNy44LTU3LjE0LTQ0LjM5IDAtODQuMDYgOS45NC0xMTcuOTEgMjkuNTMtMzIuNTUgMTguODQtNTkuOSA0Ni45MS04MS4zMSA4My40NC0yMC4wNiAzNC4yMy0zNC44NCA3NS44OS00My45NSAxMjMuODEtMTcuNTQgOTIuMzctMTMuNzQgMjA4IDExIDMzNC4zNCAzLjEyIDE1LjkgNi41NiAzMiAxMC4yNSA0OC0xOS43NCA2LTM4LjkxIDEyLjE4LTU3LjEzIDE4LjUzLTExOS4yNiA0MS41OC0yMTkgOTUuOTEtMjg4LjQyIDE1Ny4xNC0zNiAzMS43MS02My44NCA2NS4yMy04Mi44OSA5OS42Mi0yMC4yNCAzNi41Ny0zMC41MSA3NC4wOC0zMC41MSAxMTEuNDkgMCA3NSA0MS41NSAxNTEgMTIwLjE1IDIxOS45NCA3NCA2NC45MyAxNzguNjUgMTIxLjYyIDMwMi41NSAxNjQgMTEuNTEgMy45MSAyMy4yMiA3LjcxIDM1IDExLjM0LTQuMTIgMTcuOTMtNy45MyAzNi0xMS4zNiA1NC0yMy41NiAxMjQuMDgtMjYuMzEgMjM3LjYyLTggMzI4LjM1IDkuNTEgNDcgMjQuNjEgODcuODkgNDQuODkgMTIxLjU3IDIxLjU2IDM1LjggNDguOTMgNjMuNDQgODEuMzQgODIuMTMgMzQuMTUgMTkuNjkgNzQuMzQgMjkuNjcgMTE5LjQ1IDI5LjY3IDYxLjQyIDAgMTMwLjA5LTE4LjIxIDIwNC4xMS01NC4xMyA3Mi41Ni0zNS4yMSAxNDYuNjMtODUuNjQgMjIwLjEzLTE0OS44OSAxMS4zMy05LjkgMjMtMjAuNDkgMzQuNjYtMzEuNTNoMTcuNDF2LTE3NC4zOWwtNi4zNC03LjgtMy0zLjY3LTc5LjgyLTk4LjU1LTQ0LjM1LTU0Ljc1Yy0yMi4zOS0yNy42NC01OC4yNS03OC43OS0xMDEtMTQ0LTM0LTUxLjg0LTU4Ljc2LTkzLjQ3LTcwLjUtMTEzLjYzbC0xLjI4LTIuMjFjLTIwLjQ5LTM1LjMzLTM1LjcxLTYzLjc5LTQ3LjkzLTg2LjY0LTE1LjMtMjguNjMtMzAuMzktNTcuODctNDQuOTEtODdsMi42Ni01LjE3em0tODAuODYtMTcyLjg5Yy0xMy41My0zNC43LTI1LjkyLTY5LjEzLTM3LTEwMi44MSAzNC41Ny03LjEzIDcwLjUxLTEzLjUzIDEwNy4zMi0xOS4xMS0xMi4yOCAyMC4xMS0yNC4zNCA0MC40MS0zNiA2MC42NHMtMjMuMTIgNDAuNjktMzQuMzIgNjEuMjh6bS0zOC4yNSA0NjIuMWMxMS40NS0zNC44NiAyNC4zMS03MC41NiAzOC4zOS0xMDYuNTkgMTEuMjkgMjAuNyAyMi44NyA0MS4zIDM0LjU4IDYxLjUzIDEyLjI3IDIxLjE5IDI1IDQyLjQ4IDM3Ljk1IDYzLjU4LTM4LjQ2LTUuMzItNzUuNjItMTEuNTMtMTEwLjkyLTE4LjUxek03MDcuMTggMzk3LjE2YzktNjEuNzQgMjkuMTQtMTA1Ljg3IDU1LjM3LTEyMS4wNiAxMC44OS02LjMxIDI1LjM0LTkuNSA0Mi45My05LjUgMzguNDcgMCA4OC4yNCAxNS4xIDE0My45MSA0My42NyA2MC4zNCAzMSAxMjUuNzcgNzcuMTEgMTg5LjIyIDEzMy40NXE1LjkgNS4yNCAxMi4wNyAxMC44OWMtNTUuODEgNjEuNzEtMTEwLjgxIDEzMC4yOC0xNjMuNjggMjA0LjEtOTAuMDggOC44LTE3Ni42OCAyMS45NC0yNTcuNzYgMzkuMTEtMi45My0xMi44NC01LjY4LTI1Ljc1LTguMi0zOC41bC0uMjQtMS4zMmMtMTkuMzMtOTguNzYtMjQuMDQtMTg5LTEzLjYyLTI2MC44NHptMTEuMzEgNzI3Yy0zOC4xIDg0LTcwLjQ4IDE2Ny4xNi05Ni4zNyAyNDcuNDYtOS0yLjgtMTcuODktNS43Mi0yNi42NS04LjctMTAzLTM1LjIxLTE4OC43OS04MC42Ni0yNDguMDgtMTMxLjQzLTQ1LjM3LTM4Ljg1LTcyLjQ1LTc5LjgzLTcyLjQ1LTEwOS42MyAwLTMwLjU5IDI3LjA5LTcwIDc0LjM0LTEwOC4yIDU1LTQ0LjQ3IDEzMy4yNy04NS4xMSAyMjYuMTktMTE3LjUgMTUuNzktNS40OCAzMS44Ny0xMC43MyA0OC0xNS42NCAyNS41MyA3OS4xMyA1Ny40OCAxNjAuOTkgOTUuMDEgMjQzLjYzem0uMTIgNDc0LjkyYzIuODYtMTUgNi0zMC4wOSA5LjQzLTQ1LjA5IDgwIDE2LjM3IDE2Ny41OSAyOC43MSAyNjAuNzUgMzYuNzEgNTMuMzggNzQuMzQgMTA4Ljg0IDE0My4zNyAxNjUuMDUgMjA1LjQ0LTYuOTQgNi4zOS0xMy45NCAxMi42OC0yMC45IDE4Ljc5LTgxLjM3IDcxLjEzLTE2My4wOSAxMjIuNTUtMjM2LjI4IDE0OC43MWwtMS41Mi41NGMtMzIuOCAxMS41OC02Mi4wOSAxNy40NS04NyAxNy40NS0xOC4zOCAwLTMzLjIyLTMuMTgtNDQuMTEtOS40Ni0yNi41MS0xNS4yOS00Ny4xNC01OC40Ni01Ni42LTExOC40NS0xMS4wNi02OS45MS03LjE5LTE1Ny45NyAxMS4xNy0yNTQuNjV6IgogICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMy45OCAtMTE1LjkyKSIgaWQ9Il9Hcm91cF8iIGRhdGEtbmFtZT0iJmx0O0dyb3VwJmd0OyIgLz4KICA8cGF0aCBkPSJNMjE5NS4wNyAxMjA1LjFxLTU2LjI2LTEwMy40NS0xNjUuNTQtMTM0LjIzYTIuODUgMi44NSAwIDAgMS0xLjc5LTIuODUgMyAzIDAgMCAxIDEuMzctMi42OGM1NC4yNC0zMC4xNiA5NS45My03My4xMSAxMjUuMTUtMTI3LjlxNDQuMTUtODIuODkgNDQuMTYtMTk5LjQ5YzAtMTI4LjI1LTMyLjQ1LTIyMy42NS05Ny4wNi0yODcuMTFzLTE1MC42Mi05NS0yNTcuNy05NWgtNTc4LjM1Yy0xLjI1IDAtMi4yNyAxLjMxLTIuMjcgMi45M1YxODk0LjNjMCAxLjYyIDEgMi45MyAyLjI3IDIuOTNoNTQ2LjU3cTExNS40MiAwIDE5OS4xMS0zMy42OWM1NS45MS0yMi40MiAxMDEuNC01Mi42OCAxMzcuMjEtOTAuNjhzNjEuOTItODMuMzMgNzguNjYtMTM2YzE2Ljc0LTUyLjIzIDI1LjEtMTA4LjggMjUuMS0xNjkuMjQuMDQtMTA1LjM3LTE5LjA4LTE5Mi41Ny01Ni44OS0yNjIuNTJ6bS03MjIuMzItNjI4YzAtMS42MiAxLTIuOTMgMi4yNy0yLjkzaDMzOS40NmM1Ni45NSAwIDEwMC41MSAxNiAxMzAuNjUgNDcuNTVzNDUuMiA4Ni40IDQ1LjIgMTY0LjE4YzAgNjkuMTgtMTYuNzQgMTIxLjkyLTUwLjI1IDE1OS4wOHMtNzUuMzcgNTUuMzItMTI1LjYzIDU1LjMySDE0NzVjLTEuMjUgMC0yLjI3LTEuMzEtMi4yNy0yLjkzem01MTguMTYgMTAzNS44Yy0zNC44NiA0Mi43Ni04NC40MSA2NC0xNDguMDcgNjRIMTQ3NWMtMS4yNSAwLTIuMjctMS4zMS0yLjI3LTIuOTN2LTQ3Ni40YzAtMS42MiAxLTIuOTMgMi4yNy0yLjkzaDM2Ny44MmM2My42NiAwIDExMi41NyAxOS44OSAxNDguMDcgNjEuMzVzNTIuOTMgOTkuODIgNTIuOTMgMTc2LjNjLjAyIDc3Ljc3LTE3Ljc2IDEzOC4yNy01Mi45MSAxODAuNjF6IgogICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMy45OCAtMTE1LjkyKSIgLz48L3N2Zz4K',
    infoUrl: 'https://react-bootstrap.github.io/'
  },
  {
    title: 'Material-UI',
    imageUrl: 'https://material-ui.com/static/logo_raw.svg',
    infoUrl: 'https://material-ui.com/'
  },
  {
    title: 'MaterializeCSS',
    imageUrl: 'https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png',
    infoUrl: 'https://materializecss.com/'
  },
  {
    title: 'NodeJS',
    imageUrl: 'https://nodejs.org/static/images/logos/js-green.svg',
    infoUrl: 'https://nodejs.org/en/'
  },
  {
    title: 'Python 3',
    imageUrl: 'https://www.stickpng.com/assets/images/5848152fcef1014c0b5e4967.png',
    infoUrl: 'https://www.python.org/download/releases/3.0/'
  },
  {
    title: 'Java',
    imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/java-43-569305.png',
    infoUrl: 'https://www.java.com/en/'
  },
  {
    title: 'Express',
    imageUrl: 'https://kalvanaveen.github.io/WebDevelopmentResources.github.io/Images/Express-JS-min.png',
    infoUrl: 'https://expressjs.com/'
  },
  {
    title: 'MongoDB',
    imageUrl: 'https://store-images.s-microsoft.com/image/apps.6989.5a75739e-6663-45e9-b4c8-974dcbde28a9.96b28dd0-717a-4e5b-85f1-2727929049c5.55e5d6e3-bd01-4752-b1a5-b6c5450faa32',
    infoUrl: 'https://www.mongodb.com/'
  },
  {
    title: 'Mongoose',
    imageUrl: 'https://opencollective-production.s3-us-west-1.amazonaws.com/7a00cdd0-fae4-11e7-ae09-7f36f712693a.png',
    infoUrl: 'https://mongoosejs.com/'
  },
  {
    title: 'SQL',
    imageUrl: 'https://cdn2.iconfinder.com/data/icons/line-design-database-set-4/21/sql-badge-512.png',
    infoUrl: 'https://en.wikipedia.org/wiki/SQL'
  },
  {
    title: 'PostgreSQL',
    imageUrl: 'https://www.postgresql.org/media/img/about/press/elephant.png',
    infoUrl: 'https://www.postgresql.org/'
  },
  {
    title: 'Jest',
    imageUrl: 'https://jestjs.io/img/jest.png',
    infoUrl: 'https://jestjs.io/'
  },
  {
    title: 'Github',
    imageUrl: 'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/github-512.png',
    infoUrl: 'https://github.com/'
  },
  {
    title: 'Heroku',
    imageUrl: 'https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png',
    infoUrl: 'https://www.heroku.com/'
  },
  {
    title: 'Netlify',
    imageUrl: 'https://temudokter.netlify.com/static/media/netlify.92b6c228.png',
    infoUrl: 'https://www.netlify.com/'
  },
  {
    title: 'Shell',
    imageUrl: 'https://raw.githubusercontent.com/computingfoundation/gnu-linux-shell-scripting/images/logo.png',
    infoUrl: 'https://www.shellscript.sh/'
  },
  {
    title: 'C++',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
    infoUrl: 'https://devdocs.io/cpp/'
  },
  {
    title: 'VisualBasic',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/1200px-VB.NET_Logo.svg.png',
    infoUrl: 'https://www.vbtutor.net/vb6/vbtutor.html'
  },
  {
    title: 'Perl',
    imageUrl: 'https://cdn.worldvectorlogo.com/logos/perl-programming-language.svg',
    infoUrl: 'https://www.perl.org/'
  },
]

const SkillList = () => {
  const skills = skillsData.map((props: ISkill, i) => (
    <Skill key={i} { ...props } />
  ));
  return (
    <div className='appContainer skillContainer'>
      <h3><span>{'<'}</span>Skills<span>{'>'}</span></h3>
      <div className='SkillList'>
        {skills}
      </div>
      <h3><span>{'</'}</span>Skills<span>{'>'}</span></h3>
    </div>
  );
}

export default SkillList;