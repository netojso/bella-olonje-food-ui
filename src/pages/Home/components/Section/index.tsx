import React from 'react';

import { Container } from './styles';

interface SectionProps {
  img: string,
  subTitle: string,
  title: string,
  description: string
  reverse?:  boolean
}

const Section: React.FC<SectionProps> = ({img, subTitle, title, description, reverse}) => {
  return (
    <Container reverse={reverse}>
      <img src={img} alt={subTitle}/>
      <div>
        <strong>{subTitle}</strong>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>    
    </Container>

  );
}

export default Section;