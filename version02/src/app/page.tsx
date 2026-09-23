
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { ContactSection } from './components/ContactSection';
import {InterestSection} from "./components/Interest"
import {About} from './components/About'
import {Tools} from './components/Tools'
import {Projects} from './components/Project'
import { Experience } from './components/Experience';

export default function App() {

  return (
    <div>
      <Navbar />
      <main className="flex-1">
        <Hero></Hero>
        <About/>
        <InterestSection/>
        
        <Tools/>
        <Projects/>
        <Experience/>
        <ContactSection/>
      </main>

      <Footer />
    </div>
  );
}
