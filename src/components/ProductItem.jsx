import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const imgSrc = product?.image
    ? product.image.startsWith("/")
      ? product.image
      : `/${product.image}`
    : "/assets/placeholder.png";

  return (
    <div className="col">
      <Link to={`/products/${product.id}`} className="text-decoration-none">
        <div className="card h-100">
          <div className="ratio ratio-1x1">
            <img
              src={imgSrc}
              alt={product?.name || "product"}
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="card-body d-flex flex-column">
            <p className="card-text mb-2 flex-grow-1 text-dark">
              {product?.name}
            </p>
            <p className="card-text fw-semibold mb-0">${product?.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
