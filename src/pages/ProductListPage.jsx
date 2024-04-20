import React, { useState } from 'react';
//import Navbar from '../components/Navbar';

function ProductList() {
    const [activeButton, setActiveButton] = useState('Трактора');
    const data = [
        {
            id: 1 ,
            img: "",
            name:"",
            date:"",
            country:"",
            hp:"",
        },
        {
            id: 2 ,
            img: "",
            name:"",
            date:"",
            country:"",
            hp:"",
        },
        {
            id: 3 ,
            img: "",
            name:"",
            date:"",
            country:"",
            hp:"",
        },
        {
            id: 4 ,
            img: "",
            name:"",
            date:"",
            country:"",
            hp:"",
        },
        {
            id: 5 ,
            img: "",
            name:"",
            date:"",
            country:"",
            hp:"",
        },
]
    return (
        <div className="product-list bg-white p-4">
            <div className="product-list-header text-center p-5">
                <h1 className="text-6xl font-semibold text-gray-800">Продукция</h1>
                <p className="text-gray-600 font-semibold mt-4">
                    Компания с многолетним опытом поставок специальной <br /> и сельскохозяйственной техники.
                    Самый широкий ассортимент <br /> представленный на рынке Кыргызстана известных международных брендов.
                </p>
                <div className="product-list-buttons flex flex-col md:flex-row justify-center gap-2 mt-5">
                    <button
                        type="button"
                        className={`px-6 py-3 ${activeButton === 'Трактора' ? 'bg-red-600' : 'bg-gray-300'} text-white font-semibold cursor-pointer transition-colors duration-300 hover:bg-red-700 rounded-3xl`}
                        onClick={() => setActiveButton('Трактора')}
                    >
                        Трактора
                    </button>
                    <button
                        type="button"
                        className={`px-6 py-3 ${activeButton === 'Комбайны' ? 'bg-red-600' : 'bg-gray-300'} text-white font-semibold cursor-pointer transition-colors duration-300 hover:bg-red-700 rounded-3xl`}
                        onClick={() => setActiveButton('Комбайны')}
                    >
                        Комбайны
                    </button>
                    <button
                        type="button"
                        className={`px-6 py-3 ${activeButton === 'Зерноуборочные машины' ? 'bg-red-600' : 'bg-gray-300'} text-white font-semibold cursor-pointer transition-colors duration-300 hover:bg-red-700 rounded-3xl`}
                        onClick={() => setActiveButton('Зерноуборочные машины')}
                    >
                        Зерноуборочные машины
                    </button>
                </div>
            </div>
            {/* Это каталог */}
            <Card />
        </div>
    );
}

export default ProductList;
