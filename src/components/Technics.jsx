import TechnicsItem from "./TechnicsItem"

function Technics() {
    return (
        <div>
            <div className="font-medium text-center max-w-[643px] mx-auto mt-20 mb-10">
                <h2 className="mb-2 text-5xl text-dark-400">Техника</h2>
                <p className="text-lg text-dark-200">Самый широкий ассортимент
представленный на рынке Кыргызстана известных международных брендов.</p>
            </div>
            <div className="space-y-10">
                <TechnicsItem image="/images/tractor-2.jpg" description="Великобрита́ния (русское название происходит от англ. Great Britain), или Соединённое" id="1"/>
                <TechnicsItem image="/images/tractor-3.jpg" description="Великобрита́ния (русское название происходит от англ. Great Britain), или Соединённое"  id="2"/>
                <TechnicsItem image="/images/tractor-4.jpg" description="Великобрита́ния (русское название происходит от англ. Great Britain), или Соединённое"  id="3"/>
            </div>
        </div>
    )
}

export default Technics
