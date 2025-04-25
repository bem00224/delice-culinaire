import { Route, Routes } from 'react-router-dom';
//import './App.css';
import Home from './components/pages/Home';
import Category from './components/pages/sections/Category';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CategoryDetails from './components/pages/sectionsDetails/CategoryDetails';
import CategoryDetailsRecipe from './components/pages/sectionsDetails/CategoryDetailsRecipe';
import MesRecettes from './components/pages/MesRecettes';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './components/reusable-ui/ScrollToTop';
import CurrentNews from './components/pages/sections/CurrentNews';
import CurrentNewsDetails from './components/pages/sectionsDetails/CurrentNewsDetails';

function App() {
  return (
    <>
      <Navbar/>
      <ToastContainer position='top-right' autoClose={3000} />
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/category/:slug' element={<CategoryDetails/>} />
        <Route path='/recipe-detail/:slug' element={<CategoryDetailsRecipe/>} />
        <Route path="/mes-recettes" element={<MesRecettes />} />
        <Route path="/current-news" element={<CurrentNews />} />
        <Route path="/current-news/:slug" element={<CurrentNewsDetails />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
