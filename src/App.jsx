import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx'; 
import Services from './components/services.jsx';
import About from './components/about.jsx';

function App() {
  const services = [
    'Garden Planning',
    'Landscape Design',
    'Planting'
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <p>Welcome to Berit's Garden Design</p>
              <Services services={services} />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

