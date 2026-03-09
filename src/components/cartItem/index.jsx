import { connect } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../../../redux/actions/action';
import styles from './styles.module.css';

function CartItem({ basket = [], dispatch }) {
  const handleClickRemove = (id) => {
    const param = -1;
    dispatch(updateCartQuantity(id, param));
  };

  const handleClickDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={styles.btnContainer}>
      {basket.map((prod) => {
        return (
          <div className={styles.btns} key={prod.id}>
            <button onClick={() => handleClickRemove(prod.id)}>Remove 1</button>
            <button onClick={() => handleClickDelete(prod.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
  };
};

export default connect(mapStateToProps)(CartItem);
