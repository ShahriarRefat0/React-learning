function AddTodo() {
  return (
    <div className="container kg-row">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="TODO Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
