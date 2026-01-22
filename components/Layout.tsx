
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icons, WHATSAPP_LINK } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Work', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-emerald-100">
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold tracking-tight text-gray-900 flex items-center gap-2 group">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold transition-transform group-hover:scale-105">DB</div>
            <span className="hidden sm:inline">Dhaval Balsara</span>
          </Link>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    location.pathname === link.path ? 'text-emerald-600' : 'text-gray-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-emerald-200"
            >
              <Icons.WhatsApp className="w-4 h-4" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Dhaval Balsara</h3>
            <p className="text-gray-500 text-sm max-w-sm">
              Designing and building calm, reliable AI systems for real-world business challenges.
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">GitHub</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-gray-200/50 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Dhaval Balsara. All rights reserved.</p>
          <p>Built with intention and intelligence.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
