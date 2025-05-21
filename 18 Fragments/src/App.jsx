import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css';
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";



function App() {
  let foodItems = ["Sobzi", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"]
  
    const handleOnChange = (event) => {
      console.log(event.target.value);
    };
    
  return (
    <>
      <Container >
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleOnChange={handleOnChange} ></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      
    </>
  )}

export default App
