import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Story from "./pages/Story";
import Work from "./pages/Work";

function App() {
  return (
    <div className="bg-primaryBg font-sans">
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
