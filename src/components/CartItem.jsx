import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../styles/CartItem.css";

function CartItem({ props }) {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateQuantity(props.id, newQuantity);
    }
  };

  return (
    <tr key={props.id}>
      <td>
        <button onClick={() => removeFromCart(props.id)}>Remove</button>
      </td>
      <td>
        <img src={props.image} alt={props.name} className="cart-item-image" />
      </td>
      <td data-label="Product">{props.name}</td>
      <td data-label="Price">{props.price} zł</td>
      <td data-label="Quantity">
        <button
          className="cart-quantity-button"
          onClick={() => handleQuantityChange(props.quantity - 1)}
        >
          -
        </button>
        {props.quantity}
        <button
          className="cart-quantity-button"
          onClick={() => handleQuantityChange(props.quantity + 1)}
        >
          +
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
