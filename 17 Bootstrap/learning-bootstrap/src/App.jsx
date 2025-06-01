function App() {
  return (
    <center className="todo-container">
      <h1>ToDo App</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="TODO Here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-6">Go to College</div>
          <div className="col-4">4/10/2025</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-6">Buy Milk</div>
          <div className="col-4">4/10/2025</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
