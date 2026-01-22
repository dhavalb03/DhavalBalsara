
import React from 'react';
import { PROJECTS, Icons, WHATSAPP_LINK } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-50 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl slide-up">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-wider uppercase mb-6">
              AI Systems & Automations
            </span>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-8 leading-[1.1]">
              I am an <span className="text-emerald-600">AI Automation Developer</span> building systems for real businesses.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl">
              I specialize in designing and deploying intelligent agents, voice automation, and custom workflow systems that drive measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-xl hover:shadow-emerald-200 hover:-translate-y-0.5"
              >
                <Icons.WhatsApp className="w-5 h-5" />
                Message on WhatsApp
              </a>
              <button
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-emerald-200 text-gray-600 hover:text-emerald-700 px-8 py-4 rounded-full text-lg font-medium transition-all"
              >
                View Selected Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Grid */}
      <section id="work" className="max-w-6xl mx-auto px-6 pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Selected Work</h2>
            <p className="text-gray-500">A collection of systems built to solve tangible problems.</p>
          </div>
          <div className="h-px flex-grow bg-gray-100 mx-8 hidden md:block"></div>
          <div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full">
            {PROJECTS.length} Live Deployments
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gray-900 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Have a unique process that needs automation?</h3>
            <p className="text-gray-400 text-lg mb-8">
              I specialize in custom-built agents that fit into your existing stack, not vice-versa.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Let’s talk when you’re ready
              <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
