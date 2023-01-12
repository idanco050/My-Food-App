import {useState,useContext,useEffect} from 'react'
import CartContext from './CartContext'
const CartItem = props =>
{
    const[price ,setPrice] =useState(0);
    const{cart,setCart} = useContext(CartContext);

    useEffect(()=>{
        
    },[])

    

    function incrementCount() {
        let newCart = []
              cart.map((item)=>{
             if(props.data.name === item.data.name)
             {
               
                    let data  = { id: props.data.id,
                    name: props.data.name,
                    description:props.data.description,
                    price: item.data.price + props.price,
                        }
                    newCart.push({data : data,amount:item.amount+1, OGprice : props.price}) 
             }
             else
             {
                 newCart.push(item)
             }
          
         });
         setCart(newCart);
        
      }
      function decrementCount() {
          let newCart = []
              cart.map((item)=>{
             if(props.data.name === item.data.name)
             {
               if(item.amount > 1)
               {
                    let data  = { id: props.data.id,
                    name: props.data.name,
                    description:props.data.description,
                    price: item.data.price - props.price,
                        }
                    newCart.push({data : data,amount:item.amount-1, OGprice : props.price}) 
               }
               else
               return;
             }
             else
             {
                 newCart.push(item)
             }
         });
         setCart(newCart);
      }

    return (
        <div>
       <h2>{props.data.name}</h2>
       <h3>{props.data.price}</h3>
      <div>{props.amount}</div>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
        
    );
}
export default CartItem;