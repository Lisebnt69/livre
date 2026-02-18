import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Livre from './pages/Livre';
import Avis from './pages/Avis';
import ScrollToTop from "./components/ScrollToTop";
import AnalyticsPageView from "./components/AnalyticsPageView";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";


<Route
  path="/politique-confidentialite"
  element={<PolitiqueConfidentialite />}
/>


function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnalyticsPageView />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livre" element={<Livre />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;