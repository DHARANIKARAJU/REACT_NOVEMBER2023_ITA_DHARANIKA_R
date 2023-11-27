import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
 import Login from "./components/Login";
 import Register from "./components/Axios";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import PasswordResetPage from "./components/Forgotpw";
import List1 from "./components/List1";
import List2 from "./components/List2";
import List3 from "./components/List3";
function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/product" element={<Products/>}/>
            <Route path="/pswrd" element={<PasswordResetPage/>}/>
            <Route path="/li1" element={<List1/>}/>
            <Route path="/li2" element={<List2/>}/>
            <Route path="/li3" element={<List3/>}/>
            
        </Routes>
      </Router>
    </>
  );
}
 
export default App;