export const addToCart = (data) => {
  return {
    type: 'ADD_TO_CART',
    payload: data,
  };
};
export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      id,
    },
  };
};
export const updateCartQuantity = (id, param) => {
  return {
    type: 'UPDATE_CART_QUANTITY',
    payload: {
      id,
      param,
    },
  };
};
