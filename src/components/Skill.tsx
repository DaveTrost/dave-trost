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
      <figure>
        <div className='square'>
          <img src={imageUrl} alt={title} title={title} />
        </div>
        <figcaption>{title}</figcaption>
      </figure>
    </a>
  </div>
);

export default Skill;
