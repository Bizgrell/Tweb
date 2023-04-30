import React from 'react';
import CardComponent from './Card';

const ContentComponent = () => {
  const [cards, setCards] = React.useState<CardProps[]>([
    { title: 'Card 1', description: 'This is the first card' },
    { title: 'Card 2', description: 'This is the second card' },
    { title: 'Card 3', description: 'This is the third card' },
  ]);

  return (
    <div>
      {cards.map(card => (
        <CardComponent title={card.title} description={card.description} />
      ))}
    </div>
  );
}

export default ContentComponent;