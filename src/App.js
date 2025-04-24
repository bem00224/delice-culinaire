import { Route, Routes } from 'react-router-dom';
//import './App.css';
import Home from './components/pages/Home';
import Category from './components/pages/sections/Category';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CategoryDetails from './components/pages/sectionsDetails/CategoryDetails';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/category/:slug' element={<CategoryDetails/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
