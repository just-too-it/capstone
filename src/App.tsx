import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ReserveTable } from './pages';
import { PATHS } from './shared/constants/paths';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATHS.home} element={<Home />} />
        <Route path={PATHS.booking} element={<ReserveTable />} />
      </Routes>
    </Router>
  );
}

export default App;
