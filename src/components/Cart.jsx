import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import "../styles/Cart.css";

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          <h2>Your Cart</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartItem key={item.id} props={item} />
              ))}
            </tbody>
          </table>
        </>
      )}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>
          Total:{" "}
          {cart
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}{" "}
          zł
        </p>
      </div>
    </div>
  );
}
export default Cart;
