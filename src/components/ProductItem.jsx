import { Link } from "react-router";

function ProductItem({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="card">
        <img src={`/${product.image}`} className="card-image-top" />
        <div className="card-body">
          <p className="card-text">{product.name}</p>
          <p className="card-text">${product.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
