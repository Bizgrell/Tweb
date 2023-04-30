import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

interface CardProps {
  title: string;
  description: string;
}

const CardComponent: React.FC<CardProps> = ({ title, description }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardComponent;