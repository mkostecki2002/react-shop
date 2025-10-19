import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../api/api";
import ProductsList from "../components/ProductsList";
import Sidebar from "../components/Sidebar";
import { ScreenContext } from "../contexts/ScreenContext";
import FilterProducts from "../components/FilterProducts";

function Products() {
  const { isMobile } = useContext(ScreenContext);
  const { category, id } = useParams();
  const [products, setProducts] = useState([]);
  const minPrice = Math.min(...products.map(product => product.price));
  const maxPrice = Math.max(...products.map(product => product.price));
  useEffect(() => {
    console.log(category);
    if (id) {
      fetchAPI(`products/${id}`).then(data => setProducts([data]));
      return;
    }
    if (category === "all" || !category) {
      fetchAPI("products").then(data => setProducts(data));
      return;
    } else {
      fetchAPI(`products/category/${category}`).then(data => setProducts(data));
    }
  }, [category, id]);

  return (
    <div
      className="row"
      style={isMobile ? { flexDirection: "column", alignItems: "center" } : {}}
    >
      {!isMobile ? (
        <Sidebar priceRange={{ minPrice, maxPrice }} />
      ) : (
        <FilterProducts priceRange={{ minPrice, maxPrice }} />
      )}
      <ProductsList products={products} />
    </div>
  );
}

export default Products;
