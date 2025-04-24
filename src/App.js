import { Route, Routes } from 'react-router-dom';
//import './App.css';
import Home from './components/pages/Home';
import Category from './components/pages/sections/Category';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CategoryDetails from './components/pages/sectionsDetails/CategoryDetails';
import CategoryDetailsRecipe from './components/pages/sectionsDetails/CategoryDetailsRecipe';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/category/:slug' element={<CategoryDetails/>} />
        <Route path='/recipe-detail/:slug' element={<CategoryDetailsRecipe/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
