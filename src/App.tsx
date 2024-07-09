import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/FakeAuthContext';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Category from './components/Category';
import ItemInfo from './pages/ItemInfo';
import New from './pages/New';
import Bestsellers from './pages/Bestsellers';
import Sales from './pages/Sales';
import Popular from './pages/Popular';
import NotFound from './pages/NotFound';
import Special from './components/Special';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="container">
          <Special />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/kategorie/" element={<Categories />}>
              <Route path="wszystkie" element={<Category />}></Route>
              <Route path="sukienki" element={<Category />}></Route>
              <Route path="marynarki" element={<Category />}></Route>
              <Route path="koszule" element={<Category />}></Route>
              <Route path="bluzki" element={<Category />}></Route>
              <Route path="t-shirty" element={<Category />}></Route>
              <Route path="topy" element={<Category />}></Route>
              <Route path="szorty" element={<Category />}></Route>
              <Route path="spodnie" element={<Category />}></Route>
              <Route path="jeansy" element={<Category />}></Route>
              <Route path="spodnice" element={<Category />}></Route>
              <Route path="kurtki" element={<Category />}></Route>
              <Route path="plaszcze" element={<Category />}></Route>
              <Route path="swetry" element={<Category />}></Route>
              <Route path="bluzy" element={<Category />}></Route>
              <Route path="pizamy" element={<Category />}></Route>
              <Route path="biustonosze" element={<Category />}></Route>
            </Route>
            <Route path="/:category/:name" element={<ItemInfo />}></Route>
            <Route path="/nowosci" element={<New />}></Route>
            <Route path="/bestsellery" element={<Bestsellers />}></Route>
            <Route path="/okazje" element={<Sales />}></Route>
            <Route path="/popularne" element={<Popular />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
