import ProductItem from "./ProductItem";

function ProductsList({ products }) {
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}

      {console.log(products)}
    </div>
  );
}

export default ProductsList;
