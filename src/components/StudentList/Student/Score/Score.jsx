import Card from 'react-bootstrap/Card';

const Score = ({score}) => {
  return (
    <Card.Text>
      <h5>{score.date} Score of {score.score}</h5>
    </Card.Text>
  );
}

export default Score;