import API from "../api";


export const getCases = async () => {
  try {
    const response = await API.get('/certificates/');
    console.log('Cases data:', response.data);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    return { error: "Произошла ошибка при попытке получения списка сертификатов" };
  }
};