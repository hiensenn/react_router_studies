import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/About"
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info';

function App() {
  return (
    <div className="App">
      <h1>olá mundo</h1>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            {/* 4 - rota dinamica */}
            <Route path="/products/:id" element={<Product />}/>
            {/* 6 - nested route */}
            <Route path="/products/:id/info" element={<Info />}/>

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
