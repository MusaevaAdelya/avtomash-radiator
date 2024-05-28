import React, { useEffect, useState } from 'react';
import Button from "../components/Button";
import { getCategories, getProductsByCategory } from '../services/productService'; // Убедитесь, что эти функции импортированы правильно
import { BASE_URL } from '../config';
import ProductCharacteristics from "../components/ProductCharacteristics";

function ProductListPage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesData = await getCategories();
            if (!categoriesData.error) {
                setCategories(categoriesData);
                setSelectedCategory(categoriesData[0].id); // Предполагаем, что выбираем первую категорию по умолчанию
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            const fetchProducts = async () => {
                const productsData = await getProductsByCategory(selectedCategory);
                if (!productsData.error) {
                    setProducts(productsData.results);
                }
            };
            fetchProducts();
        }
    }, [selectedCategory]);

    return (
        <div className="p-4 bg-white product-list">
            <div className="p-5 text-center product-list-header">
                <h1 className="text-6xl font-semibold text-gray-800">Продукция</h1>
                <p className="mt-4 font-semibold text-gray-600">
                    Компания с многолетним опытом поставок специальной и сельскохозяйственной техники.
                    Самый широкий ассортимент представленный на рынке Кыргызстана известных международных брендов.
                </p>
                <div className="flex flex-col justify-center gap-2 mt-5 product-list-buttons md:flex-row">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`px-6 py-3 ${selectedCategory === category.id ? 'bg-red-600' : 'bg-gray-300'} text-white font-semibold cursor-pointer transition-colors duration-300 hover:bg-red-700 rounded-3xl`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-center -mx-4">
                {products.map((product) => (
                    <div key={product.id} className="p-4 w-full md:w-1/2 lg:w-1/4">
                        <div className="h-full flex flex-col overflow-hidden bg-white border-2 border-gray-200 rounded-lg shadow-lg">
                            <img
                                className="w-full h-48 object-cover"
                                src={product.images.length > 0 ? `${BASE_URL}${product.images[0].image}` : "/images/placeholder.jpg"}
                                alt={product.name}
                            />
                            <div className="flex-grow p-6 flex flex-col">
                                <h2 className="text-lg font-bold text-gray-900 truncate">{product.name}</h2>
                                <div className="flex-grow">
                                    {product.year && <ProductCharacteristics icon="/images/calendar-icon.svg" text={`Год выпуска: ${product.year}`} />}
                                    {product.power && <ProductCharacteristics icon="/images/power-icon.svg" text={`Мощность: ${product.power} л.с.`} />}
                                    {product.country && <ProductCharacteristics icon="/images/country-icon.svg" text={`Страна: ${product.country}`} />}
                                    {!product.year && !product.power && !product.country && product.attributes.slice(0, 3).map((attr, index) => (
                                        <ProductCharacteristics
                                            key={index}
                                            icon="/images/power-icon.svg"
                                            text={`${attr.key}: ${attr.value}`}
                                        />
                                    ))}
                                </div>
                                <Button
                                    styleClasses="mt-auto w-18 py-1 px-9 border border-primary border-2 text-l text-dark-400 font-medium rounded-full hover:bg-primary hover:text-white transition duration-200"
                                    isLink={true}
                                    to={`/products/${product.id}`}
                                >
                                    <span>Узнать подробнее</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ProductListPage;
