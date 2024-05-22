import { useInView } from "react-intersection-observer";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Story from "./pages/Story";
import Work from "./pages/Work";

function App() {
  const { ref: body, inView: bodyInView } = useInView({triggerOnce: true});

  return (
    <div ref={body} className={`font-sans scroll-smooth ${bodyInView ? 'animate-in fade-in-0 duration-1000' : 'opacity-0'}`}>
      <Navbar />
      <BackToTop />  
      <div className="min-h-screen flex flex-col flex-grow">
        <Story />
        <AboutMe />
        <Work />
        <Skills />
        <Contact />
    </div>
    </div>

  );
}

export default App;
