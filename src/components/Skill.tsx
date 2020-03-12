import React from 'react';
import './Skill.scss';

export interface ISkill {
  imageUrl: string;
  altText: string;
  vendorUrl: string;
}

const Skill = ({ imageUrl, altText, vendorUrl }: ISkill) => (
  <div className='Skill'>
    <a href={vendorUrl} target='_blank' rel='noopener noreferrer'>
      <img src={imageUrl} alt={altText} />
    </a>
  </div>
);

export default Skill;
