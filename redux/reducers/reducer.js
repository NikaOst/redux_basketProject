const initialState = {
  products: [],
  basket: [],
};
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        basket: state.basket.filter((product) => product.id !== action.payload.id),
      };
    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        basket: state.basket.map((product) => {
          if (product.name === action.payload.name) {
            product.quantity = action.payload.quantity;
          }
          return product;
        }),
      };
    default:
      return state;
  }
};
export default basketReducer;
