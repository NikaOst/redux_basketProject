import { createStore } from 'redux';
import basketReducer from './reducers/reducer';

const store = createStore(basketReducer);
export default store;

// Создайте файл `store.js` в папке `redux`:
// Импортируйте `createStore` из Redux.
// Импортируйте редьюсер из `reducers.js`.
// Создайте store, используя `createStore`.

// Создайте файл `reducers.js` в папке `redux`:
// Определите начальное состояние, содержащее список продуктов и корзину.
// Создайте редьюсер, который будет обрабатывать действия `ADD_TO_CART`, `REMOVE_FROM_CART` и `UPDATE_CART_QUANTITY`.

// Создайте файл `actions.js` в папке `redux`:
// Определите действия `addToCart`, `removeFromCart` и `updateCartQuantity`.
// Каждое действие возвращает объект с типом действия и полезной нагрузкой (payload).
