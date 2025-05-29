import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import { useState } from "react";
import WelcomeMassage from"./WelcomeMessage"
import { TodoItemsContext } from "../store/todo-items-store";


function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {

    const newTodoItems = [
      ...todoItems, { name: itemName, dueDate: itemDueDate }
    ];
    setTodoItems(newTodoItems);
  };


  const handelDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return(
  <TodoItemsContext.Provider>
  <center >
    <AppName />
    <AddTodo onNewItem={handleNewItem} />
    {todoItems.length === 0 && <WelcomeMassage></WelcomeMassage>}
<TodoItems todoItems={todoItems} onDeleteClick= {handelDeleteItem}></TodoItems>
      </center>
      </TodoItemsContext.Provider>
    )
}

export default App;