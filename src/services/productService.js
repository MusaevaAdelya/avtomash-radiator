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