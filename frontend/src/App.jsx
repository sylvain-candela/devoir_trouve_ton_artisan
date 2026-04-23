import './App.css'
import './assets/sass/Font.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Catergory';
import { Routes, Route } from 'react-router-dom';
import Artisan from './pages/Artisan';
import Page404 from './pages/Page404';

function App() {
  return (
    <>
      <Header />
      
      <main>
        <Routes>
      
          <Route path="/" element={<Home />} />
          
          <Route path="/categories/:id" element={<Category />} />

          <Route path="/artisan/:id" element={<Artisan />} />

          <Route path="*" element={<Page404 />} />
          
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
