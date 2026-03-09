export const addToCart = (data) => {
  return {
    type: 'ADD_TO_CART',
    payload: data,
  };
};
export const removeFromCart = (id) => {
  return {
    type: 'DELETE_FROM_CART',
    payload: {
      id,
    },
  };
};
export const updateCartQuantity = (name, quantity) => {
  return {
    type: 'UPDATE_QUANTITY',
    payload: {
      name,
      quantity,
    },
  };
};
