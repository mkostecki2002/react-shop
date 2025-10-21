import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

function FilterProducts({ priceRange }) {
  const { isLoading } = useContext(AppContext);
  const initialMin = Number(priceRange?.minPrice ?? 0);
  const initialMax = Number(priceRange?.maxPrice ?? 100);

  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);

  const handleMinPriceChange = e => {
    const v = Number(e.target.value);
    if (v <= maxPrice) setMinPrice(v);
    else setMinPrice(maxPrice);
  };

  const handleMaxPriceChange = e => {
    const v = Number(e.target.value);
    if (v >= minPrice) setMaxPrice(v);
    else setMaxPrice(minPrice);
  };

  useEffect(() => {
    const newMin = Number(priceRange?.minPrice ?? initialMin);
    const newMax = Number(priceRange?.maxPrice ?? initialMax);
    if (newMin <= newMax) {
      setMinPrice(newMin);
      setMaxPrice(newMax);
    } else {
      // fallback: set to clamped values
      setMinPrice(Math.min(newMin, newMax));
      setMaxPrice(Math.max(newMin, newMax));
    }
  }, [priceRange, initialMin, initialMax]);

  return (
    <div className="d-flex flex-column col-12 col-md-3 justify-content-center mb-4">
      {isLoading ? (
        <span className="placeholder">Loading...</span>
      ) : (
        <>
          <div className="filter-by-price-text">Filtruj według ceny:</div>
          <input
            type="range"
            min={priceRange.minPrice}
            max={priceRange.maxPrice}
            value={minPrice}
            onChange={handleMinPriceChange}
            className="form-range"
          />
          <input
            type="range"
            min={priceRange.minPrice}
            max={priceRange.maxPrice}
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="form-range"
          />
          <p className="price-range-display">
            {minPrice} - {maxPrice} zł
          </p>
        </>
      )}
    </div>
  );
}

export default FilterProducts;
