import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import CV from "./pages/CV/CV";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/profile/:id" element={<Profile/>}></Route>
        <Route path="/cv" element={<CV/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
