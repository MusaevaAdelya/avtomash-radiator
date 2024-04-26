import API from "../api";

export const postOrderRequest = async (name, phoneNumber, productId) => {
    try {
        // Структурируем данные для отправки
        const requestData = {
            name: name,
            phone_number: phoneNumber,
            product: productId,  // может быть null, если продукт не выбран
            is_checked: false    // По умолчанию не проверено
        };

        // Отправляем POST запрос к API
        const response = await API.post(`/order-requests/`, requestData);
        console.log('Order request sent:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('API error:', error.response.data);
            return {error: error.response.data.detail || "Ошибка при отправке заявки"};
        } else {
            console.error('API error:', error);
            return {error: "Произошла ошибка при попытке отправки заявки"};
        }
    }
};
