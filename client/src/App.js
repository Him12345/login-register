import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ErrorPage from './Components/ErrorPage';


function App() {
  return (

    <>    
    
    <Navbar/>

    <Routes>


<Route exact path='/' element={<Home/>}/>
<Route exact path='/about' element={<About/>}/>
<Route exact path='/contact' element={<Contact/>}/>
<Route exact path='/login' element={<Login/>}/>
<Route exact path='/Signup' element={<Signup/>}/>
<Route exact path='*' element={<ErrorPage/>}/>







</Routes>
    </>
 
  
  );
}

export default App;
