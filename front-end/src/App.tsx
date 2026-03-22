import Home from "./pages/Home";
import About from "./pages/AboutMe";
import Projects from "./pages/Proyects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Resume />
    </>
  );
}

export default App;