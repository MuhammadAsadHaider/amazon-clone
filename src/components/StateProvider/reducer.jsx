export const initialState = {
  basket: [],
  user: null
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => amount + item.price, 0);
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case "REMOVE_FROM_BASKET":
      return{
        ...state,
        basket: state.basket.filter(item => item.id !== action.item.id)
      };
    default:
      return state;
  }
};
