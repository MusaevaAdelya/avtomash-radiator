import ApplicationButton from "./ApplicationButton";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function LeavaApplication() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-16 lg:justify-between lg:gap-14 mb-28 lg:flex-row">
      <div className="flex flex-col items-center text-center lg:flex-row lg:text-left">
        <img src="/images/person-icon.svg" alt="person icon" />
        <p className="ml-5 text-4xl font-semibold text-dark-400 ">
          Оставьте номер, мы перезвоним быстро
        </p>
      </div>
      <p className="text-lg font-medium text-center lg:text-left">
        Самый широкий ассортимент представленный на рынке Кыргызстана известных
        международных брендов.
      </p>
      <ApplicationButton formTitle="Отличный выбор! Оставьте номер для связи">
        <span className="whitespace-nowrap">Оставить заявку</span>
        <ChevronRightIcon className="w-6 h-6" aria-hidden="true" />
      </ApplicationButton>
    </div>
  );
}

export default LeavaApplication;
