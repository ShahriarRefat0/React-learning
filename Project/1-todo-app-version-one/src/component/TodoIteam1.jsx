function TodoIteam1() {
  let todoName = 'Go to College';
  let todoDate = '4/10/2025';
  return (
    <div div class="container kg-row">
    <div class="row">
      <div class="col-6">
        {todoName}
      </div>
      <div class="col-4">
        {todoDate}
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-danger kg-button">Delete</button>
      </div>
    </div>
  </div>
  );
}

export default TodoIteam1;