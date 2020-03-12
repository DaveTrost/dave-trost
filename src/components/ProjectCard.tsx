import React from 'react';
import { Card, Button } from 'react-bootstrap';

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
    <Card.Img variant='top' src={imageUrl} alt={title}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary" onClick={buildVisitUrl(sourceUrl)}>View Source</Button>
      {sourceUrl2 && <Button variant="primary" onClick={buildVisitUrl(sourceUrl2)}>Additional Source Code</Button>}
      {deployedUrl && <Button variant="secondary" onClick={buildVisitUrl(deployedUrl)}>Visit Site</Button>}
    </Card.Body>
  </Card>      
);

export default ProjectCard;
