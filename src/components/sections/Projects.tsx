import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Pet Care Blog Optimization',
      description: 'Led SEO strategy and content optimization for a pet care blog, resulting in a 21.25% increase in organic traffic and improved user engagement.',
      image: 'https://images.pexels.com/photos/6568951/pexels-photo-6568951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'SEO Content',
      technologies: ['Content Strategy', 'SEO Optimization', 'Keyword Research', 'Analytics'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'E-commerce Product Pages',
      description: 'Optimized product descriptions and category pages, leading to a 57K+ peak in sessions and maintaining high conversion rates.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Copywriting',
      technologies: ['Product Copywriting', 'SEO', 'Conversion Optimization', 'Market Research'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Aerospace Industry Blog',
      description: 'Created technical content and blog posts for an aerospace company, resulting in increased brand visibility and thought leadership.',
      image: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Technical Writing',
      technologies: ['Technical Writing', 'Industry Research', 'Content Strategy', 'SEO'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Brand Story Development',
      description: 'Developed compelling brand narratives and website content, improving homepage conversion rate to 5.19%.',
      image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Brand Strategy',
      technologies: ['Brand Strategy', 'Copywriting', 'Content Strategy', 'UX Writing'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const filters = ['All', 'SEO Content', 'Copywriting', 'Technical Writing', 'Brand Strategy'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-accent-blue mb-4">PORTFOLIO</span>
          <h2 className="heading-lg mb-6">Featured Projects</h2>
          <p className="subtitle">
            Explore my recent work in SEO copywriting, content strategy, and brand storytelling.
            Each project represents unique challenges and measurable results.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-accent-blue text-white'
                  : 'bg-background-tertiary text-text-secondary hover:bg-background-secondary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="magic-card group overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4 bg-accent-blue/90 text-white text-xs px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="heading-sm mb-3">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-background-tertiary text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="text-accent-blue hover:text-accent-purple transition-colors flex items-center gap-1 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Case Study
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn-secondary inline-flex items-center gap-2">
            View All Projects
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;