import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ReserveTable } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reserve' element={<ReserveTable />} />
      </Routes>
    </Router>
  );
}

export default App;
