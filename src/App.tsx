import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Livre from './pages/Livre';
import Auteur from './pages/Auteur';
import Avis from './pages/Avis';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livre" element={<Livre />} />
          <Route path="/auteur" element={<Auteur />} />
          <Route path="/avis" element={<Avis />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;