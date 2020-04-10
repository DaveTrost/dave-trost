import React from 'react';
import Skill, { ISkill } from '../components/Skill';
import { languageSkills, frontendSkills, backendSkills, otherSkills } from '../data/skills';
import './SkillList.scss';

interface ISkillCategory {
  name: string;
  skills: ISkill[];
}

const SkillCategory = ({name, skills}: ISkillCategory) => {
  const skillElements = skills.map((props: ISkill, i: number) => (
    <Skill key={i} { ...props } />
  ));
  return (
    <div className='SkillCategory'>
      <h3 className='categoryHeader'><span>{'<'}</span>{name}</h3>
      <div className='skillElements'>
        {skillElements}
      </div>
      <h3 className='categoryHeader'><span>{'/>'}</span></h3>
    </div>
  );
}

const SkillList = () => (
  <div className='appContainer skillContainer'>
  <h3><span>{'<'}</span>Skills<span>{'>'}</span></h3>
  <div className='SkillList'>
    <SkillCategory name='Languages' skills={languageSkills} />
    <SkillCategory name='Frontend' skills={frontendSkills} />
    <SkillCategory name='Backend' skills={backendSkills} />
    <SkillCategory name='Tools' skills={otherSkills} />
  </div>
  <h3><span>{'</'}</span>Skills<span>{'>'}</span></h3>
</div>
);

export default SkillList;