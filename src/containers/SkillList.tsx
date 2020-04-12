import React from 'react';
import Skill, { ISkill } from '../components/Skill';
import { BracketL, Slash, BracketR } from '../components/AngleBrackets';
import { languageSkills, frontendSkills, backendSkills, otherSkills } from '../data/skills';
import './SkillList.scss';

interface ISkillCategory {
  name: string;
  skills: ISkill[];
}

const SkillCategory = ({skills}: ISkillCategory) => {
  const skillElements = skills.map((props: ISkill, i: number) => (
    <Skill key={i} { ...props } />
  ));
  return (
    <div className='animated fadeInUp SkillCategory'>
      <div className='skillElements'>
        {skillElements}
      </div>
    </div>
  );
}

const SkillList = () => (
  <div className='appContainer skillContainer'>
  <h3 className='monospace'>
    <BracketL />Skills<BracketR />
  </h3>
  <div className='SkillList'>
    <SkillCategory name='Languages' skills={languageSkills} />
    <SkillCategory name='Frontend' skills={frontendSkills} />
    <SkillCategory name='Backend' skills={backendSkills} />
    <SkillCategory name='Tools' skills={otherSkills} />
  </div>
  <h3 className='monospace'>
    <BracketL /><Slash />Skills<BracketR />
  </h3>
</div>
);

export default SkillList;