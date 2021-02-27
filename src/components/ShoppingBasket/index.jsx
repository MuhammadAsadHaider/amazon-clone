import React from 'react';
import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './style.css';
import { useStateValue } from '../StateProvider';

function ShoppingBasket() {
    const [{basket}] = useStateValue();
    return (
        <Link to="/checkout" style={{textDecoration: "none"}}>
            <div className="shoppingBasket">
                <ShoppingBasketIcon/>
                <span className="shoppingBasket__quantity">{basket.length}</span>
            </div>
        </Link>
    )
}

export default ShoppingBasket
