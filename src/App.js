import { Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './pages/MainPage/MainPage';
import FullDish from './pages/FullDish/FullDish';
import MainLayout from './layouts/MainLayout';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<MainPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="dish/:id" element={<FullDish />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
