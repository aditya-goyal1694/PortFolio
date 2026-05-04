'use client'
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CodingProfile from './components/CodingProfile';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <CodingProfile />
      <Contact />
      <Footer />
    </>
  );
}