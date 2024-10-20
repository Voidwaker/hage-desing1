import react from 'react';

const Services = (props) => {
    return (
        <section>
            <h2>Our Services</h2>
            <ul>
                {props.services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
        </section>
    );
};

export default Services;