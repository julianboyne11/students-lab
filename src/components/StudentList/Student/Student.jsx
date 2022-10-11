import Score from "./Score/Score";

const Student = ({student}) => {
  return (
    <>
      <h2>{student.name}</h2>
      <h4>{student.bio}</h4>
        {student.scores.map(score => <Score key={score.date} score={score}/>)}
    </>
  );
}

export default Student;