import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Day = ({ dayName, dayData }) => {
  return (
    <div className="col-md-4">
      <Link to={`/${dayName}`} className="text-decoration-none">
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>{dayName}</Card.Title>
            <Card.Text>
              High: {dayData.high}°F<br />
              Low: {dayData.low}°F<br />
              {dayData.condition}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Day;
