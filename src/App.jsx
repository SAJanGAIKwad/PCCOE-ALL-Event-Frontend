import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Event from './pages/Event';
import { BrowserRouter as BroweRouter, Routes, Route } from "react-router-dom"
import GTop from './components/Gtop';
import LoginG from './pages/Login/LoginG';
import Ulogin from './pages/User-Login/Login';
import Uregister from '../src/pages/User-Login/Register';
import Alogin from './pages/Admin-Login/Login';
import Aregister from './pages/Admin-Login/Register';
import { UserContextProvider } from './UserContext';
import ProfilePage from './pages/ProfilePage';
// import axios from 'axios';
import "./App.css"
// axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <BroweRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/Event' element={<Event />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/login' element={<LoginG />}></Route>
          <Route exact path='/user-login' element={<Ulogin />}></Route>
          <Route exact path='/admin-login' element={<Alogin />}></Route>
          <Route exact path='/user-register' element={<Uregister />}></Route>
          <Route exact path='/Admin-register' element={<Aregister />}></Route>
          <Route path="/account" element={<ProfilePage/>} />
        </Routes>
        <GTop />
      </BroweRouter>
    </UserContextProvider>
  );
}

export default App;
