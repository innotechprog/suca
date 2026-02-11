import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Disclaimer from "./pages/Disclaimer";
import Contact from "./pages/Contact";
import Platform from "./pages/Platform";
import InvestmentFocusPage from "./pages/InvestmentFocusPage";
import PrivateEquity from "./pages/PrivateEquity";
import InfrastructureRealAssets from "./pages/InfrastructureRealAssets";
import StructuredCapital from "./pages/StructuredCapital";
import SpecialSituations from "./pages/SpecialSituations";
import PublicPrivatePartnerships from "./pages/PublicPrivatePartnerships";
import Approach from "./pages/Approach";
import Leadership from "./pages/Leadership";
import SucaGroupPage from "./pages/SucaGroupPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/investment-focus" element={<InvestmentFocusPage />} />
          <Route path="/investment-focus/private-equity" element={<PrivateEquity />} />
          <Route path="/investment-focus/infrastructure-real-assets" element={<InfrastructureRealAssets />} />
          <Route path="/investment-focus/structured-capital" element={<StructuredCapital />} />
          <Route path="/investment-focus/special-situations" element={<SpecialSituations />} />
          <Route path="/investment-focus/public-private-partnerships" element={<PublicPrivatePartnerships />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/suca-group" element={<SucaGroupPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
