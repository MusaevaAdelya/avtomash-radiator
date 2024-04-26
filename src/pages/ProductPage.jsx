import {useParams, useNavigate} from "react-router-dom";
import Carousel from "../components/Carousel";
import ProductInfo from "../components/ProductInfo";
import ProductCard from "../components/ProductCard";
import ProductsGrid from "../components/ProductsGrid";
import {useEffect, useState} from "react";
import {getProduct, getRandomProducts} from "../services/productService";
import {BASE_URL} from "../config";

function ProductPage() {
    const {id} = useParams();
    const [productData, setProductData] = useState(null);
    const [otherProducts, setOtherProducts] = useState([]);
    // const [error, setError] = useState(null);

    const images = [
        "/images/tractor-2.jpg",
        "/images/tractor-3.jpg",
        "/images/tractor-4.jpg",
        "/images/tractor-main-1.jpg",
    ];
    // const productData = {
    //   id: "1",
    //   name: "Трактор UX92а",
    //   model: "SPG405M",
    //   price: "4 500 000",
    //   // allModels: ["SPG405M", "SPG405X", "SPG405U"],
    //   allModels: [
    //     { id: "1", name: "Трактор UX92а", model: "SPG405M" },
    //     { id: "2", name: "Трактор UX92а", model: "SPG405X" },
    //     { id: "3", name: "Трактор UX92а", model: "SPG405U" },
    //   ],
    //   mainCharacteristics: [
    //     { name: "Семейство продуктов", value: "Тяжелая техника" },
    //     { name: "Тип бензина", value: "Дизель" },
    //     { name: "Мощность", value: "562 Л.C" },
    //     { name: "Высота рабочего проема", value: "309 мм" },
    //     { name: "Размеры корзин", value: "400x400 мм" },
    //     { name: "Максимальная мощность при лучших условиях", value: "700 л.c" },
    //     { name: "Эко тип", value: "Euro 5" },
    //     { name: "Размеры (ВxШxГ)", value: "440x530x695 СМ" },
    //   ],
    //   otherCharacteristics: [
    //     { name: "Семейство продуктов", value: "Тяжелая техника" },
    //     { name: "Тип бензина", value: "Дизель" },
    //     { name: "Мощность", value: "562 Л.C" },
    //     { name: "Высота рабочего проема", value: "309 мм" },
    //     { name: "Размеры корзин", value: "400x400 мм" },
    //     { name: "Максимальная мощность при лучших условиях", value: "700 л.c" },
    //     { name: "Эко тип", value: "Euro 5" },
    //     { name: "Размеры (ВxШxГ)", value: "440x530x695 СМ" },
    //     { name: "Семейство продуктов", value: "Тяжелая техника" },
    //     { name: "Тип бензина", value: "Дизель" },
    //     { name: "Мощность", value: "562 Л.C" },
    //     { name: "Высота рабочего проема", value: "309 мм" },
    //     { name: "Размеры корзин", value: "400x400 мм" },
    //     { name: "Максимальная мощность при лучших условиях", value: "700 л.c" },
    //     { name: "Эко тип", value: "Euro 5" },
    //     { name: "Размеры (ВxШxГ)", value: "440x530x695 СМ" },
    //   ],
    // };
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProduct(id);
                console.log(response);
                setProductData(response);
                console.log(response.images.map(img => img.image.replace("/media", `${BASE_URL}/media`)));
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    console.log(error)

                }
            }
        };

        fetchProduct();
    }, [id]);

    useEffect(() => {
        const fetchOtherProducts = async () => {
            try {
                const response = await getRandomProducts();
                console.log(response);
                setOtherProducts(response);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    console.log(error)

                }
            }
        };


        fetchOtherProducts();
    }, []);

    return (
        <div>
            {productData && (
                <>
                    <Carousel images={productData.images.map(img => img.image.replace("/media", `${BASE_URL}/media`))}/>
                    <ProductInfo data={productData}/>
                    <div className="mt-5 mb-12">
                        <h3 className="text-2xl font-semibold md:text-4xl">
                            Остальные варинаты
                        </h3>
                        <ProductsGrid>
                            {otherProducts.length > 0 ?? otherProducts.map((model, index) => (
                                <ProductCard
                                    key={index}
                                    id={model.id}
                                    // image={`/images/tractor-${index + 1}.jpg`}
                                    name={model.name}
                                    price={model.price}
                                />
                            ))}
                        </ProductsGrid>
                    </div>
                </>
            )}
            {/*<div className="mt-5 mb-12">*/}
            {/*  <h3 className="text-2xl font-semibold md:text-4xl">*/}
            {/*    Остальные варинаты*/}
            {/*  </h3>*/}
            {/*  <ProductsGrid>*/}
            {/*    <ProductCard*/}
            {/*      id={1}*/}
            {/*      image="/images/tractor-2.jpg"*/}
            {/*      name="Трактор UX1"*/}
            {/*      price="12 000 000"*/}
            {/*      year={2024}*/}
            {/*      power={900}*/}
            {/*      country="Испания"*/}
            {/*    />*/}
            {/*    <ProductCard*/}
            {/*      id={2}*/}
            {/*      image="/images/tractor-3.jpg"*/}
            {/*      name="Трактор HWW9"*/}
            {/*      price="12 000 000"*/}
            {/*      year={2024}*/}
            {/*      power={900}*/}
            {/*      country="Испания"*/}
            {/*    />*/}
            {/*    <ProductCard*/}
            {/*      id={3}*/}
            {/*      image="/images/tractor-4.jpg"*/}
            {/*      name="Трактор XCMG 1"*/}
            {/*      price="12 000 000"*/}
            {/*      year={2024}*/}
            {/*      power={900}*/}
            {/*      country="Испания"*/}
            {/*    />*/}
            {/*    <ProductCard*/}
            {/*      id={4}*/}
            {/*      image="/images/tractor-main-1.jpg"*/}
            {/*      name="Трактор UX92"*/}
            {/*      price="12 000 000"*/}
            {/*      year={2024}*/}
            {/*      power={900}*/}
            {/*      country="Испания"*/}
            {/*    />*/}
            {/*  </ProductsGrid>*/}
            {/*</div>*/}
        </div>
    );
}

export default ProductPage;
