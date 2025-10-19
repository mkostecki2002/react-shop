import { useContext, useEffect, useState } from "react";
import { fetchAPI } from "../api/api";
import FeaturedCategoryCard from "./FeaturedCategoryCard";
import { AppContext } from "../contexts/AppContext";

function FeaturedCategoriesSection() {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const { handleError, clearError, setIsLoading } = useContext(AppContext);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const data = await fetchAPI("categories/featured");

        if (data.length > 0) {
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
  }, []);

  return (
    <div className="row">
      {console.log(featuredCategories)}
      {featuredCategories.map(featuredCategory => (
        <FeaturedCategoryCard
          key={featuredCategory.id}
          props={featuredCategory}
        />
      ))}
    </div>
  );
}

export default FeaturedCategoriesSection;
