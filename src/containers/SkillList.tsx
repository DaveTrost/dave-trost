import React from 'react';
import { useInView } from 'react-intersection-observer'
import { IisDisplayed } from '../types/types';
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
    <div className='SkillCategory'>
      <div className='skillElements'>
        {skillElements}
      </div>
    </div>
  );
}

const SkillList = ({isDisplayed}: IisDisplayed) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: .1 });

  return (
    <div 
      ref={ref} 
      className={`appContainer skillContainer ${(isDisplayed && inView) ? 'animated fadeIn fast' : 'hiddenComponent'}`}
    >
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
}

export default SkillList;