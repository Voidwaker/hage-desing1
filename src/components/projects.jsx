import React from 'react';
import './projects.css'; 
import Garden1 from './images/garden1.webp';
import Garden2 from './images/garden2.webp';
import garden3 from './images/garden3.webp';
import garden4 from './images/garden4.webp';

const Projects = () => {
  const projectList = [
    {
      title: 'Moderne hagedesign',
      description: 'En moderne hage med rene linjer og minimalistiske beplantningsplaner.',
      image: Garden1
    },    
    {
      title: 'Hyttehage',
      description: 'En koselig hyttehage fylt med livlige blomster og rustikke elementer.',
      image: Garden2
    },    
    {
      title: 'Urban takhage',
      description: 'En kompakt og stilig takhage for urbant liv.',
      image: garden3
    },    
    {
      title: 'Urban takhage',
      description: 'En kompakt og stilig takhage for urbant liv.',
      image: garden4
    }    
  ];

  return (
    <section className="projects-container">
      <h2>Tidligere Prosjekter</h2>
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
