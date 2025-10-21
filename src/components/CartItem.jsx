import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function CartItem({ props, isTable, isLast }) {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = newQuantity => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateQuantity(props.id, newQuantity);
    }
  };

  return isTable ? (
    <tr scope="row" key={props.id}>
      <td scope="col">
        <button
          type="button"
          className="btn btn-close"
          aria-label="close"
          onClick={() => removeFromCart(props.id)}
        ></button>
      </td>
      <td scope="col">
        <img
          src={props.image}
          alt={props.name}
          className="rounded"
          style={{ width: 64, aspectRatio: 1 / 1, objectFit: "cover" }}
        />
      </td>
      <td scope="col">{props.name}</td>
      <td scope="col">{props.price} zł</td>
      <td scope="col">
        <button
          className="btn btn-sm btn-primary mx-2"
          onClick={() => handleQuantityChange(props.quantity - 1)}
        >
          -
        </button>
        {/* Display current quantity needs to be fixed. Differences between quantity with 1 digit and 2 digits */}
        <span>{props.quantity}</span>
        <button
          className="btn btn-sm btn-primary mx-2"
          onClick={() => handleQuantityChange(props.quantity + 1)}
        >
          +
        </button>
      </td>
    </tr>
  ) : (
    <div
      className={`row border-top ${isLast && "border-bottom"} border-primary`}
      key={props.id}
    >
      <div className="col-12 p-2">
        <button
          type="button"
          className="btn btn-close"
          aria-label="close"
          onClick={() => removeFromCart(props.id)}
        ></button>
      </div>
      <div className="col-12 border-top border-dark p-2">
        <img
          src={props.image}
          alt={props.name}
          className="rounded"
          style={{ width: 64, aspectRatio: 1 / 1, objectFit: "cover" }}
        />
      </div>
      <div className="col-12 border-top border-dark p-2">
        <h5>{props.name}</h5>
      </div>
      <div className="col-12 border-top border-dark p-2">
        <p>Price: {props.price} zł</p>
      </div>
      <div className="col-12 border-top border-dark p-2">
        <p>
          Quantity:
          <button
            className="btn btn-sm btn-primary mx-2"
            onClick={() => handleQuantityChange(props.quantity - 1)}
          >
            -
          </button>
          <span>{props.quantity}</span>
          <button
            className="btn btn-sm btn-primary mx-2"
            onClick={() => handleQuantityChange(props.quantity + 1)}
          >
            +
          </button>
        </p>
      </div>
    </div>
  );
}

export default CartItem;
