import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProjectCard.scss';

export interface IProjectCard {
  imageUrl: string;
  title: string;
  summary: string;
  details?: string;
  technologies?: string;
  sourceUrl: string;
  sourceUrlTitle?: string;
  secondaryUrl?: string;
  secondaryUrlTitle?: string;
  deployedUrl?: string;
}
const buildVisitUrl: Function = (url: string) => url ? () => window.open(url, '_blank') : () => null;

const ProjectCard = ({ 
  imageUrl,
  title,
  summary,
  details,
  technologies,
  sourceUrl,
  sourceUrlTitle,
  secondaryUrl,
  secondaryUrlTitle,
  deployedUrl,
}: IProjectCard) => {
  const expanded = 'showDetails';
  const [collapsed, setCollapsed] = useState(true);
  const [expandedClass, setExpandedClass] = useState('');
  const expandProjectCard = () => {
    setCollapsed(false);
    setExpandedClass(expanded);
  }

  return(
    <Card className='ProjectCard'>
      <div className='aspectRatioContainer'>
        <Card.Img variant='top' src={imageUrl} alt={title} />
      </div>
      <Card.Body className='cardBody'>
        <Card.Title className='cardTitle'>{title}</Card.Title>
        <Card.Text className='cardText'>
          {summary}
          {collapsed && <span className='showMore' onClick={expandProjectCard}>show more</span>}
        </Card.Text>
        <Card.Text className={`cardText details ${expandedClass}`}>
          <span>{details}</span>
          <span className='technologies'>{`Technologies: ${technologies}`}</span>
        </Card.Text>
        <Button variant="primary" onClick={buildVisitUrl(sourceUrl)}>{sourceUrlTitle || 'Code'}</Button>
        {secondaryUrl && <Button variant="primary" onClick={buildVisitUrl(secondaryUrl)}>{secondaryUrlTitle || 'More Code'}</Button>}
        {deployedUrl && <Button variant="secondary" className='cardVisitButton' onClick={buildVisitUrl(deployedUrl)}>Visit</Button>}
      </Card.Body>
    </Card>      
  );
}

export default ProjectCard;
