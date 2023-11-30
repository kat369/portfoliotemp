import './App.css';
import About from './Component/About/About';
import Hero from './Component/Hero/Hero';
import Project from './Component/Project/Project';
import Skill from './Component/Skill/Skill';
import Navbar from './Component/Topbar/Navbar';

function App() {
  return <>
  <Navbar/>
  <Hero/>
  <About/>
  <Skill/>
  <Project/>
  </>
}

export default App;
