
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-teal text-white">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
        <p className="text-lg font-semibold">NidhiSetu Yuva Veer Program</p>
        <p className="mt-2 text-gray-300">
          Contact us at: <a href="mailto:nidhisetusaving@gmail.com?subject=Yuva%20Veer%20Program%20Inquiry&body=Hi%20NidhiSetu%20Team,%0D%0A%0D%0AI%20would%20like%20to%20know%20more%20about%20the%20Yuva%20Veer%20Program.%0D%0A%0D%0ARegards,%0D%0A" className="text-gold hover:underline">nidhisetusaving@gmail.com</a>
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <a
            href="https://www.linkedin.com/company/nidhisetu/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-2 rounded-md border border-gold text-gold font-semibold text-sm sm:text-base transition-colors duration-300 hover:bg-gold hover:text-dark-teal hover:shadow-lg hover:-translate-y-0.5 transition-transform"
            aria-label="LinkedIn"
          >
            <span className="inline-flex items-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM0 8h5v14H0V8Zm7.5 0h4.7v2h.07c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 5.96 3.3 5.96 7.58V22H18v-6.8c0-1.62-.03-3.7-2.26-3.7-2.26 0-2.61 1.76-2.61 3.58V22H7.5V8Z"/></svg>
              LinkedIn
            </span>
          </a>
          <a
            href="https://www.instagram.com/nidhi_setu?igsh=dHZsczBqMnR2Y2d0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-2 rounded-md border border-gold text-gold font-semibold text-sm sm:text-base transition-colors duration-300 hover:bg-gold hover:text-dark-teal hover:shadow-lg hover:-translate-y-0.5 transition-transform"
            aria-label="Instagram"
          >
            <span className="inline-flex items-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/></svg>
              Instagram
            </span>
          </a>
          <a
            href="https://www.facebook.com/share/1DB65U9owK/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-2 rounded-md border border-gold text-gold font-semibold text-sm sm:text-base transition-colors duration-300 hover:bg-gold hover:text-dark-teal hover:shadow-lg hover:-translate-y-0.5 transition-transform"
            aria-label="Facebook"
          >
            <span className="inline-flex items-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"/></svg>
              Facebook
            </span>
          </a>
          <a
            href="https://whatsapp.com/channel/0029Vb6vqi50G0XmAso9Vu2y"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-2 rounded-md border border-gold text-gold font-semibold text-sm sm:text-base transition-colors duration-300 hover:bg-gold hover:text-dark-teal hover:shadow-lg hover:-translate-y-0.5 transition-transform"
            aria-label="WhatsApp"
          >
            <span className="inline-flex items-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2"><path d="M20 3.9A10 10 0 0 0 4.4 18.6L3 22l3.5-1.3A10 10 0 1 0 20 3.9ZM12 5a7 7 0 0 1 0 14 6.9 6.9 0 0 1-3.6-1l-.3-.2-2.1.8.8-2.1-.2-.3A6.9 6.9 0 0 1 5 12a7 7 0 0 1 7-7Zm4.2 9.6c-.2.6-1.1 1.1-1.7 1.2-.5.1-1.2.1-2.7-.5-2.3-1-3.8-3.3-3.9-3.5-.1-.2-.9-1.2-.9-2.4s.6-1.7.8-1.9c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .4.3l.5 1.1c.1.2.1.3 0 .5-.1.2-.2.3-.3.5l-.2.3c-.1.1-.2.2-.1.4.2.5.9 1.6 1.9 2.1 1 .6 1.6.7 2.2.6.2 0 .3-.2.4-.3l.3-.4c.1-.2.3-.3.5-.2l1.2.6c.2.1.3.2.4.3.1.2.1.4 0 .6Z"/></svg>
              WhatsApp
            </span>
          </a>
        </div>
        <div className="mt-4 border-t border-gray-600 pt-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} NidhiSetu. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
