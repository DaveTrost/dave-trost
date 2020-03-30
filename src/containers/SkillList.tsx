import React from 'react';
import Skill, { ISkill } from '../components/Skill';
import skillsData from '../data/skills';
import './SkillList.scss';

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