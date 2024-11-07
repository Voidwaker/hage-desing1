import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx'; 
import Services from './components/services.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Projects from './components/projects.jsx';
import Testimonials from './components/testimonials.jsx';
import './App.css'; 

function Home() {
  const navigate = useNavigate();
  
  const sections = [
    { title: 'Om meg', description: 'Lær mer om hvem vi er og hva vi gjør.', path: '/about' },
    { title: 'Kontakt', description: 'Kom i kontakt med oss for å diskutere ditt prosjekt.', path: '/contact' },
    { title: 'Tjenester', description: 'Se våre tjenester innen hagedesign.', path: '/services' }
  ];

  return (
    <div className="home">
      <h1>Velkommen til Berits Hage Design</h1>
      <p>Vi hjelper deg med å realisere din drømmehage!</p>
      <div className="card-container">
        {sections.map((section, index) => (
          <div key={index} className="card" onClick={() => navigate(section.path)}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
      <Projects />
      <Testimonials /> {/* Legger til Testimonials-seksjonen */}
    </div>
  );
}

function App() {
  const services = [
    'Hage Planlegging',
    'Hage Design',
    'Hage Tegning',
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services services={services} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


