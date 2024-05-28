function ProductsGrid({ children }) {
  return (
    <div className="grid gap-10 mt-10 grid-co-ls-1 md:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
}

export default ProductsGrid;
