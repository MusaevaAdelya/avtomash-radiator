import React from 'react';
import { useParams } from 'react-router-dom';

import ApplicationButton from '../components/ApplicationButton';
const productDetails = {
    id: '1',
    name: 'Трактор UX92a',
    price: '4 500 000 сом',
    imageUrl: "/images/tractor-main-1.jpg",
    main_features: [
        { key: 'Семейство продуктов', value: 'Тяжелая техника' },
        { key: 'Тип бензина', value: 'Дизель' },
        { key: 'Мощность', value: '562 л.с.' },
        { key: 'Максимальная мощность при уплотнении условиях', value: '700 лс' },
        { key: 'Максимальная мощность при уплотнении условиях', value: '700 лс' },
        { key: 'Максимальная мощность при уплотнении условиях', value: '700 лс' },
        // ... другие основные характеристики
    ],
    other_features: [
        { key: 'Эко тип', value: 'Euro 5' },
        { key: 'Максимальная мощность при уплотнении условиях', value: '700 лс' },
        { key: 'Размеры корзин:', value: '400x400 мм' },
        { key: 'Эко тип', value: 'Euro 5' },
        { key: 'Тип бензина', value: 'Дизель' },
        { key: 'Семейство продуктов', value: 'Тяжелая техника' },
        { key: 'Семейство продуктов', value: 'Тяжелая техника' },
        { key: 'Семейство продуктов', value: 'Тяжелая техника' },




    ]
};


function ProductPage() {
    const { id } = useParams();
    const product = productDetails; // В реальном приложении здесь будет запрос к API


    if (product.id !== id) {
        return <div>Продукт не найден</div>;
    }
    const renderFeatureList = (features, columns) => (
        <div className={`grid grid-cols-${columns} gap-8 w-full`}>
            {features.map((feature, index) => (
                <div key={index} className="bg-white ">
                    <div className="text-zinc-400 text-lg font-medium">{feature.key}:</div>
                    <div className="text-black text-lg font-semibold">{feature.value}</div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="bg-white overflow-hidden sm:rounded-lg">
            <div className="h-[473px] md:h-[587px] overflow-hidden relative rounded-3xl">

                <img className="w-full h-full object-cover" src={product.imageUrl} alt={product.name} />
            </div>
            <div className="flex flex-col md:flex-row py-8 px-6">

                <div className="md:w-1/2 flex flex-col justify-between mb-20 mt-10">
                    <div>
                        <h1 className="text-5xl font-semibold">{product.name}</h1>
                        <p className="text-2xl font-semibold mt-2">{product.model}</p>
                    </div>
                    <div>
                        <p className="text-4xl font-semibold my-4">{product.price}</p>
                        <ApplicationButton formTitle="Оставить заявку на трактор">
                            Оставить заявку
                        </ApplicationButton>
                    </div>
                </div>

                <div className="md:w-1/2 mt-6 md:mt-10">
                    {renderFeatureList(product.main_features, 2)}
                </div>
            </div>
            <div className="w-full mt-20 mb-20 px-6 ">
                <h2 className="text-3xl font-medium mb-8 ">Остальные характеристики</h2>
                {renderFeatureList(product.other_features, 4)}
            </div>
        </div>
    );
}

export default ProductPage;
