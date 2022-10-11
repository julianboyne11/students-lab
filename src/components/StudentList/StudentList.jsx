import Student from "./Student/Student";

const StudentList = ({students}) => {
  return (
    <>
      {students.map(student => <Student key={student.name} student={student}/>)}
    </>
  );
}

export default StudentList ;