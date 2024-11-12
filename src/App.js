import './App.css';
//1 - config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import Navbar from './components/Navbar';
//pages
import Home from './pages/Home';
import About from "./pages/About"
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>olá mundo</h1>
        <BrowserRouter>
        {/* 2 - links com react router */}
        <Navbar/>
          {/* 9 - search component*/}
          <SearchForm/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            {/* 4 - rota dinamica */}
            <Route path="/products/:id" element={<Product />}/>
            {/* 6 - nested route */}
            <Route path="/products/:id/info" element={<Info />}/>
            {/* 10 - search page */}
            <Route path="/search" element={<Search />}/>
            {/* 7 - Page 404 */}
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
