
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { Icons } from '../constants';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Link
      to={`/work/${project.id}`}
      className="group block bg-white border border-gray-200 rounded-2xl p-6 md:p-8 transition-all hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1"
    >
      <div className="flex flex-col h-full">
        <div className="mb-6 flex justify-between items-start">
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <Icons.ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
        </div>

        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 group-hover:text-emerald-900">
          {project.title}
        </h3>

        <div className="space-y-4 mb-8 flex-grow">
          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-tighter mb-1">The Problem</p>
            <p className="text-gray-600 leading-relaxed text-sm">{project.problem}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-emerald-600 uppercase tracking-tighter mb-1">The AI Solution</p>
            <p className="text-gray-700 leading-relaxed text-sm font-medium">{project.solution}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
          {project.metrics.map((metric, idx) => (
            <div key={idx}>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              <p className="text-xs text-gray-400 font-medium">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
