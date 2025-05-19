import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css';
import Container from "./component/Container";



function App() {
  let foodItems = ["Sobzi", "Green Vegetable", "Roti","Salad","Milk","Ghee"]

  return (
    <>
      <Container >
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      
    </>
  )}

export default App
