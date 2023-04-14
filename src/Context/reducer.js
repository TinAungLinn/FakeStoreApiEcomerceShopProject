export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      const isExist = state.cart.find((item) => item.id === action.payload.id);
      if (isExist) {
        return state;
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload }] };
      }
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "CLEAR_CART":
      return {...state, cart: state.cart = []};
    default:
      return state;
  }
};
