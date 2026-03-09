const initialState = {
  products: [
    { id: 0, name: 'milk', price: 3 },
    { id: 1, name: 'bread', price: 2 },
    { id: 2, name: 'apple', price: 5 },
    { id: 3, name: 'banana', price: 10 },
  ],
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
          if (product.id === action.payload.id) {
            if (product.quantity > 0)
              return {
                ...product,
                quantity: product.quantity + action.payload.param,
              };
          }
          return product;
        }),
      };
    default:
      return state;
  }
};
export default basketReducer;
