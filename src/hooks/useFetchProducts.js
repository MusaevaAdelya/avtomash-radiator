import { useEffect, useState } from "react";
import {
  getProductsByCategory,
} from "../services/productService";

function useFetchProducts(selectedCategory ) {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (selectedCategory) {
      const fetchProducts = async () => {
        try {
          setIsLoading(true);
          const productsData = await getProductsByCategory(selectedCategory);
          if (!productsData.error) {
            setProducts(productsData.results);
          }
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
      };
      fetchProducts();
    }
  }, [selectedCategory]);

  return [products, isLoading, isError];
}

export default useFetchProducts;
