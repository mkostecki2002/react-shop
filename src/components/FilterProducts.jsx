import { useEffect, useState } from "react";

function FilterProducts({ priceRange }) {
  const [minPrice, setMinPrice] = useState(priceRange.minPrice);
  const [maxPrice, setMaxPrice] = useState(priceRange.maxPrice);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    console.log(e.target.value);
  };
  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    setMinPrice(priceRange.minPrice);
    setMaxPrice(priceRange.maxPrice);
  }, [priceRange]);

  return (
    <div className="filter-products">
      <div className="filter-by-price-text">Filtruj według ceny:</div>
      <input
        type="range"
        min={priceRange.minPrice}
        max={priceRange.maxPrice}
        value={minPrice}
        onChange={handleMinPriceChange}
        className="filter-products-slider"
        style={{ pointerEvents: "none" }}
      />
      <input
        type="range"
        min={priceRange.minPrice}
        max={priceRange.maxPrice}
        value={maxPrice}
        onChange={handleMaxPriceChange}
        className="filter-products-slider"
      />
      <p className="price-range-display">
        {minPrice} - {maxPrice} zł
      </p>
    </div>
  );
}

export default FilterProducts;
