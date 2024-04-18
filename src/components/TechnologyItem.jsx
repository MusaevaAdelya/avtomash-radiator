function TechnologyItem({ image, title, subtitle }) {
  return (
    <div className="max-w-[230px]">
      <img src={image} alt="technology icon" />
      <h4 className="text-lg font-semibold text-dark-400">{title}</h4>
      <p className="font-medium text-dark-200">{subtitle}</p>
    </div>
  );
}

export default TechnologyItem;
