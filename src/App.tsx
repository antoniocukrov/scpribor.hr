import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ServicesPage } from "./pages/ServicesPage";

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/o-nama" element={<AboutPage />} />
          <Route path="/proizvodi" element={<ProductsPage />} />
          <Route path="/usluge" element={<ServicesPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
