import React, { useState, useMemo } from 'react';
import { 
  Grid as GridIcon, 
  List as ListIcon, 
  Search, 
  ArrowUpRight, 
  Eye, 
  Filter, 
  Sparkles, 
  Calendar,
  User,
  SlidersHorizontal
} from 'lucide-react';
import { categories, projects } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export default function ProjectsGallery({ onSelectProject, setCursorText }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCat = activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.deliverables.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 border-b border-[#252830] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181D] border border-[#252830] text-xs font-mono text-[var(--accent-color)] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PORTFOLIO ARCHIVE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[var(--text-primary)]">
              Selected Works & Case Studies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] max-w-xl">
              Curated visual identity systems, tactile packaging, bespoke typography, and editorial publications crafted for global visionaries.
            </p>
          </div>

          {/* View Mode & Count */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[var(--text-muted)]">
              Showing {filteredProjects.length} of {projects.length} Works
            </span>
            <div className="flex items-center border border-[#252830] bg-[#14161C] rounded-lg p-1">
              <button
                onClick={() => {
                  soundManager.playClick();
                  setViewMode('grid');
                }}
                className={`p-1.5 rounded-md transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-[var(--accent-color)] text-[var(--accent-contrast)] shadow-sm' 
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
                title="Grid View"
              >
                <GridIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  soundManager.playClick();
                  setViewMode('list');
                }}
                className={`p-1.5 rounded-md transition-all ${
                  viewMode === 'list' 
                    ? 'bg-[var(--accent-color)] text-[var(--accent-contrast)] shadow-sm' 
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
                title="Tabular List View"
              >
                <ListIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#252830]">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundManager.playClick();
                  setActiveCategory(cat.id);
                }}
                className={`px-4 py-2 rounded-lg font-mono text-xs whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[var(--accent-color)] text-[var(--accent-contrast)] font-bold shadow-md'
                    : 'bg-[#14161C] border border-[#252830] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search projects, client, deliverables..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#14161C] border border-[#252830] rounded-lg text-xs font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-color)] transition-colors"
            />
          </div>

        </div>

        {/* Zero state if filtered out */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center border border-dashed border-[#252830] rounded-2xl">
            <SlidersHorizontal className="w-8 h-8 text-[var(--text-muted)] mx-auto mb-3 opacity-50" />
            <p className="font-mono text-sm text-[var(--text-secondary)]">
              No projects found matching "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#1E2128] text-xs font-mono text-[var(--accent-color)]"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View Mode 1: Interactive Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onMouseEnter={() => {
                  soundManager.playHover();
                  setCursorText("CASE STUDY");
                }}
                onMouseLeave={() => setCursorText(null)}
                onClick={() => {
                  soundManager.playPop();
                  onSelectProject(project);
                }}
                className="group cursor-pointer rounded-2xl bg-[#14161C] border border-[#252830] hover:border-[var(--accent-color)] transition-all duration-300 overflow-hidden flex flex-col shadow-xl hover:-translate-y-1.5"
              >
                {/* Project Image Showcase with Dual-Hover state */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  
                  {/* Primary Thumbnail */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-20"
                  />

                  {/* Secondary Image revealed on Hover */}
                  <img
                    src={project.secondaryImage || project.thumbnail}
                    alt={`${project.title} detail`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105"
                  />

                  {/* Floating Year & Category Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 font-mono text-[11px] font-bold text-[var(--accent-color)] uppercase">
                      {project.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 font-mono text-[11px] text-white/80">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Quick Action Indicator */}
                  <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="px-3.5 py-1.5 rounded-lg bg-[var(--accent-color)] text-[var(--accent-contrast)] font-mono text-xs font-bold uppercase flex items-center gap-1.5 shadow-xl">
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Project Meta & Details */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-[var(--text-muted)] mb-2">
                      <span>CLIENT: {project.client.toUpperCase()}</span>
                      <span>{project.role}</span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors leading-tight">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Deliverables Tags */}
                  <div className="mt-6 pt-5 border-t border-[#252830] flex flex-wrap gap-1.5">
                    {project.deliverables.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-[#0D0E11] border border-[#252830] text-[10px] font-mono text-[var(--text-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                    {project.deliverables.length > 3 && (
                      <span className="px-2 py-1 rounded bg-[#0D0E11] text-[10px] font-mono text-[var(--accent-color)]">
                        +{project.deliverables.length - 3} more
                      </span>
                    )}
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

        {/* View Mode 2: Editorial Swiss Tabular List View */}
        {viewMode === 'list' && (
          <div className="border border-[#252830] rounded-2xl overflow-hidden bg-[#14161C]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#252830] bg-[#16181D] font-mono text-xs text-[var(--text-muted)] uppercase">
                  <th className="py-4 px-6">Project / Client</th>
                  <th className="py-4 px-6 hidden sm:table-cell">Discipline</th>
                  <th className="py-4 px-6 hidden md:table-cell">Role</th>
                  <th className="py-4 px-6 hidden lg:table-cell">Year</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#252830]">
                {filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    onMouseEnter={() => {
                      soundManager.playHover();
                      setHoveredProject(project);
                      setCursorText("EXPLORE");
                    }}
                    onMouseLeave={() => {
                      setHoveredProject(null);
                      setCursorText(null);
                    }}
                    onClick={() => {
                      soundManager.playPop();
                      onSelectProject(project);
                    }}
                    className="hover:bg-[#1E2128]/70 transition-colors cursor-pointer group"
                  >
                    <td className="py-5 px-6">
                      <div className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">
                        {project.title}
                      </div>
                      <div className="font-mono text-xs text-[var(--text-muted)]">
                        {project.client}
                      </div>
                    </td>
                    <td className="py-5 px-6 hidden sm:table-cell font-mono text-xs text-[var(--accent-color)]">
                      {project.categoryLabel}
                    </td>
                    <td className="py-5 px-6 hidden md:table-cell font-sans text-xs text-[var(--text-secondary)]">
                      {project.role}
                    </td>
                    <td className="py-5 px-6 hidden lg:table-cell font-mono text-xs text-[var(--text-muted)]">
                      {project.year}
                    </td>
                    <td className="py-5 px-6 text-right">
                      <button className="p-2 rounded-lg bg-[#16181D] border border-[#252830] text-[var(--text-primary)] group-hover:border-[var(--accent-color)] group-hover:text-[var(--accent-color)] transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
}
