import API from "../api";

export const getProduct = async (productId) => {
    console.log(productId);
    try {
        const response = await API.get(`/products/${productId}/`);
        console.log('Product data:', response.data);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return { error: "Продукт не найден" };
        } else {
            console.error('API error:', error);
            return { error: "Произошла ошибка при попытке получения данных о продукте" };
        }
    }
};

export const getRandomProducts = async () => {
    try {
        const response = await API.get(`/random-products/`);
        console.log('Product data:', response.data);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return { error: "Продукт не найден" };
        } else {
            console.error('API error:', error);
            return { error: "Произошла ошибка при попытке получения данных о продукте" };
        }
    }
};

// Функция для получения списка всех продуктов
export const getProducts = async () => {
  try {
    const response = await API.get('/products/');
    console.log('Products data:', response.data);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    return { error: "Произошла ошибка при попытке получения списка продуктов" };
  }
};

export const getCategories = async () => {
  try {
    const response = await API.get('/categories/');
    console.log('Categories data:', response.data);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    return { error: "Произошла ошибка при попытке получения списка категорий" };
  }
};

export const getProductsByCategory = async (categoryId) => {
  try {
    const response = await API.get(`/categories/${categoryId}/products/`);
    console.log(`Products data for category ${categoryId}:`, response.data);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    return { error: "Произошла ошибка при попытке получения продуктов по категории" };
  }
};
