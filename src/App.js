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
import TopFood from './components/pages/sections/TopFood';
import TopFoodDetails from './components/pages/sectionsDetails/TopFoodDetails';
import Recipes from './components/pages/sections/Recipes';
import RecipesDetails from './components/pages/sectionsDetails/RecipesDetails';
import { SavedRecipesProvider } from './context/SavedRecipesContext';
import ScrollToTopButton from './components/pages/ScrollToTopButton';
import SpecialRecipes from './components/pages/sections/SpecialRecipes';
import SpecialRecipesDetails from './components/pages/sectionsDetails/SpecialRecipesDetails';
import News from './components/pages/sections/News';
import NewsDetails from './components/pages/sectionsDetails/NewsDetails';

function App() {
  return (
    <SavedRecipesProvider>
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
        <Route path='/top-food' element={<TopFood/>} />
        <Route path='/top-food/:slug' element={<TopFoodDetails/>} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/recipes/:slug' element={<RecipesDetails/>} />
        <Route path='/special-recipes' element={<SpecialRecipes/>} />
        <Route path='/special-recipes/:slug' element={<SpecialRecipesDetails/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/news/slug' element={<NewsDetails/>} />
      </Routes>
      <ScrollToTopButton />
      <Footer/>
    </SavedRecipesProvider>
  );
}

export default App;
