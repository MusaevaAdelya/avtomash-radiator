function ProductsGrid({ children }) {
  return (
    <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
}

export default ProductsGrid;
