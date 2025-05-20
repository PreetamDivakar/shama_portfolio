import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'Supertails',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'Shama\'s SEO expertise and content strategy transformed our digital presence. Her work led to a significant increase in organic traffic and improved our conversion rates. Her ability to understand our brand voice and connect with our audience is exceptional.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Raj Patel',
      role: 'CEO',
      company: 'Bellatrix Aerospace',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'Working with Shama on our technical content was a game-changer. She has a unique ability to take complex aerospace concepts and make them accessible while maintaining technical accuracy. Our blog engagement has increased significantly.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'PetCare Solutions',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'Shama\'s product descriptions and category page optimizations had a direct impact on our conversion rates. She understands both SEO and user psychology, creating content that not only ranks well but also drives sales.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-background-secondary/30 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-accent-purple/5 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-accent-blue/5 blur-3xl"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent-blue mb-4">TESTIMONIALS</span>
          <h2 className="heading-lg mb-6">Client Feedback</h2>
          <p className="subtitle">
            Hear from clients about their experience working with me on content strategy,
            SEO optimization, and brand storytelling projects.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="magic-card p-8 md:p-12 relative">
            <div className="absolute top-6 right-8 text-7xl text-accent-blue/10 font-serif">
              "
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-background-tertiary">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-accent-blue text-white rounded-full p-2">
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <blockquote>
                  <p className="text-lg italic mb-6">{currentTestimonial.text}</p>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < currentTestimonial.rating ? "text-accent-blue" : "text-text-muted"}
                        fill={i < currentTestimonial.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  
                  <footer>
                    <p className="font-semibold text-lg">{currentTestimonial.name}</p>
                    <p className="text-text-secondary">
                      {currentTestimonial.role}, {currentTestimonial.company}
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-background-tertiary hover:bg-background-secondary text-text-secondary hover:text-accent-blue flex items-center justify-center transition-all duration-300 border border-transparent hover:border-accent-blue/30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-background-tertiary hover:bg-background-secondary text-text-secondary hover:text-accent-blue flex items-center justify-center transition-all duration-300 border border-transparent hover:border-accent-blue/30"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent-blue w-6' 
                    : 'bg-background-tertiary'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;