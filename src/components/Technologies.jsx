import TechnologyItem from "./TechnologyItem";

function Technologies() {
  return (
    <div className="flex flex-col items-stretch justify-between mt-24 gap-9 lg:gap-x-24 lg:flex-row">
      <div className="">
        <div className="space-y-2">
          <h2 className="font-semibold text-dark-400 text-2xl md:text-[40px] lg:leading-10">
            Наше преимущество — наши зарубежные партнёры
          </h2>
          {/*<p className="w-full text-base font-medium lg:w-4/5 md:text-lg text-dark-200">*/}
          {/*  Ну кароче речь о том хорошо типо и так далее и все хорошо ну вроде*/}
          {/*  все норм.*/}
          {/*</p>*/}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-14">
          <TechnologyItem image="/images/tech-item-1.svg" title="Özduman"/>
          <TechnologyItem image="/images/tech-item-2.svg" title="FM WORLD"/>
          <TechnologyItem image="/images/tech-item-3.svg" title="Ğokmenler" />
          <TechnologyItem image="/images/tech-item-4.svg" title="Saka"/>
          <TechnologyItem image="/images/tech-item-1.svg" title="Orion Agrees"/>
          <TechnologyItem image="/images/tech-item-2.svg" title="TURAN"/>
          <TechnologyItem image="/images/tech-item-3.svg" title="HAIDAN TARIM" />
          <TechnologyItem image="/images/tech-item-4.svg" title="Агор Крым"/>
          <TechnologyItem image="/images/tech-item-4.svg" title="Кронос"/>
        </div>
      </div>

      <div className="min-h-[330px] grow flex overflow-hidden relative rounded-3xl w-full lg:w-[605px] ">
        <img
          className="absolute object-cover w-full h-full transform -translate-x-1/2 -translate-y-1/2 -z-10 top top-1/2 left-1/2"
          src="/images/tractor-2.jpg"
          alt="tractor"
        />
        <div className="flex flex-col justify-end w-full p-10 text-white bg-darken">
          <h3 className="text-2xl font-semibold">John Deere E14</h3>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
