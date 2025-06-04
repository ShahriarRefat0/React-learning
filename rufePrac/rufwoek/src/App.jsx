import "./App.css";
import StudentData from "./Component/StudentData";

function App() {
  const studentData = [
    { name: "Refat", age: 22 },
    { name: "rakib", age: 23 },
    { name: "onanto", age: 24 },
    { name: "sabbir", age: 22 },
  ];

  return (
    <div>
      {studentData.map((Data) => (
        <StudentData Data = {Data}></StudentData>
      ))}
    </div>
  );
}

export default App;
