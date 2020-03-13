import React from 'react';
import './Skill.scss';

export interface ISkill {
  imageUrl: string;
  title: string;
  infoUrl: string;
}

const Skill = ({ imageUrl, title, infoUrl }: ISkill) => (
  <div className='Skill'>
    <a href={infoUrl} target='_blank' rel='noopener noreferrer'>
      <img src={imageUrl} alt={title} title={title} />
    </a>
  </div>
);

export default Skill;
