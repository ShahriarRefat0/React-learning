import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoIteam1 from "./component/TodoIteam1";
import TodoIteam2 from "./component/TodoIteam2";



function App() {
  return <center class='todo-container'>
    <AppName />
    <AddTodo />
    <TodoIteam1/>
    <TodoIteam2 />

  </center>
}

export default App;