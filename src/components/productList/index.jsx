import { connect } from 'react-redux';
import { addToCart, updateCartQuantity } from '../../../redux/actions/action';
import styles from './styles.module.css';

function ProductList({ products = [], basket = [], dispatch }) {
  const handleClick = (id, name) => {
    const productInBasket = basket.find((prod) => prod.name === name);
    if (productInBasket) {
      const param = 1;
      dispatch(updateCartQuantity(id, param));
    } else {
      const addProduct = {
        id: id,
        name: name,
        quantity: 1,
      };

      dispatch(addToCart(addProduct));
    }
  };

  return (
    <div className={styles.productContainer}>
      {products.map((prod) => {
        return (
          <div className={styles.product} key={prod.id}>
            <p>{prod.name}</p>
            <p>Price: {prod.price}$</p>
            <button onClick={() => handleClick(prod.id, prod.name)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    basket: state.basket,
  };
};

export default connect(mapStateToProps)(ProductList);
