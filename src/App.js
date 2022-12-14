import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import ContactUs from './components/ContactUs';
import Artist from './components/Artist';
import { useState, useEffect } from 'react'
import Appointments from './components/Appointments';

function App() {

  const [client, setClient] = useState(null)
  const [active, setActive] = useState(null)

  useEffect(() => {
    fetch("https://inkmasters-production.up.railway.app/me").then((response) => {
      if (response.ok) {
        response.json().then((client) => setClient(client));
      }
    });
  }, []);
  console.log(active)

  return (
    <Router>
      <Routes>
        <Route path='/logout' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<ContactUs />} />
        <Route path='/login' element={<Login setClient={setClient}/>} />
        <Route path='/signup' element={<SignUp setClient={setClient}/>} />
        <Route path='/' element={<Home client={client} setClient={setClient} setActive={setActive}/>} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/appointment/:id" element={<Appointments active={active}/>} />
        <Route path='/appointments' element={<Appointments />} />
      </Routes>
    </Router>

  )
}

export default App;
