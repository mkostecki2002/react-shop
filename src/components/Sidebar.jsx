import FilterProducts from "./FilterProducts";

function Sidebar({ priceRange }) {
  return (
    <div className="sidebar-products">
      {console.log(priceRange)}
      <FilterProducts priceRange={priceRange} />
    </div>
  );
}

export default Sidebar;
