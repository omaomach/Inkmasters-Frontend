import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import ContactUs from './components/ContactUs';
import Artist from './components/Artist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logout' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<ContactUs />} />
        <Route path='/artist' element={<Artist />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>

  )
}

export default App;
