import bgImage from "./assets/bgImage.jpg";
import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-fixed min-h-screen text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/80" />

      {/* Content overlay (make sure it's above background) */}
      <div className="relative z-10 flex flex-col items-center">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
      </div>
    </div>
  )
}


export default App