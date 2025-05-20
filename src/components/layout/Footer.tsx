import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-secondary py-12 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-bold text-2xl bg-gradient-to-r from-accent-blue to-accent-purple text-transparent bg-clip-text mb-4">
              Portfolio
            </h3>
            <p className="text-text-secondary max-w-xs">
              Creating meaningful digital experiences through thoughtful design and meticulous development.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-text-secondary hover:text-accent-blue transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a 
                  href="mailto:hello@example.com" 
                  className="hover:text-accent-blue transition-colors duration-300"
                >
                  hello@example.com
                </a>
              </li>
              <li>
                <p>San Francisco, CA</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow</h4>
            <div className="flex space-x-4">
              {[
                { icon: <Github size={20} />, href: 'https://github.com' },
                { icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
                { icon: <Twitter size={20} />, href: 'https://twitter.com' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background-tertiary flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue border border-transparent transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-text-muted/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            © {currentYear} Personal Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <a href="#" className="hover:text-accent-blue transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-accent-blue transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;