
import CartContext from './CartContext'
import {useContext,useEffect,useState} from 'react'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import Modal from './Modal'
const Cart = props =>
{
    const{cart} = useContext(CartContext);
    const[amonut,setAmount] = useState(0);

    useEffect(()=>{
        let curAmount = 0;
        cart.forEach(element => {
        curAmount  += element.data.price;
        });
        setAmount(curAmount);

    },[cart])

return(
     
<Modal>
<ul className ={classes['cart-items']}>
    {cart.map((item,index) =>{
        return(<CartItem data = {item.data} amount = {item.amount} price ={item.OGprice} key = {index}></CartItem>);
    })}
</ul>
<div className ={classes.total}>
<span>Total Amount</span>
<span>${amonut}</span>
</div>
<div className ={classes.actions}>
<button className={classes['button--alt']} onClick= {props.hideCart}>Close</button>
<button className ={classes.button}>Order</button>
</div>
</Modal>

    );
}

export default Cart;