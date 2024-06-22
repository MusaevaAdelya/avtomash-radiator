import { Link } from "react-router-dom";
import Button from "./Button";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

function TechnicsItem({ image, title,description, id }) {
  return (
    <div className="relative flex min-h-[248px] md:min-h-[495px] overflow-hidden rounded-3xl">
      <img
        src={image}
        alt="tractor"
        className="absolute object-cover w-full h-full transform -translate-x-1/2 -translate-y-1/2 -z-10 top-1/2 left-1/2"
      />
      <div className="flex flex-col justify-between flex-1 p-10 text-white bg-darken">
        <Link to={`/products/`} className="flex items-center">
          <span className="mr-2 text-lg font-semibold md:text-4xl">{title}</span>{" "}
          <img
            className="w-auto h-6"
            src="/images/Arrow-white.svg"
            alt="arrow"
          />
        </Link>
        <div className="flex justify-between">
          <p className="max-w-[293px] text-xl">{description}</p>
          <Button styleClasses="mr-4  px-8 border border-white text-xl text-white font-medium rounded-full md:flex items-center hidden hover:bg-primary hover:border-primary transition ease-in-out duration-200 self-center py-2.5" isLink={true} to={`/products/${id}`}>
            <span className="mr-2">Узнать подробнее</span>
            <ChevronRightIcon className="w-auto h-8" aria-hidden="true"/>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TechnicsItem;
