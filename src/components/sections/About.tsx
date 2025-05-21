import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, TrendingUp, Target, Users } from 'lucide-react';
import photo from '../public/Shama.png';


const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const stats = [
    { icon: <TrendingUp size={24} />, value: '21.25%', label: 'Organic Growth' },
    { icon: <Target size={24} />, value: '5.19%', label: 'Conversion Rate' },
    { icon: <Award size={24} />, value: '57K+', label: 'Peak Sessions' },
    { icon: <Users size={24} />, value: '23%', label: 'Brand Growth' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,52,218,0.03),rgba(0,0,0,0)_50%)]"></div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col lg:flex-row gap-12 items-start" // Changed grid to flex and adjusted alignment
        >
          <motion.div variants={itemVariants} className="relative lg:w-1/2"> {/* Added lg:w-1/2 for width control on larger screens */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden magic-card p-1">
              <div className="h-full w-full rounded-xl overflow-hidden relative">
                <img
                  src={photo}
                  alt="SEO Copywriter at work"
                  className="object-cover h-full w-full align-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary to-transparent opacity-40"></div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-accent-blue/10 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-accent-purple/10 blur-xl"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:w-1/2"> {/* Added lg:w-1/2 for width control on larger screens */}
            <div className="flex items-center mb-6"> {/* Flex container for "ABOUT ME" and potential inline image on smaller screens */}
              <span className="inline-block text-accent-blue mr-4">ABOUT ME</span>
              {/* You could potentially render a smaller version of the image here for mobile if needed */}
            </div>
            <h2 className="heading-lg mb-6">Every brand has a backstory. Making sure it's heard, loved, and remembered is my responsibility.</h2>
            <p className="subtitle mb-6">
            I'm Shama, an SEO copywriter blending creativity and data-driven strategy to craft content that ranks, engages, and converts. With an MBA in Marketing and hands-on digital experience, I create narratives that captivate and drive action.
Beyond writing, I practice Bharatanatyam, a dance rooted in rhythm and storytelling—skills I bring into crafting impactful, natural-flowing content.
            </p>
           

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-4 magic-card glow-effect"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-blue/10 text-accent-blue mb-3">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-text-secondary text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
