import { useRef } from "react";
import { MdOutlineAddBox } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handelAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container kg-row" onSubmit={handelAddButtonClicked}>
      <form className="row">
        <div className="col-6">
          <input type="text" ref={todoNameElement} placeholder="TODO Here" />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <MdOutlineAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
