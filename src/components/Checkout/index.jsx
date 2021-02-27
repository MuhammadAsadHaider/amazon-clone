import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CheckoutSubtotal from "./CheckoutSubtotal";
import "./style.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  const total = basket?.map(item => parseFloat(item.price)).reduce((a,b) => a+b, 0);
  console.log(total);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/GW_HUD/PrimeUP/XCM_Manual_1276090_1413400_US_ilm_desk_1x_3459572_650x45_en_US._CB417644393_.png"
          alt="Ad"
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout__title">Your Shopping Basket is empty</h2>
            <p>
              Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
              Continue shopping on the Amazon.com homepage, learn about today's deals, or visit your Wish List.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct {...item} />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">
        <CheckoutSubtotal total={total} itemCount={basket.length}/>
      </div>
    </div>
  );
}

export default Checkout;
