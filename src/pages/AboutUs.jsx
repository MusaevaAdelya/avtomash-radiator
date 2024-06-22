import React from "react";
import ParagraphBlock from "../components/ParagraphBlock";
import { TruckIcon, CheckBadgeIcon, GlobeAsiaAustraliaIcon } from "@heroicons/react/16/solid";
import AboutUsItem from "../components/AboutUsItem";


function AboutUs() {
  return (
    <section className="mt-6 md:mt-20 ">
      <div className="h-[473px] md:h-[650px] overflow-hidden relative rounded-3xl ">
        <img
          className="absolute object-cover w-full h-full transform -translate-x-1/2 -translate-y-1/2 -z-10 top top-1/2 left-1/2"
          src="/images/company-pic-3.jpg"
          alt="tractor"
        />
        <div className="flex flex-col justify-end w-full h-full p-10 text-white bg-darken">
          <h3 className="text-4xl font-semibold">JSK БАШАТ</h3>
        </div>
      </div>

      <div className="flex flex-col items-stretch justify-between my-24 gap-9 lg:flex-row">
        <div className="space-y-8">
          <ParagraphBlock
            title="Кто мы"
            text="Мы — компания JSKBASHAT, специализирующаяся на продаже и обслуживании сельскохозяйственной техники. Наша компания была основана в 2007 году и с тех пор успешно работает на рынке Кыргызстана, предлагая своим клиентам высококачественную технику и профессиональные услуги."
          />
          <ParagraphBlock
            title="Наша история"
            text="Компания была основана Жанышбаевым Сабыром Кубанычбековичем, который с первых дней деятельности сделал ставку на качество, надежность и инновации. Благодаря его видению и настойчивости, JSKBASHAT быстро завоевала доверие и уважение среди фермеров и сельскохозяйственных предприятий Кыргызстана."
          />
          <ParagraphBlock
            title="Наше руководство"
            text={`Основатель: Жанышбаев Сабыр Кубанычбекович
                Директор: Кубанычбеков Азирет Сабырович\n
                Под руководством Кубанычбекова Азирета Сабыровича компания продолжает свое динамичное развитие, расширяя ассортимент продукции и улучшая качество предоставляемых услуг.`}
          />
          <ParagraphBlock
            title="Наши услуги"
            text="ЖСК Башат предоставляет широкий ассортимент сельскохозяйственной техники в лизинг и даем гарантию на продукцию на один год. Наши товары поступают из Китая, Турции и Европы, что гарантирует разнообразие и высокое качество предлагаемых решений."
          />
        </div>

        <div className="min-h-[330px] grow flex overflow-hidden relative rounded-3xl w-full ">
          <img
            className="absolute object-cover w-full h-full transform -translate-x-1/2 -translate-y-1/2 -z-10 top top-1/2 left-1/2"
            src="/images/company-pic-2.jpg"
            alt="tractor"
          />
          <div className="flex flex-col justify-end w-full p-10 text-white bg-darken"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 my-16 gap-x-4 gap-y-10 md:grid-cols-3">
        <AboutUsItem
          title="Огромный ассортимент сельхозтехники"
          subtitle="Предоставляем широкий ассортимент сельскохозяйственной техники в
            лизинг"
        >
          <TruckIcon className="w-[100px] text-primary" />
        </AboutUsItem>
        <AboutUsItem
          title="Надежность и качество на 1 год"
          subtitle="Получите год гарантии на все наши продукты и будьте уверены в их надежности"
        >
          <CheckBadgeIcon className="w-[100px] text-primary" />
        </AboutUsItem>
        <AboutUsItem
          title="Широкий выбор от лучших поставщиков мира"
          subtitle="Сотрудничаем с более чем 10 поставщиками из разных стран для обеспечения лучшего ассортимента"
        >
          <GlobeAsiaAustraliaIcon className="w-[100px] text-primary" />
        </AboutUsItem>

        
      </div>
      <iframe
        title="JSK BASHAT address"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A239622db793e0e42c21644bf60973b6dc4176e3af64e3d82720d05fc70526117&amp;source=constructor"
        width="100%"
        height="500"
        frameborder="0"
        className="mb-20"
      ></iframe>
    </section>
  );
}

export default AboutUs;
