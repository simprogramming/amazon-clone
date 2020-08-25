import React from 'react'

import './Checkout.css';

import { useStateValue } from './StateProvider';

function Checkout() {
  const [{basket}] = useStateValue();
  return (
    <div className="checkout__ad">
      <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p>
            You Have no items in your basket. To buy one or more items, click
            "add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              item={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout
