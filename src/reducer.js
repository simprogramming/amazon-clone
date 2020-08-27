export const initialState = {
  basket: [{
   id:"1234315",
   title:"The Lean Startup How constant innovation creates radically successful Businesses",
   price:11.96,
   rating:5,
   image:"/leanstartup.png"
  }],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':

      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      if (index >= 0 ) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id} as its not)`
        );
      }

      return { ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
}

export default reducer;
