import { connect } from 'react-redux';
import styles from './styles.module.css';

function Cart({ basket = [], products = [] }) {
  const total = basket.reduce((sum, item) => {
    const product = products.find((prod) => prod.id === item.id);
    return sum + product.price * item.quantity;
  }, 0);

  return (
    <div className={styles.basketContainer}>
      {basket.map((prod) => {
        const prodPrice = products.reduce((sum, item) => {
          if (prod.id === item.id) {
            sum = sum + item.price * prod.quantity;
          }
          return sum;
        }, 0);
        return (
          <div className={styles.productInBasket} key={prod.id}>
            <p>
              {prod.name} - {prodPrice}$
            </p>
            <input type="text" value={prod.quantity} />
          </div>
        );
      })}

      <p>Total: {total}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    basket: state.basket,
  };
};

export default connect(mapStateToProps)(Cart);
