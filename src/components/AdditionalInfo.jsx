import InfoBlock from "./InfoBlock";

function AdditionalInfo() {
  return (
      <InfoBlock image="/images/tractor-main-1.jpg">
        <div className="w-10/12 text-white">
          <h4 className="mb-2 text-2xl font-semibold md:text-4xl ">
            Вы можете взять технику в лизинг
          </h4>
          <p className="mb-2 font-medium">
            Компания с многолетним опытом поставок специальной и
            сельскохозяйственной техники. Самый широкий ассортимент
            представленный на рынке Кыргызстана известных международных брендов.
          </p> 
        </div>
      </InfoBlock>
  );
}

export default AdditionalInfo;
