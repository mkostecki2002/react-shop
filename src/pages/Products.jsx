import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../api/api";
import { AppContext } from "../contexts/AppContext";
import ProductsList from "../components/ProductsList";
import FilterProducts from "../components/FilterProducts";

function Products() {
  const { setIsLoading, handleError } = useContext(AppContext);
  const { category, id } = useParams();
  const [products, setProducts] = useState([]);
  const minPrice = Math.min(...products.map(product => product.price));
  const maxPrice = Math.max(...products.map(product => product.price));
  useEffect(() => {
    setIsLoading(true);
    if (id) {
      fetchAPI(`products/${id}`)
        .then(data => setProducts([data]))
        .catch(e => {
          handleError(e);
        })
        .finally(() => {
          setIsLoading(false);
        });
      return;
    }
    if (category === "all" || !category) {
      fetchAPI("products")
        .then(data => setProducts(data))
        .catch(e => {
          handleError(e);
        })
        .finally(() => {
          setIsLoading(false);
        });
      return;
    } else {
      fetchAPI(`products/category/${category}`)
        .then(data => setProducts(data))
        .catch(e => {
          handleError(e);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [category, id]);

  return (
    <div className="row">
      <FilterProducts priceRange={{ minPrice, maxPrice }} />
      <ProductsList products={products} />
    </div>
  );
}

export default Products;
