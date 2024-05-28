import { useEffect, useState } from "react";
import { getCategories } from "../services/productService";

function useFetchCategories(setSelectedCategory) {
  const [categories, setCategories] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const categoriesData = await getCategories();

        if (!categoriesData.error) {
          setCategories(categoriesData);
          setSelectedCategory(categoriesData[0].id);
        } else {
          setIsError(true);
          console.log(categoriesData.error);
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, [setSelectedCategory]);

  return [categories, isLoading, isError];
}

export default useFetchCategories;
