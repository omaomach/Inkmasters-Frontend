import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logout' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<ContactUs />} />
      </Routes>
    </Router>

  )
}

export default App;
