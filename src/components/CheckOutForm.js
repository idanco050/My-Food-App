import useInput from '../hooks/use-input'
import classes from './CheckOutForm.module.css'
import {useState} from 'react'

const CheckOutForm = (props) =>
{
    const[isLoading , setIsLoading] = useState(false);

    const {
        value: firstNameVal,
        isValValid: firstNameValid,
        hasError: firstNameHasError,
        handleValChange: firstNameChangeHander,
        handleBlurChange: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput(val=>{return val.trim() !== ''});

    const {
        value: lastNameVal,
        isValValid: lastNameValid,
        hasError: lastNameHasError,
        handleValChange: lastNameChangeHander,
        handleBlurChange: lastNameBlurHandler,
        reset: resetLastName,
    
    } = useInput(val=>{ return val.trim() !== ''});

    const {
        value: cardVal,
        isValValid: cardValid,
        hasError: cardHasError,
        handleValChange: cardChangeHander,
        handleBlurChange: cardBlurHandler,
        reset: resetCard,

    } = useInput(val=>{return val.trim() !== ''});

    const {
        value: emailVal,
        isValValid: emailValid,
        hasError: emailHasError,
        handleValChange: emailChangeHander,
        handleBlurChange: emailBlurHandler,
        reset: resetEmail,

    } = useInput(val=>{return val.includes('@')});

    let formIsValid = false;

    if(firstNameValid && lastNameValid && emailValid && cardValid)
    {
        formIsValid = true;
    }

    let firstNameStyle = firstNameHasError ? classes.invalidInput : classes.input;
    let lastNameStyle = lastNameHasError ? classes.invalidInput : classes.input;
    let emailStyle = emailHasError ? classes.invalidInput : classes.input;
    let cardStyle = cardHasError ? classes.invalidInput : classes.input;

    async function handleSubmitOrder()
    {
        let order = {
            firstName : firstNameVal,
            lastName: lastNameVal,
            email: emailVal,
            card : cardVal,
            amount: props.totalAmount,
            cart: props.items,
        }
        setIsLoading(true);
        resetFirstName();
        resetLastName();
        resetCard();
        resetEmail();
        const response = await fetch("https://meal-app-react-default-rtdb.europe-west1.firebasedatabase.app/orders.json",{
        method: 'POST',
        body: JSON.stringify(order),
        headers:{
            'Content-Type': 'appliction/json'
        }
        });
        const data = await response.json();
        console.log(data);
        setIsLoading(false);
        props.hide();
        props.reset([]);
    }

    return (
        <div>
        {props.totalAmount > 0 && <form className = {classes.form}>
        <div className = {classes.control}>
          <label htmlFor="firstName">First Name:</label>
          <input
            className = {firstNameStyle}
            type="text"
            id="firstName"
            value={firstNameVal}
            onChange={firstNameChangeHander}
            onBlur ={firstNameBlurHandler}
          />
          {firstNameHasError && <p className={classes.invalid}>please enter a first name.</p>}
        </div>
        <div className = {classes.control}>
          <label htmlFor="lastName">Last Name:</label>
          <input
          className = {lastNameStyle}
            type="text"
            id="lastName"
            value={lastNameVal}
            onChange={lastNameChangeHander}
            onBlur = {lastNameBlurHandler}
          />
           {lastNameHasError && <p className={classes.invalid}>please enter a last name.</p>}
        </div>
        <div className = {classes.control}>
          <label htmlFor="email">Email:</label>
          <input
          className = {emailStyle}
            type="text"
            id="email"
            value={emailVal}
            onChange={emailChangeHander}
            onBlur = {emailBlurHandler}
          />
           {emailHasError && <p className={classes.invalid}>please enter a valid email.</p>}
        </div>
        <div className = {classes.control}>
          <label htmlFor="creditCardNumber">Card Number:</label>
          <input
          className = {cardStyle}
            type="text"
            id="creditCardNumber"
            value={cardVal}
            onChange={cardChangeHander}
            onBlur= {cardBlurHandler}
          />
           {cardHasError && <p className={classes.invalid}>please enter card number.</p>}
        </div>
      </form>}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${props.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.hide}>
          Close
        </button>
        <button disabled ={!formIsValid} className={classes.button} onClick ={handleSubmitOrder}>Order</button>
      </div>
      {isLoading && (
        <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
          Loading...
        </div>
      )}
      </div>
    );
};

export default CheckOutForm;