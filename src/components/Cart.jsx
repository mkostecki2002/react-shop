import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div className="row my-5 text-center">
      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          <h2>Your Cart</h2>

          <div className="d-none d-md-block">
            <table className="table table-hover text-start align-middle">
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
                {cart.map(item => (
                  <CartItem key={item.id} props={item} isTable={true} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-block d-md-none">
            {cart.map((item, i) => (
              <CartItem
                key={item.id}
                props={item}
                isTable={false}
                isLast={i === cart.length - 1}
              />
            ))}
          </div>
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
