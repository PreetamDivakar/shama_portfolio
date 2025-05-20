import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skills = [
    {
      category: 'Content Creation',
      items: [
        { name: 'SEO Copywriting', level: 95 },
        { name: 'Content Strategy', level: 90 },
        { name: 'Brand Storytelling', level: 95 },
        { name: 'Blog Writing', level: 90 },
        { name: 'Product Descriptions', level: 85 },
      ],
    },
    {
      category: 'Technical Skills',
      items: [
        { name: 'SEO', level: 95 },
        { name: 'Keyword Research', level: 90 },
        { name: 'Analytics', level: 85 },
        { name: 'Content Optimization', level: 90 },
        { name: 'Technical Writing', level: 85 },
      ],
    },
    {
      category: 'Marketing & Research',
      items: [
        { name: 'Market Research', level: 90 },
        { name: 'Social Media', level: 85 },
        { name: 'Data Analysis', level: 90 },
        { name: 'Consumer Behavior', level: 85 },
        { name: 'Brand Strategy', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent-blue mb-4">EXPERTISE</span>
          <h2 className="heading-lg mb-6">My Professional Skills</h2>
          <p className="subtitle">
            I've developed a comprehensive skill set in SEO copywriting and content strategy,
            focusing on creating content that both ranks well and converts effectively.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={itemVariants}
              className="magic-card p-8"
            >
              <h3 className="heading-sm mb-6 bg-gradient-to-r from-accent-blue to-accent-purple text-transparent bg-clip-text">
                {skillGroup.category}
              </h3>

              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-text-secondary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;