function TodoItem2() {
  let todoName = "Buy Milk";
  let todoDate = "4/10/2025";
  return (
    <div className="container kg-row">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
