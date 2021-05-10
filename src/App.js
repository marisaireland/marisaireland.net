import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";

library.add(fas, fab);

function App() {
  return (
    <div>
      <a href="#main-content" className="is-sr-only">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Header />
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
