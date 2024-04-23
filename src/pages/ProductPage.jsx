import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import ProductInfo from "../components/ProductInfo";

function ProductPage() {
  const { id } = useParams();
  const images = [
    "/images/tractor-2.jpg",
    "/images/tractor-3.jpg",
    "/images/tractor-4.jpg",
    "/images/tractor-main-1.jpg",
  ];
  const productData = {
    id: "1",
    name: "Трактор UX92а",
    model: "SPG405M",
    price: "4 500 000",
    // allModels: ["SPG405M", "SPG405X", "SPG405U"],
    allModels: [
      { id: "1", name: "Трактор UX92а", model: "SPG405M" },
      { id: "2", name: "Трактор UX92а", model: "SPG405X" },
      { id: "3", name: "Трактор UX92а", model: "SPG405U" },
    ],
    mainCharacteristics: [
      { name: "Семейство продуктов", value: "Тяжелая техника" },
      { name: "Тип бензина", value: "Дизель" },
      { name: "Мощность", value: "562 Л.C" },
      { name: "Высота рабочего проема", value: "309 мм" },
      { name: "Размеры корзин", value: "400x400 мм" },
      { name: "Максимальная мощность при лучших условиях", value: "700 л.c" },
      { name: "Эко тип", value: "Euro 5" },
      { name: "Размеры (ВxШxГ)", value: "440x530x695 СМ" },
    ],
    otherCharacteristics: [
      { name: "Семейство продуктов", value: "Тяжелая техника" },
      { name: "Тип бензина", value: "Дизель" },
      { name: "Мощность", value: "562 Л.C" },
      { name: "Высота рабочего проема", value: "309 мм" },
      { name: "Размеры корзин", value: "400x400 мм" },
      { name: "Максимальная мощность при лучших условиях", value: "700 л.c" },
      { name: "Эко тип", value: "Euro 5" },
      { name: "Размеры (ВxШxГ)", value: "440x530x695 СМ" },
      { name: "Семейство продуктов", value: "Тяжелая техника" },
      { name: "Тип бензина", value: "Дизель" },
      { name: "Мощность", value: "562 Л.C" },
      { name: "Высота рабочего проема", value: "309 мм" },
      { name: "Размеры корзин", value: "400x400 мм" },
      { name: "Максимальная мощность при лучших условиях", value: "700 л.c" },
      { name: "Эко тип", value: "Euro 5" },
      { name: "Размеры (ВxШxГ)", value: "440x530x695 СМ" },
    ],
  };

  return (
    <div>
      <Carousel images={images} />
      <ProductInfo data={productData} />
    </div>
  );
}

export default ProductPage;
