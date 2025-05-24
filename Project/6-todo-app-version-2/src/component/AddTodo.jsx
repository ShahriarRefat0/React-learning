import { useState } from "react";

function AddTodo({ onNewItem }) {
  
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handelNameChange = (event) => {
    setTodoName(event.target.value)
  }

  const handelDateChange = (event) => {
    setDueDate(event.target.value);
  }

  const handelAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }


  return (
    < div className="container kg-row">
    <div className="row">
      <div className="col-6">
          <input type="text" value={ todoName} placeholder="TODO Here" onChange={handelNameChange} />
      </div>
      <div className="col-4">
        <input type="date" value={dueDate} onChange= {handelDateChange} />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success kg-button" onClick={handelAddButtonClicked}>Add</button>
      </div>
    </div>
  </div>
  );
}

export default AddTodo;