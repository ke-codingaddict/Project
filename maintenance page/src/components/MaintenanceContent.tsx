import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Ruler, 
  BrickWall, 
  Wrench, 
  ClipboardCheck, 
  Mail, 
  Check, 
  Copy 
} from 'lucide-react';


const services = [
  { icon: Building2, label: 'Building Construction' },
  { icon: Ruler, label: 'Architectural Drawings & Design' },
  { icon: BrickWall, label: 'Structural Engineering' },
  { icon: Wrench, label: 'Civil & General Engineering Works' },
  { icon: ClipboardCheck, label: 'Project Planning & Consultancy' },
];

const MaintenanceContent: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "info@casengineeringkenya.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-12 pb-32 text-center select-none">
      
      {/* Brand Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="inline-flex items-center justify-center p-4 mb-4 border rounded-full bg-background/50 backdrop-blur-md border-primary/30">
             <Building2 className="w-8 h-8 text-accent mr-2" />
             <span className="text-2xl font-bold tracking-tight text-white font-heading">
               CAS Engineering Kenya
             </span>
        </div>
        <p className="text-sm font-medium tracking-widest uppercase text-muted">
          Engineering the Future. Precision in Every Detail.
        </p>
      </motion.div>

      {/* Main Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-2xl w-full p-8 md:p-12 rounded-2xl bg-background/40 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]"
      >
        <h1 className="mb-6 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 font-heading md:text-5xl">
          Website Under Maintenance
        </h1>
        
        <p className="mb-8 text-lg leading-relaxed text-gray-300">
          We are currently refining our digital presence to better represent the strength, precision, and innovation behind <strong className="text-white">CAS Engineering Kenya</strong>.
          <br className="hidden md:block" /> A new, modern, and interactive experience is loading soon.
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 gap-3 mb-10 text-left md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex items-center p-3 transition-colors border rounded-lg group border-white/5 hover:bg-white/5 hover:border-accent/30"
            >
              <service.icon className="w-5 h-5 mr-3 text-accent group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {service.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center pt-8 border-t border-white/10">
            <p className="mb-4 text-sm font-medium text-muted">While the site is offline, reach us via email:</p>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={copyEmail}
              className="group relative flex items-center px-6 py-3 space-x-3 transition-all duration-300 border rounded-full bg-primary/20 hover:bg-primary/40 border-primary/30 hover:border-accent/50"
            >
              <div className="p-2 rounded-full bg-primary/30 group-hover:bg-accent/20 transition-colors">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <span className="text-lg font-medium text-white font-heading">
                {email}
              </span>
              <div className="pl-3 ml-3 border-l border-white/10">
                  {copied ? (
                      <Check className="w-5 h-5 text-green-400" />
                  ) : (
                      <Copy className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  )}
              </div>
              
              {/* Tooltip confirmation */}
              {copied && (
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-green-400 font-medium"
                  >
                      Copied to clipboard!
                  </motion.span>
              )}
            </motion.button>
        </div>

        
        

      </motion.div>
    </div>
  );
};

export default MaintenanceContent;
