import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    };

    return (
        <section>
            <h2 className='contact-form-h2'>Kontakt Meg</h2>
            <form className="card contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Navn</label>
                <input
                    className="input-field"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    className="input-field"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="message">Melding</label>
                <textarea
                    className="input-field textarea" 
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="btn submit-btn" type="submit">Send</button>
            </form>
        </section>
    );
};
    

export default Contact;
