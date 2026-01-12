import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CandidatesGrid from './pages/CandidatesGrid';
import CandidatePortfolio from './pages/CandidatePortfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidates" element={<CandidatesGrid />} />
        <Route path="/candidate/:id" element={<CandidatePortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
