import TechnicsItem from "./TechnicsItem";

function Technics() {
  return (
    <div>
      <div className="font-medium text-center max-w-[643px] mx-auto mt-24 mb-10">
        <h2 className="mb-2 text-5xl text-dark-400">Техника</h2>
        <p className="text-lg text-dark-200">
          Самый широкий ассортимент представленный на рынке Кыргызстана
          известных международных брендов.
        </p>
      </div>
      <div className="space-y-10">
        <TechnicsItem
          image="/images/technics-1.jpg"
          title="Трактора"
          description="Наши трактора обеспечивают надежность и высокую производительность для любых сельскохозяйственных задач."
          id="1"
        />
        <TechnicsItem
          image="/images/technics-2.jpg"
          title="Сеялки"
          description="Современные сеялки для точного посева и высокой урожайности."
          id="2"
        />
        <TechnicsItem
          image="/images/technics-3.jpg"
          title="Агрегаты"
          description="Надежные агрегаты для обработки почвы и повышения производительности."
          id="3"
        />
      </div>
    </div>
  );
}

export default Technics;
