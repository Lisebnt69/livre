import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Livre from './pages/Livre';
import Avis from './pages/Avis';
import ScrollToTop from "./components/ScrollToTop";
import AnalyticsPageView from "./components/AnalyticsPageView";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnalyticsPageView />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livre" element={<Livre />} />
          <Route path="/avis" element={<Avis />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;