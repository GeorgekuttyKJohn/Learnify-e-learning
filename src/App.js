import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route,} from 'react-router-dom';
import Tutor from './Components/Pages/Tutor';
import Courses from './Components/Pages/Courses';
import Cart from './Components/Pages/Cart';
// import Loginsignup from './Components/Pages/Loginsignup';
import Main from './Components/Pages/Main';
import Footer from './Components/Footer/Footer';
import SignupForm from './Components/Pages/SignupForm';
import Product from './Components/Pages/Product';
import Login from './Components/Pages/Login';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Main/>}/>

        <Route path='/tutor' element={<Tutor/>}/>
        <Route path='/courses' element={<Courses/>}/>

        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Product' element={<Product/>}>
        <Route path=":productId" element={<Product />}></Route>
        </Route>
     

        <Route path="/SignupForm" element={<SignupForm/>} />  
        <Route path='/Login' element={<Login/>}/>     
         


      </Routes>
      
       
      <Footer/>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
