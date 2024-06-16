function InfoBlock({ children, image }) {
  return (
    <div className="h-[588px] relative overflow-hidden  rounded-3xl ">
      <img
        src={image}
        alt="tractor"
        className="absolute object-cover w-full h-full transform -translate-x-1/2 -translate-y-1/2 -z-10 top-1/2 left-1/2"
      />
      <div className="flex flex-col justify-end w-full h-full p-6 md:px-10 bg-darken md:py-14">
        {children}
      </div>
    </div>
  );
}

export default InfoBlock;
