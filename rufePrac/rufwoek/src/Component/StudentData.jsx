
const StudentData = (props) => {
  console.log(props.Data);
  return (
    <>
      <h1>Student Name: {props.Data.name }</h1>
      <h1>Student Age: { props.Data.age}</h1>
    </>
  );
};

export default StudentData;