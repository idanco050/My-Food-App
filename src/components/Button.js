
import {Fragment} from 'react'
import classes from './HeaderCartButton.module.css'

const Button = props => 
{
    return(
<Fragment>
    <button className = {classes.button} onClick ={props.showCart}>
        {props.label}
    </button>
</Fragment>
    );
}

export default Button;