import classes from './AppInfo.module.css'
const AppInfo = props =>
{
    return(
        <div className = {classes.summary}>
            <h2>Amazing Food, For You!</h2>
            <p>Our app makes it easy to have your favorite meals delivered straight to your door.
                 Simply browse through local restaurants, choose your favorite dishes,
                  and place your order. 
                  Our reliable delivery drivers will bring your order to you in no time,
                   so you can enjoy a delicious meal without having to leave the comfort of your home.
                    With our wide selection of cuisines and easy-to-use interface, getting great food has never been easier!
                    </p>
        </div>
    );
}

export default AppInfo;