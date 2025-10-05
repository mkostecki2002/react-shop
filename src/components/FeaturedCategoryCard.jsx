import { Link } from "react-router";
import "../styles/FeaturedCategoryCard.css";

function FeaturedCategoryCard({ props }) {
  return (
    <Link to={`/categories/${props.name}`}>
      <div className="featured-category-card">
        <img src={props.image} className="featured-category-card-image" />
        <p>{props.name}</p>
      </div>
    </Link>
  );
}

export default FeaturedCategoryCard;
