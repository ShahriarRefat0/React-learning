import styles from "./FoodInput.module.css";

const FoodInput = ({handleKeyDown}) => {

  return <input onKeyDown={handleKeyDown}
    className={styles.foodInput}
    type="text" />
}

export default FoodInput;