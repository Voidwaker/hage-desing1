import react from 'react';
import './testimonials.css';

const testimonials = [
  {
    name: 'Ola Nordmann',
    feedback: 'Fantastisk service! Hagen vår har aldri sett bedre ut.',
  },
  {
    name: 'Kari Nordmann',
    feedback: 'Profesjonelt arbeid fra start til slutt. Anbefales!',
  },
  {
    name: 'Per Hansen',
    feedback: 'Utrolig fornøyd med designet og oppfølgingen. Takk!',
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>Kundereferanser</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="feedback">"{testimonial.feedback}"</p>
            <h4 className="customer-name">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

