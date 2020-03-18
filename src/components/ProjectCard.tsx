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
  sourceUrl2?: string;
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
  sourceUrl2,
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
      <a href={deployedUrl || sourceUrl} target='_blank' rel='noopener noreferrer'>
        <div className='aspectRatioContainer'>
          <Card.Img variant='top' src={imageUrl} alt={title} />
        </div>
      </a>
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
        <Button variant="primary" onClick={buildVisitUrl(sourceUrl)}>Code</Button>
        {sourceUrl2 && <Button variant="primary" onClick={buildVisitUrl(sourceUrl2)}>More Code</Button>}
        {deployedUrl && <Button variant="secondary" className='cardVisitButton' onClick={buildVisitUrl(deployedUrl)}>Visit</Button>}
      </Card.Body>
    </Card>      
  );
}

export default ProjectCard;
