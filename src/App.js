import './App.css';
import About from './Component/About/About';
import Hero from './Component/Hero/Hero';
import Project from './Component/Project/Project';
import Skill from './Component/Skill/Skill';
import Navbar from './Component/Topbar/Navbar';
import Contact from "./Component/Contact/Contact"
import Footer from './Component/Footer/Footer';

function App() {
  return <>
  <Navbar/>
  <Hero/>
  <About/>
  <Skill/>
  <Project/>
  <Contact/>
  <Footer/>
  </>
}

export default App;
