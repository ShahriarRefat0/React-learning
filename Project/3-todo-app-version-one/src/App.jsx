import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";

function App() {
  const todoItems = [
    {
      name: 'Buy Mile',
      dueDate: "4/10/2025"
    },
    {
      name: "Go to College",
      dueDate: "4/10/2025"
    },
    {
      name: "Go to Home",
      dueDate: "4/10/2025"
    },
  ];

  return <center >
    <AppName />
    <AddTodo />
<TodoItems todoItems={todoItems}></TodoItems>
  </center>
}

export default App;