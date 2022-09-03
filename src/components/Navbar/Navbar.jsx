import "../../assets/styles/Navbar.style.css"
// import "../../firebase/auth"
import { Routes, Route } from 'react-router-dom';


const Navbar = () => (
   <nav className="home-nav">
      <Routes>
      <button className="sign-in"> Sign In</button>
      <button className="sign-up"> Sign Up</button>
      </Routes>
   
   </nav>
)

export default Navbar