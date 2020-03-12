import React from 'react';
import { Card, Button } from 'react-bootstrap';

export interface IProjectCard {
  imageUrl: string;
  title: string;
  description: string;
  sourceUrl: string;
  deployedUrl?: string;
}

const ProjectCard = ({ 
  imageUrl, 
  title, 
  description, 
  sourceUrl, 
  deployedUrl 
}: IProjectCard) => {
  const handleViewSource = () => window.open(sourceUrl, '_blank');
  const handleVisitSite = deployedUrl ? () => window.open(deployedUrl, '_blank') : () => null;

  return (
    <Card className='ProjectCard'>
      <Card.Img variant='top' src={imageUrl} alt={title}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={handleViewSource}>View Source</Button>
        <Button variant="secondary" onClick={handleVisitSite}>Visit Site</Button>
      </Card.Body>
    </Card>      
  );
}

export default ProjectCard;
