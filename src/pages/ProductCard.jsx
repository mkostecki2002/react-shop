import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchAPI } from "../api/api";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../styles/ProductCard.css";

function ProductCard() {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchAPI(`products/${id}`).then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="product-card-container">
      {console.log(product)}
      <img src={`/${product.image}`} className="product-card-image" />
      <div className="product-card-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
