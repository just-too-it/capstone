import { Routes, Route } from 'react-router-dom';
import { Confirm, Home, NotFound, ReserveTable } from './pages';
import { PATHS } from './shared/constants/paths';

function App() {
  return (
    <Routes>
      <Route path={PATHS.home} element={<Home />} />
      <Route path={PATHS.booking} element={<ReserveTable />} />
      <Route path={PATHS.confirm} element={<Confirm />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
