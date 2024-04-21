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
      <div className="flex mt-8">
        <Button styleClasses="mr-4 py-2.5 px-8 bg-primary text-lg text-white font-medium rounded-full">
          Купить
        </Button>
        <Button styleClasses="flex items-center rounded-full py-2.5 px-4 md:px-8 text-dark-100 font-medium border border-dark-100">
          <span className="mr-2">Узнать подробнее</span>
          <img className="w-2.5 h-4" src="images/Arrow.svg" alt="arrow" />
        </Button>
      </div>
    </div>
  );
}

export default HeroInfoBlock;
