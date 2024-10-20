import React from 'react';
import './projects.css'; 
import Garden1 from './images/garden1.webp';
import Garden2 from './images/garden2.webp';
import garden3 from './images/garden3.webp';
import garden4 from './images/garden4.webp';

const Projects = () => {
  const projectList = [
    {
      title: 'Modern Garden Design',
      description: 'A modern garden with clean lines and minimalist planting schemes.',
      image: Garden1
    },
    {
      title: 'Cottage Garden',
      description: 'A cozy cottage garden filled with vibrant flowers and rustic elements.',
      image: Garden2
    },
    {
      title: 'Urban Rooftop Garden',
      description: 'A compact and stylish rooftop garden for urban living.',
      image: garden3
    },
    {
        title: 'Urban Rooftop Garden',
        description: 'A compact and stylish rooftop garden for urban living.',
        image: garden4
      }
  ];

  return (
    <section className="projects-container">
      <h2>Previous Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
