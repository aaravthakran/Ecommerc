import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Brands from './pages/Brands'
import LoginSignup from './pages/LoginSignup';
import Showroom from './pages/Showroom'
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from './Components/Footer/Footer';
import smart_banner from './Components/Assests/jkjk.jpg'
import analo_banner from './Components/Assests/hjhj.jpg'
import ShopCategory from './pages/ShopCategory';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<Brands/>}/>
        <Route path='/smart watch' element={<ShopCategory banner={analo_banner} category="smart"/>}/>
        <Route path='/analog' element={<ShopCategory  banner={smart_banner} category="analog"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/showroom' element={<Showroom/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>     
    </div>
  );
}

export default App;
