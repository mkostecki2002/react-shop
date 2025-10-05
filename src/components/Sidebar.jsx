import FilterProducts from "./FilterProducts";
import "../styles/Sidebar.css";

function Sidebar({ priceRange }) {
  return (
    <div className="sidebar-products">
      {console.log(priceRange)}
      <FilterProducts priceRange={priceRange} />
    </div>
  );
}

export default Sidebar;
