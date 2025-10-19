import { Link } from "react-router";

function FeaturedCategoryCard({ props }) {
  return (
    <div className="col-md-4 mb-3">
      <Link to={`/categories/${props.name}`}>
        <div className="card h-100 shadow-sm">
          <img
            src={props.image}
            className="card-img-top"
            alt={props.name}
            style={{ objectFit: "cover", height: 180 }}
          />
          <div className="card-body d-flex align-items-center justify-content-center">
            <p className="mb-0 fw-semibold text-center text-dark">
              {props.name}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FeaturedCategoryCard;
