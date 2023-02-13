import MealItem from "./MealItem";
import classes from "./Meals.module.css";
import {useEffect,useState} from 'react'

const Meals = (props) => {

  const[meals,setMeals] = useState([])
  const[isLoading,setIsLoading] = useState(false)

  async function fetchMeals()
  {
    setIsLoading(true)
    const response = await fetch("https://meal-app-react-default-rtdb.europe-west1.firebasedatabase.app/meals.json")
    const data = await response.json();
    const mealsList = Object.values(data);
    setMeals(mealsList)
    setIsLoading(false)
  }
  useEffect(()=>{
    fetchMeals();
  },[])
  
  return (
    <div>
      <div className={classes.meals}>
        <ul className={classes.ul}>
          {!isLoading && meals.map((meal,index) => {
            return <MealItem data={meal} key={index}></MealItem>;
          })}
          {isLoading && <p>Loading Meals...</p>}
        </ul>
      </div>
    </div>
  );
};

export default Meals;
