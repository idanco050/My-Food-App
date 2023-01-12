import {Fragment} from 'react'
import MealItem from './MealItem'
import classes from './Meals.module.css'
import Card from './Card'
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18,
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