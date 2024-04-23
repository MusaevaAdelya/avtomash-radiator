import { Link, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="relative h-[664px] overflow-hidden rounded-3xl">
      <img
        className="absolute object-cover w-full h-full transform -translate-x-1/2 -translate-y-1/2 -z-10 top top-1/2 left-1/2"
        src="/images/tractor-2.jpg"
        alt="tractor"
      />
      <div className="flex flex-col items-center justify-center w-full h-full p-10 text-center text-white bg-black/40">
        <h3 className="mb-2 text-5xl font-semibold md:text-6xl">Страница не найдена</h3>
        <p className="text-lg font-medium max-w-[398px] mb-5">
          Извините, но страница, которую вы ищете, не существует. Пожалуйста,
          проверьте адрес или вернитесь на главную страницу.
        </p>
        <button className="flex items-center px-8 py-3 text-xl border border-white rounded-full hover:bg-primary hover:border-primary" onClick={() => navigate(-1)}>
        <ChevronLeftIcon className="w-6 h-6" aria-hidden="true" />
          Вернуться
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
