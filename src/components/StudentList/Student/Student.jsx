import Score from "./Score/Score";
import Card from 'react-bootstrap/Card';

const Student = ({student}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{student.name}</Card.Title>
          <Card.Text>
          {student.bio}
          </Card.Text>
          {student.scores.map(score => <Score key={score.date} score={score}/>)}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Student;