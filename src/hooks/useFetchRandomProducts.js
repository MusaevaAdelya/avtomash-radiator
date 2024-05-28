import { useEffect, useState } from "react";
import { getRandomProducts } from "../services/productService";

function useFetchRandomProducts() {
  const [otherProducts, setOtherProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchOtherProducts = async () => {
      try {
        setIsLoading(true);
        const response = await getRandomProducts();
        setOtherProducts(response);
        if(response?.error){
            setIsError(true);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log(error);
          console.log("error while fetching random products for ProudctsMain");
        }
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOtherProducts();
  }, []);

  return [otherProducts, isLoading, isError];
}

export default useFetchRandomProducts;
