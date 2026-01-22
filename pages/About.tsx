
import React from 'react';
import { Icons, WHATSAPP_LINK } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pb-32">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="slide-up">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-12">
              Building the <span className="text-emerald-600">future of work</span> through automation.
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-8 space-y-8 text-xl text-gray-600 leading-relaxed">
                <p>
                  I’m Dhaval Balsara, an AI Systems Engineer focused on turning high-level LLM capabilities into reliable, production-ready automations.
                </p>
                <p>
                  My philosophy is simple: AI should work for you, not against you. I identify friction points and build high-performance systems that dissolve them.
                </p>
                <p>
                  Whether it's an AI voice agent handling real estate inquiries or a custom OCR pipeline for finance, my focus is always on <strong>technical excellence</strong> and <strong>measurable results</strong>.
                </p>

                <div className="pt-12">
                  <h3 className="text-gray-900 font-semibold mb-6 uppercase text-xs tracking-widest">My Approach</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Icons.Check className="w-5 h-5" />
                      </div>
                      <h4 className="font-semibold text-gray-900">Systems Thinking</h4>
                      <p className="text-sm">I don't just build chatbots. I design end-to-end workflows that connect your data, your team, and your customers.</p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Icons.Check className="w-5 h-5" />
                      </div>
                      <h4 className="font-semibold text-gray-900">Automation First</h4>
                      <p className="text-sm">I leverage cutting-edge AI to eliminate manual bottlenecks, allowing businesses to scale without increasing overhead.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 sticky top-32">
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                  <div className="w-32 h-32 bg-emerald-100 rounded-full mb-6 mx-auto overflow-hidden ring-4 ring-white shadow-lg">
                    <img src="dhaval.jpg" alt="Dhaval Balsara" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Dhaval Balsara</h3>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">AI Automation Developer</p>
                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-600">Location: Global (Remote)</p>
                      <p className="text-sm font-medium text-gray-600">Focus: AI Agents & Automation</p>
                    </div>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-full text-sm font-semibold transition-colors hover:bg-emerald-700"
                    >
                      <Icons.WhatsApp className="w-4 h-4" />
                      Let's Connect
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
