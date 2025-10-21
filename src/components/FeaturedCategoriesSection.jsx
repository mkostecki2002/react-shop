import { useContext, useEffect, useState } from "react";
import { fetchAPI } from "../api/api";
import FeaturedCategoryCard from "./FeaturedCategoryCard";
import { AppContext } from "../contexts/AppContext";

function FeaturedCategoriesSection() {
  const { handleError, clearError, setIsLoading } = useContext(AppContext);
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const data = await fetchAPI("categories/featured");

        if (Array.isArray(data) && data.length > 0) {
          setFeaturedCategories(data);
          clearError();
        }
      } catch (error) {
        handleError(error);
        console.error("Error: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
      {featuredCategories.map((featuredCategory, i) => (
        <FeaturedCategoryCard
          key={featuredCategory.id ?? featuredCategory.name ?? `featured-${i}`}
          props={featuredCategory}
        />
      ))}
    </div>
  );
}

export default FeaturedCategoriesSection;
