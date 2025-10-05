import { Link } from "react-router";
import "../styles/ProductItem.css";

function ProductItem({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="product-item">
        <img src={`/${product.image}`} className="product-item-image" />
        <p className="product-item-name">{product.name}</p>
        <p className="product-item-price">${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductItem;
