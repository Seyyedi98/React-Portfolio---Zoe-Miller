import "./App.css";
import Blog from "./components/blog/Blog";
import Contact from "./components/contanct/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/pricing/Pricing";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <main className="main">
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
