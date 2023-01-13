
import MealItem from './MealItem'
import classes from './Meals.module.css'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Gyoza',
      description: "Man Tan Tan's famous gyoza.",
      price: 47,
    },
    {
      id: 'm2',
      name: "Gasmino's kebab",
      description: 'A kebab served in a pita.',
      price: 32,
    },
    {
      id: 'm3',
      name: 'Vitrina Burger',
      description: 'With cheese and caramelized onions.',
      price: 55,
    },
    {
      id: 'm4',
      name: 'Shawarma Hkosem',
      description: 'With tahini and amaba...',
      price: 51,
    },
  ];

const Meals = props => 
{
    
    return(
        <div>
        <div className = {classes.meals}>
        <ul className= {classes.ul}>
         {DUMMY_MEALS.map((meal) =>
         {
             return(<MealItem data = {meal} key = {meal.id}></MealItem>);
         })}
         </ul>
         </div>
         </div>
    );

}

export default Meals;