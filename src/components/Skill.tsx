import React from 'react';
import './Skill.scss';

export interface ISkill {
  imageUrl: string;
  altText: string;
  infoUrl: string;
}

const Skill = ({ imageUrl, altText, infoUrl }: ISkill) => (
  <div className='Skill'>
    <a href={infoUrl} target='_blank' rel='noopener noreferrer'>
      <img src={imageUrl} alt={altText} />
    </a>
  </div>
);

export default Skill;
