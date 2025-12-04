import "./global.css";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SGA from "./pages/works/SGA";
import CloudCosmetics from "./pages/works/CloudCosmetics";
import Chromakopia from "./pages/works/Chromakopia";
import LinkedIn from "./pages/works/LinkedIn";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div className="min-h-screen bg-cream relative">
        <Navigation />
        {/* Remove pt-16, let each page handle its own padding */}
        <main className="relative">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />

            {/* Works Pages */}
            <Route path="/works/sga-long-document" element={<SGA />} />
            <Route path="/works/cloud-cosmetics" element={<CloudCosmetics />} />
            <Route path="/works/chromakopia-poster" element={<Chromakopia />} />
            <Route path="/works/linkedin-redesign" element={<LinkedIn />} />
          </Routes>
          <div className="pointer-events-none absolute bg-[url('/images/grid.png')] bg-repeat bg-center mix-blend-multiply inset-0 opacity-25" />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);