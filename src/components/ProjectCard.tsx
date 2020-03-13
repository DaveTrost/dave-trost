import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProjectCard.scss';

export interface IProjectCard {
  imageUrl: string;
  title: string;
  description: string;
  sourceUrl: string;
  sourceUrl2?: string;
  deployedUrl?: string;
}
const buildVisitUrl: Function = (url: string) => url ? () => window.open(url, '_blank') : () => null;

const ProjectCard = ({ 
  imageUrl,
  title,
  description,
  sourceUrl,
  sourceUrl2,
  deployedUrl,
}: IProjectCard) => (
  <Card className='ProjectCard'>
    <a href={deployedUrl || sourceUrl} target='_blank' rel='noopener noreferrer'>
      <Card.Img variant='top' src={imageUrl} alt={title} />
    </a>
    <Card.Body className='cardBody'>
      <Card.Title className='cardTitle'>{title}</Card.Title>
      <Card.Text className='cardText'>{description}</Card.Text>
      <Button variant="primary" onClick={buildVisitUrl(sourceUrl)}>Code</Button>
      {sourceUrl2 && <Button variant="primary" onClick={buildVisitUrl(sourceUrl2)}>More Code</Button>}
      {deployedUrl && <Button variant="secondary" className='cardVisitButton' onClick={buildVisitUrl(deployedUrl)}>Visit</Button>}
    </Card.Body>
  </Card>      
);

export default ProjectCard;
