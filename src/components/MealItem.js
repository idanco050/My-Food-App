import {Fragment} from 'react'
import classes from './MealItem.module.css'
import MealForm from './MealForm'
const MealItem = props => 
{
    return(
        <Fragment>
            <div className ={classes.meal}>
                <h1>{props.data.name}</h1>
                <p className ={classes.description}>{props.data.description}</p>
                <h3 className = {classes.price}>${props.data.price}</h3>
                <MealForm label ="Amount" btnLabel = " + Add" data = {props.data}></MealForm>
            </div>
        </Fragment>
    );
}

export default MealItem;