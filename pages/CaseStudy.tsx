
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS, Icons, WHATSAPP_LINK } from '../constants';

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-emerald-600 font-medium">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="pb-32">
      {/* Header */}
      <div className="bg-gray-50 pt-32 pb-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-emerald-600 transition-colors mb-12 group"
          >
            <Icons.ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to work
          </button>

          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-600 mb-4 block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">{project.title}</h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-3xl">
            {project.solution}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            {project.metrics.map((metric, idx) => (
              <div key={idx}>
                <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{metric.label}</p>
              </div>
            ))}
            <div>
              <p className="text-3xl font-bold text-gray-900">Live</p>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Status</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pt-24 space-y-24">
        {/* Problem */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h2 className="text-xl font-semibold text-gray-900 uppercase tracking-widest text-[11px] mb-4">The Challenge</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              {project.fullStory.problemDeep}
            </p>
          </div>
        </section>

        {/* Flow */}
        <section className="bg-emerald-50/50 rounded-3xl p-8 md:p-12">
          <h2 className="text-xl font-semibold text-emerald-900 uppercase tracking-widest text-[11px] mb-12 text-center">System Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {project.fullStory.flow.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold mb-6">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.step}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h2 className="text-xl font-semibold text-gray-900 uppercase tracking-widest text-[11px] mb-4">The Impact</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-emerald-500 pl-8">
              "{project.fullStory.impactSummary}"
            </p>
          </div>
        </section>

        {/* Tech Tags */}
        <section className="flex flex-wrap gap-3 pt-12 border-t border-gray-100">
          <span className="text-xs text-gray-400 uppercase font-semibold mr-4 mt-2">Built with:</span>
          {project.tags.map(tag => (
            <span key={tag} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
              {tag}
            </span>
          ))}
        </section>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-2xl z-40">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-sm text-gray-600 font-medium px-2">Ready to implement a similar system?</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all"
          >
            <Icons.WhatsApp className="w-4 h-4" />
            Discuss on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
