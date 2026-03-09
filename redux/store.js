import { createStore } from 'redux';
import basketReducer from './reducers/reducer';

const store = createStore(basketReducer);
export default store;

// Создайте файл `actions.js` в папке `redux`:
// Определите действия `addToCart`, `removeFromCart` и `updateCartQuantity`.
// Каждое действие возвращает объект с типом действия и полезной нагрузкой (payload).
