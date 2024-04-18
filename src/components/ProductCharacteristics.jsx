function ProductCharacteristics({icon, text}) {
  return (
    <p className="flex mb-3">
      <img src={icon} alt="calendar" className="mr-2" />
      <span>{text}</span>
    </p>
  );
}

export default ProductCharacteristics;
