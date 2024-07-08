import logo from './logo.svg';
import './App.css';
import Navbar from "../src/compontents/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homescreen from './screen/Homescreen';
import Bookingscreen from './screen/Bookingscreen';
import Registerscreen from './screen/Registerscreen';
import Loginscreen from './screen/Loginscreen';
function App() {
  return (

    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Homescreen />} />
          <Route path="/book/:roomid" element={<Bookingscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
