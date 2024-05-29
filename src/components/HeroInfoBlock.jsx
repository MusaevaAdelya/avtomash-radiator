import Button from "./Button";

function HeroInfoBlock() {
  return (
    <div className=" max-w-[691px] mx-auto flex flex-col items-center mt-14 mb-16">
      <h1 className="text-[28px] md:text-[56px] font-bold uppercase text-center">АВТОМАШ-РАДИАТОР</h1>
      <p className="max-w-xl mt-2 font-medium text-center">
        Компания с многолетним опытом поставок специальной и
        сельскохозяйственной техники. Самый широкий ассортимент представленный
        на рынке Кыргызстана известных международных брендов.  Собственная
        логистическая сеть  -  обеспечивает бесперебойные поставки напрямую с
        заводов-изготовителей
      </p>
      <div className="flex gap-2 mt-8 md:gap-4">
        <Button isLink={true} to={"/products"} styleClasses=" py-2.5 px-8 bg-primary text-sm md:text-base lg:text-lg text-white font-medium rounded-full flex items-center justify-center">
          Купить
        </Button>
        <Button isLink={true} to={"/products"} styleClasses="flex items-center rounded-full py-2.5 px-4 md:px-8 text-dark-100 font-medium border border-dark-100 justify-center">
          <span className="mr-1 text-sm md:text-base lg:text-lg md:mr-2">Узнать подробнее</span>
          <img className="w-2.5 h-4" src="images/Arrow.svg" alt="arrow" />
        </Button>
      </div>
    </div>
  );
}

export default HeroInfoBlock;
