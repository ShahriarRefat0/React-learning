import styles from "./FoodInput.module.css";

const FoodInput = ({handleOnChange}) => {

  return <input onChange={handleOnChange}
    className={styles.foodInput}
    type="text" />
}

export default FoodInput;