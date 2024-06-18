import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./layout/AppLayout";
import FailPage from "./pages/FailPage";
import CasesPage from "./pages/CasesPage";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductListPage />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="cases" element={<CasesPage />} />
          <Route path="fail" element={<FailPage/>}/>
          <Route path="about-us" element={<AboutUs/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
