import {Fragment ,useContext , useRef } from 'react'
import classes from './MealItemForm.module.css'
import CartContext from './CartContext'
const MealForm = props =>
{
    
    const {cart,addItem,setCart} = useContext(CartContext);
    const amountInput = useRef();

    function isNum(v) {
        return /\d/.test(v);
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        if(isNum(amountInput.current.value))
        {
            let sameItem = false;

            cart.map((item) =>
            {
                if(item.data.name === props.data.name)
                {
                    sameItem = true;
                    return;
                }
                return;
            });
            if(sameItem)
            {
                let newCart = cart.map((item) =>{
                    if(item.data.name === props.data.name)
                    {
                        let data ={
                            id: props.data.id,
                            name: props.data.name,
                            description:props.data.description,
                            price: item.data.price + (props.data.price * parseInt(amountInput.current.value))

                        }
                        return {data : data ,amount : (parseInt(amountInput.current.value) + item.amount) ,OGprice : props.data.price}
                    }
                    else
                    {
                        return item;
                    }
                })
                setCart(newCart)
            }
            else{
                let data = {
                            id: props.data.id,
                            name: props.data.name,
                            description:props.data.description,
                            price: props.data.price  * parseInt(amountInput.current.value)

                }
            addItem({data : data,amount : parseInt(amountInput.current.value),OGprice : props.data.price})
            }
            amountInput.current.value = "";
        }
    }
    
    return(
        <Fragment>
            <div className ={classes.form}>
            <form onSubmit ={handleSubmit}>
                <label htmlFor ='amount'>{props.label}</label>
                <input id ='amount' ref ={amountInput} ></input>
               <button className ={classes.button} type = "submit">{props.btnLabel}</button>
            </form>
            </div>
        </Fragment>
    );
}

export default MealForm;