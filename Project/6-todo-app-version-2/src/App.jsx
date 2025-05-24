import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import { useState } from "react";
import WelcomeMassage from"./WelcomeMessage"


function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`)
    const newTodoItems = [
      ...todoItems, { name: itemName, dueDate: itemDueDate }
    ];
    setTodoItems(newTodoItems);
  };


  const handelDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return <center >
    <AppName />
    <AddTodo onNewItem={handleNewItem} />
    {todoItems.length === 0 && <WelcomeMassage></WelcomeMassage>}
<TodoItems todoItems={todoItems} onDeleteClick= {handelDeleteItem}></TodoItems>
  </center>
}

export default App;