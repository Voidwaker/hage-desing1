import react from 'react';
import './contact.css';
import  {useState} from 'react';

const Contact = ()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name, email, message);
    };

    return (
        <section>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <Input

                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="message">Message</label>
                <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;