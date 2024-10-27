import Home from './sections/Home.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';

const App = () => {
  return (
    <main className="mx-auto relative">
      <Navbar />
      <Home />
      <div className="max-w-7xl mx-auto relative">
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default App;
