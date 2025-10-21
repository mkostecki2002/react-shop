import ProductItem from "./ProductItem";

function ProductsList({ products }) {
  return (
    <div className="col-12 col-md-9">
      <div className="row row-cols-2 row-cols-md-3 g-3">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}

        {console.log(products)}
      </div>
    </div>
  );
}

export default ProductsList;
