import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-cream relative">
          <Navigation />
          <main className="pt-16 relative">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />

              {/* Works Pages */}
              <Route path="/works/sga-long-document" element={<SGA />} />
            </Routes>
            <div className="pointer-events-none absolute bg-[url('/images/grid.png')] bg-repeat bg-center mix-blend-multiply inset-0 opacity-25" />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
