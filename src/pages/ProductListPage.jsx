import React, { useState } from 'react';
//import Navbar from '../components/Navbar';

function ProductList() {
    const [activeButton, setActiveButton] = useState('Трактора');
    const data = [
        {
            id: 1 ,
            img: "https://s3-alpha-sig.figma.com/img/e3bf/cc01/cc7aa37c40f4933f678ad08cf667b007?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=grEM04FBloeruAtNexcDHWBHfSCOxBpj~Uxcv-an5kg3aIeRqR63-vYcSfKHiOhWUD-KfEfZN9ktPFjr81gwYmengRCoKNi-m9NO-uFkXT99q1ykWmJHYsVbpF4fZ5ZHXvygFPpgDIyuWVU-kFW98NSXGXoSvGsrAd85NQa20WGrEWUc~HYYJSHvZILsKtE5e3cpqLFGnPzYnDW1rw~3ICeTNzAEAXt1XCz7X9OsYyHPyC-i5uTvKrG0~EWdYVAknjOf~xSh-nvQJvsEvwYDIQEGZNnOFU5s-5OQ6XAFXyJ6vMq7OA1zRRZki7oQl4M5IfYz39GQa0PL-Tf0A0o0hw__",
            name:"Трактор UX1",
            date:"2024",
            country:"Белорусь",
            hp:"1000",
        },
        {
            id: 2 ,
            img: "https://s3-alpha-sig.figma.com/img/d1b8/8edc/c7f164fd73a0e6d4f183ec0115ed06cc?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dcLmK~jqhFFF59tFjZpN0qizMFcKiWHCVHG0g9UqHTGz71rCF6n2Pmkhj846-U9BdGrQN9puf98nRaKUTXqfBABDVd1ls77h76rrXXNk6Ke7C1LbgZbF8xs6zlFCTHl8wO7TugbCyKjzK2qDseXSOiY4E8FJBDANcyjDwhIhMW2SgNY2y-OC2liA9LpwQuNdxpmF4BSvYZ~mOOXfbjk9XRe6k01-SH2chKVU5M3vLSYhWqn1eKY9I5mFq2HEyHvzFV1e6ayq7HGVlIgYXRgcWM~Xt8MJmrKtTjVK~2Wjgk2wLW-W48tRJYLFSLZ3oNI6nQ3XzTEzu8eqOOluShKQmw__",
            name:"Трактор HWW9",
            date:"2021",
            country:"Россия",
            hp:"900",
        },
        {
            id: 3 ,
            img: "https://s3-alpha-sig.figma.com/img/d1b8/8edc/c7f164fd73a0e6d4f183ec0115ed06cc?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dcLmK~jqhFFF59tFjZpN0qizMFcKiWHCVHG0g9UqHTGz71rCF6n2Pmkhj846-U9BdGrQN9puf98nRaKUTXqfBABDVd1ls77h76rrXXNk6Ke7C1LbgZbF8xs6zlFCTHl8wO7TugbCyKjzK2qDseXSOiY4E8FJBDANcyjDwhIhMW2SgNY2y-OC2liA9LpwQuNdxpmF4BSvYZ~mOOXfbjk9XRe6k01-SH2chKVU5M3vLSYhWqn1eKY9I5mFq2HEyHvzFV1e6ayq7HGVlIgYXRgcWM~Xt8MJmrKtTjVK~2Wjgk2wLW-W48tRJYLFSLZ3oNI6nQ3XzTEzu8eqOOluShKQmw__",
            name:"Трактор XCMG 1",
            date:"2023",
            country:"Россия",
            hp:"1000",
        },
        {
            id: 4 ,
            img: "https://s3-alpha-sig.figma.com/img/e3bf/cc01/cc7aa37c40f4933f678ad08cf667b007?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=grEM04FBloeruAtNexcDHWBHfSCOxBpj~Uxcv-an5kg3aIeRqR63-vYcSfKHiOhWUD-KfEfZN9ktPFjr81gwYmengRCoKNi-m9NO-uFkXT99q1ykWmJHYsVbpF4fZ5ZHXvygFPpgDIyuWVU-kFW98NSXGXoSvGsrAd85NQa20WGrEWUc~HYYJSHvZILsKtE5e3cpqLFGnPzYnDW1rw~3ICeTNzAEAXt1XCz7X9OsYyHPyC-i5uTvKrG0~EWdYVAknjOf~xSh-nvQJvsEvwYDIQEGZNnOFU5s-5OQ6XAFXyJ6vMq7OA1zRRZki7oQl4M5IfYz39GQa0PL-Tf0A0o0hw__",
            name:"Трактор XCMG 1",
            date:"2023",
            country:"Россия",
            hp:"900",
        },
        {
            id: 5 ,
            img: "https://s3-alpha-sig.figma.com/img/d1b8/8edc/c7f164fd73a0e6d4f183ec0115ed06cc?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dcLmK~jqhFFF59tFjZpN0qizMFcKiWHCVHG0g9UqHTGz71rCF6n2Pmkhj846-U9BdGrQN9puf98nRaKUTXqfBABDVd1ls77h76rrXXNk6Ke7C1LbgZbF8xs6zlFCTHl8wO7TugbCyKjzK2qDseXSOiY4E8FJBDANcyjDwhIhMW2SgNY2y-OC2liA9LpwQuNdxpmF4BSvYZ~mOOXfbjk9XRe6k01-SH2chKVU5M3vLSYhWqn1eKY9I5mFq2HEyHvzFV1e6ayq7HGVlIgYXRgcWM~Xt8MJmrKtTjVK~2Wjgk2wLW-W48tRJYLFSLZ3oNI6nQ3XzTEzu8eqOOluShKQmw__",
            name:"Трактор UX92",
            date:"2024",
            country:"Белорусь",
            hp:"1000",
        },
        {
            id: 6 ,
            img: "https://s3-alpha-sig.figma.com/img/d1b8/8edc/c7f164fd73a0e6d4f183ec0115ed06cc?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dcLmK~jqhFFF59tFjZpN0qizMFcKiWHCVHG0g9UqHTGz71rCF6n2Pmkhj846-U9BdGrQN9puf98nRaKUTXqfBABDVd1ls77h76rrXXNk6Ke7C1LbgZbF8xs6zlFCTHl8wO7TugbCyKjzK2qDseXSOiY4E8FJBDANcyjDwhIhMW2SgNY2y-OC2liA9LpwQuNdxpmF4BSvYZ~mOOXfbjk9XRe6k01-SH2chKVU5M3vLSYhWqn1eKY9I5mFq2HEyHvzFV1e6ayq7HGVlIgYXRgcWM~Xt8MJmrKtTjVK~2Wjgk2wLW-W48tRJYLFSLZ3oNI6nQ3XzTEzu8eqOOluShKQmw__",
            name:"Трактор UX92",
            date:"2024",
            country:"Белорусь",
            hp:"1000",
        },
        {
            id: 6 ,
            img: "https://s3-alpha-sig.figma.com/img/d1b8/8edc/c7f164fd73a0e6d4f183ec0115ed06cc?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dcLmK~jqhFFF59tFjZpN0qizMFcKiWHCVHG0g9UqHTGz71rCF6n2Pmkhj846-U9BdGrQN9puf98nRaKUTXqfBABDVd1ls77h76rrXXNk6Ke7C1LbgZbF8xs6zlFCTHl8wO7TugbCyKjzK2qDseXSOiY4E8FJBDANcyjDwhIhMW2SgNY2y-OC2liA9LpwQuNdxpmF4BSvYZ~mOOXfbjk9XRe6k01-SH2chKVU5M3vLSYhWqn1eKY9I5mFq2HEyHvzFV1e6ayq7HGVlIgYXRgcWM~Xt8MJmrKtTjVK~2Wjgk2wLW-W48tRJYLFSLZ3oNI6nQ3XzTEzu8eqOOluShKQmw__",
            name:"Трактор UX92",
            date:"2024",
            country:"Белорусь",
            hp:"1000",
        },
        {
            id: 6 ,
            img: "https://s3-alpha-sig.figma.com/img/d1b8/8edc/c7f164fd73a0e6d4f183ec0115ed06cc?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dcLmK~jqhFFF59tFjZpN0qizMFcKiWHCVHG0g9UqHTGz71rCF6n2Pmkhj846-U9BdGrQN9puf98nRaKUTXqfBABDVd1ls77h76rrXXNk6Ke7C1LbgZbF8xs6zlFCTHl8wO7TugbCyKjzK2qDseXSOiY4E8FJBDANcyjDwhIhMW2SgNY2y-OC2liA9LpwQuNdxpmF4BSvYZ~mOOXfbjk9XRe6k01-SH2chKVU5M3vLSYhWqn1eKY9I5mFq2HEyHvzFV1e6ayq7HGVlIgYXRgcWM~Xt8MJmrKtTjVK~2Wjgk2wLW-W48tRJYLFSLZ3oNI6nQ3XzTEzu8eqOOluShKQmw__",
            name:"Трактор UX92",
            date:"2024",
            country:"Белорусь",
            hp:"1000",
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
            <div className="flex flex-wrap -m-4">
                {data.map((tractor) => (
                    <div key={tractor.id} className="p-4 w-full md:w-1/2 lg:w-1/4">
                        <div className="flex flex-col h-full bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
                            <img
                                className="w-full object-cover" // Removed the height restriction to make it more stretched
                                style={{ height: "200px" }} // Added inline style to control the image height
                                src={tractor.img}
                                alt="Трактор"
                            />
                            <div className="p-6 flex-grow">
                                <h2 className="text-lg font-medium text-gray-900 mb-1">{tractor.name}</h2>
                                <div className="leading-relaxed mb-3">
                                    <div className="flex items-center mb-1">
                                        <img src="images/calendar.svg" alt="Год" className="w-4 h-4 mr-2" />
                                        <span className="text-gray-600 text-sm">Год выпуска: {tractor.date}</span>
                                    </div>
                                    <div className="flex items-center mb-1">
                                        <img src="images/angle.svg" alt="Мощность" className="w-4 h-4 mr-2" />
                                        <span className="text-gray-600 text-sm">Мощность: {tractor.hp} л.с.</span>
                                    </div>
                                    <div className="flex items-center mb-1">
                                        <img src="images/other.svg" alt="Страна" className="w-4 h-4 mr-2" />
                                        <span className="text-gray-600 text-sm">Страна: {tractor.country}</span>
                                    </div>
                                </div>
                                <a href="#" className="bg-white text-black border border-red-500 px-6 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                                    Узнать подробнее
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ProductList;
