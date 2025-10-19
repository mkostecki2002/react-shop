import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchAPI } from "../api/api";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function ProductCard() {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchAPI(`products/${id}`).then(data => setProduct(data));
  }, [id]);

  return (
    <div className="card">
      {console.log(product)}
      <img src={`/${product.image}`} className="card-image-top" />
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">{product.description}</p>
        <h3 className="card-text">${product.price}</h3>
        <button className="btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
