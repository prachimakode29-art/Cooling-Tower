import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JOBS = [
  {
    id: 1,
    title: 'Sales Executive',
    category: 'sales',
    dept: 'Sales',
    loc: 'Indore, M.P.',
    type: 'Full-time',
    brief: 'Drive business growth by identifying and converting new industrial clients.',
    experience: '2 – 5 Years',
    qualification: 'B.E. / B.Tech / MBA (Marketing)',
    salary: '₹2.5 – ₹4.5 LPA (Negotiable)',
    vacancies: '2 Positions',
    responsibilities: [
      'Generate leads and manage the complete sales cycle for cooling tower products and spare parts.',
      'Visit industrial clients, deliver product presentations, and prepare accurate quotations.',
      'Maintain and grow client relationships across M.P., Gujarat, and nearby states.',
      'Coordinate with production and logistics to ensure timely order fulfilment.',
      'Consistently achieve monthly and quarterly revenue targets.'
    ],
    requirements: [
      'Proven track record in B2B industrial or technical sales.',
      'Strong communication skills in Hindi; basic English a plus.',
      'Own two-wheeler with valid driving licence preferred.'
    ]
  },
  {
    id: 2,
    title: 'Mechanical Engineer',
    category: 'engineering',
    dept: 'Engineering',
    loc: 'Indore, M.P.',
    type: 'Full-time',
    brief: 'Design, analyse, and improve cooling tower systems and components.',
    experience: '1 – 4 Years',
    qualification: 'B.E. / B.Tech (Mechanical)',
    salary: '₹2.0 – ₹4.0 LPA',
    vacancies: '1 Position',
    responsibilities: [
      'Design and develop cooling tower components using AutoCAD or SolidWorks.',
      'Conduct performance analysis and efficiency studies on existing cooling systems.',
      'Collaborate with the production team on new product development and quality inspections.',
      'Prepare technical documentation, BOMs, and site installation manuals.'
    ],
    requirements: [
      'Proficiency in AutoCAD; SolidWorks or equivalent is a strong advantage.',
      'Foundational understanding of thermal systems and fluid mechanics.',
      'Analytical mindset and strong problem-solving skills.'
    ]
  },
  {
    id: 3,
    title: 'Production Supervisor',
    category: 'production',
    dept: 'Production',
    loc: 'Sanwer Road, Indore',
    type: 'Full-time',
    brief: 'Oversee the manufacturing floor and ensure quality output of all cooling tower components.',
    experience: '3 – 7 Years',
    qualification: 'Diploma / B.E. (Mechanical / Industrial)',
    salary: '₹2.0 – ₹3.5 LPA',
    vacancies: '1 Position',
    responsibilities: [
      'Supervise daily production activities and maintain discipline on the factory floor.',
      'Monitor quality control to ensure all products meet company and client standards.',
      'Manage a team of 10–20 workers including shift scheduling and attendance.',
      'Track raw material usage and coordinate with the procurement department.',
      'Maintain production records and submit daily reports to management.'
    ],
    requirements: [
      'Experience in a manufacturing or fabrication environment is essential.',
      'Knowledge of GRP/FRP manufacturing processes is a strong advantage.',
      'Strong leadership and team management skills.'
    ]
  },
  {
    id: 4,
    title: 'Accounts Executive',
    category: 'accounts',
    dept: 'Accounts',
    loc: 'Indore, M.P.',
    type: 'Full-time',
    brief: 'Manage day-to-day financial operations, GST compliance, and bookkeeping in Tally.',
    experience: '2 – 5 Years',
    qualification: 'B.Com / M.Com / CA Inter',
    salary: '₹1.8 – ₹3.0 LPA',
    vacancies: '1 Position',
    responsibilities: [
      'Manage accounts payable, receivable, and general ledger entries in Tally ERP / Tally Prime.',
      'Prepare and file GST returns (GSTR-1, GSTR-3B) and handle TDS compliance.',
      'Reconcile bank statements and maintain petty cash records accurately.',
      'Assist in preparation of P&L statements, balance sheets, and MIS reports.'
    ],
    requirements: [
      'Strong proficiency in Tally ERP 9 or Tally Prime is mandatory.',
      'Solid knowledge of GST, TDS, and Indian tax regulations.',
      'High attention to detail and strong numerical aptitude.'
    ]
  }
];

export default function Careers() {
  const [filter, setFilter] = useState('all');
  const [openJob, setOpenJob] = useState<number | null>(null);

  const filteredJobs = filter === 'all' ? JOBS : JOBS.filter(j => j.category === filter);

  return (
    <div className="pt-[72px]">
      {/* HERO */}
      <section className="mt-3 bg-white relative overflow-hidden py-[88px] pb-[96px]">
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_700px_500px_at_85%_40%,rgba(14,165,233,.13)_0%,transparent_70%),radial-gradient(ellipse_500px_350px_at_5%_90%,rgba(249,115,22,.11)_0%,transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/" className="text-[13px] text-white/45 hover:text-white/85 transition-colors">Home</Link>
            <span className="text-white/25">›</span>
            <span className="text-[13px] text-[#f97316]">Careers</span>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/30 text-[#fba96a] text-[12px] font-semibold tracking-[0.07em] uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse" /> We're Actively Hiring
          </div>
          
          <h1 className="text-white font-['Syne'] font-bold text-[clamp(34px,5.5vw,62px)] leading-tight mb-4 tracking-tight">
            Join Our <em className="text-[#f97316] not-italic">Growing</em><br/>Engineering Family
          </h1>
          
          <p className="text-white/60 text-[16px] max-w-xl leading-[1.72] mb-10">
            Be part of a team that's been redefining cooling tower solutions across India for over 15 years. Build your career with purpose at Arohi Engineering.
          </p>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="py-[88px] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-[56px]">
            <div className="text-[11.5px] font-bold tracking-[0.12em] uppercase text-[#f97316] mb-[12px]">Why Arohi?</div>
            <h2 className="text-[clamp(26px,3.5vw,42px)] font-bold text-[#0f1c2e] mb-[14px] leading-tight">A Great Place to Build<br/>Your Career</h2>
            <p className="text-slate-600 text-[16px] max-w-2xl leading-[1.72]">
              We believe our people are our greatest asset. Here's what makes working at Arohi Engineering genuinely rewarding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border text-center md:text-left border-slate-200 rounded-[20px] p-[34px_28px] transition-all hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-[5px] relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0ea5e9] to-[#f97316] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="w-[54px] h-[54px] rounded-[14px] bg-[#0ea5e9]/10 flex items-center justify-center mx-auto md:mx-0 mb-5">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#0f1c2e] mb-2.5">Career Growth</h3>
              <p className="text-[14px] text-slate-500 leading-[1.65]">Structured paths and regular performance reviews to help you advance at every stage of your career.</p>
            </div>
            
            <div className="bg-white border text-center md:text-left border-slate-200 rounded-[20px] p-[34px_28px] transition-all hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-[5px] relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0ea5e9] to-[#f97316] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="w-[54px] h-[54px] rounded-[14px] bg-[#f97316]/10 flex items-center justify-center mx-auto md:mx-0 mb-5">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#0f1c2e] mb-2.5">Work-Life Balance</h3>
              <p className="text-[14px] text-slate-500 leading-[1.65]">Flexible arrangements and a culture that genuinely respects your personal time and well-being.</p>
            </div>

            <div className="bg-white border text-center md:text-left border-slate-200 rounded-[20px] p-[34px_28px] transition-all hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-[5px] relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0ea5e9] to-[#f97316] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="w-[54px] h-[54px] rounded-[14px] bg-[#22c55e]/10 flex items-center justify-center mx-auto md:mx-0 mb-5">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#0f1c2e] mb-2.5">Collaborative Team</h3>
              <p className="text-[14px] text-slate-500 leading-[1.65]">Work alongside experienced engineers and industry veterans in a supportive, inclusive environment.</p>
            </div>
            
             <div className="bg-white border text-center md:text-left border-slate-200 rounded-[20px] p-[34px_28px] transition-all hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-[5px] relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0ea5e9] to-[#f97316] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="w-[54px] h-[54px] rounded-[14px] bg-[#8b5cf6]/10 flex items-center justify-center mx-auto md:mx-0 mb-5">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#0f1c2e] mb-2.5">Training & Development</h3>
              <p className="text-[14px] text-slate-500 leading-[1.65]">Technical workshops, safety training, and skill-building programs to keep you ahead of the curve.</p>
            </div>

            <div className="bg-white border text-center md:text-left border-slate-200 rounded-[20px] p-[34px_28px] transition-all hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-[5px] relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0ea5e9] to-[#f97316] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="w-[54px] h-[54px] rounded-[14px] bg-[#eab308]/10 flex items-center justify-center mx-auto md:mx-0 mb-5">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#0f1c2e] mb-2.5">Competitive Salary</h3>
              <p className="text-[14px] text-slate-500 leading-[1.65]">Market-competitive packages with performance bonuses, incentives, and annual increments.</p>
            </div>

            <div className="bg-white border text-center md:text-left border-slate-200 rounded-[20px] p-[34px_28px] transition-all hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-[5px] relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0ea5e9] to-[#f97316] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="w-[54px] h-[54px] rounded-[14px] bg-[#ef4444]/10 flex items-center justify-center mx-auto md:mx-0 mb-5">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#0f1c2e] mb-2.5">Health & Safety</h3>
              <p className="text-[14px] text-slate-500 leading-[1.65]">Health insurance, PF, ESI benefits, and a strong commitment to workplace safety across all sites.</p>
            </div>

          </div>
        </div>
      </section>

      {/* JOB OPENINGS */}
      <section className="py-[88px] bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-[56px]">
            <div className="text-[11.5px] font-bold tracking-[0.12em] uppercase text-[#f97316] mb-[12px]">Open Positions</div>
            <h2 className="text-[clamp(26px,3.5vw,42px)] font-bold text-[#0f1c2e] mb-[14px]">Current Openings</h2>
            <p className="text-slate-600 text-[16px] max-w-2xl leading-[1.72]">Click any role to see the full details, requirements, and how to apply.</p>
          </div>

          <div className="flex flex-wrap gap-2.5 mb-8">
            {[
              { id: 'all', label: 'All Positions' },
              { id: 'sales', label: 'Sales' },
              { id: 'engineering', label: 'Engineering' },
              { id: 'production', label: 'Production' },
              { id: 'accounts', label: 'Accounts' }
            ].map(f => (
               <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-5 py-2 border-[1.5px] rounded-full text-[13px] font-medium transition-all ${filter === f.id ? 'border-[#f97316] text-[#f97316] bg-[#f97316]/5' : 'border-slate-200 text-slate-600 bg-white hover:border-[#f97316] hover:text-[#f97316] hover:bg-[#f97316]/5'}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {filteredJobs.map(job => (
              <div key={job.id} className={`bg-white border-[1.5px] ${openJob === job.id ? 'border-[#f97316]/30 shadow-md' : 'border-slate-200'} rounded-[20px] overflow-hidden transition-all hover:border-[#f97316]/30 hover:shadow-md`}>
                <div 
                  className="flex items-center justify-between p-[24px_28px] cursor-pointer gap-4 md:flex-row flex-col items-start"
                  onClick={() => setOpenJob(openJob === job.id ? null : job.id)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                       <span className="inline-flex items-center text-[11px] font-semibold tracking-[0.04em] uppercase px-2.5 py-1 rounded-md bg-[#0ea5e9]/10 text-[#f97316]">{job.dept}</span>
                       <span className="inline-flex items-center text-[11px] font-semibold tracking-[0.04em] uppercase px-2.5 py-1 rounded-md bg-[#22c55e]/10 text-[#16a34a]">📍 {job.loc}</span>
                       <span className="inline-flex items-center text-[11px] font-semibold tracking-[0.04em] uppercase px-2.5 py-1 rounded-md bg-[#f97316]/10 text-[#c2510f]">{job.type}</span>
                    </div>
                    <div className="text-[20px] font-['Syne'] font-bold text-[#0f1c2e] mb-1">{job.title}</div>
                    <div className="text-[14px] text-slate-500">{job.brief}</div>
                  </div>
                  <div className={`w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 transition-all ${openJob === job.id ? 'bg-[#f97316] rotate-45 select-none' : 'bg-slate-100 select-none'}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={openJob === job.id ? "#fff" : "#475569"} strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </div>
                </div>

                {openJob === job.id && (
                  <div className="border-t border-slate-200 p-[28px] bg-slate-50 animate-in slide-in-from-top-2 duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-7">
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.07em] text-slate-400 mb-1">Experience</div>
                        <div className="text-[14px] font-medium text-[#0f1c2e]">{job.experience}</div>
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.07em] text-slate-400 mb-1">Qualification</div>
                        <div className="text-[14px] font-medium text-[#0f1c2e]">{job.qualification}</div>
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.07em] text-slate-400 mb-1">Salary</div>
                        <div className="text-[14px] font-medium text-[#0f1c2e]">{job.salary}</div>
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.07em] text-slate-400 mb-1">Vacancies</div>
                        <div className="text-[14px] font-medium text-[#0f1c2e]">{job.vacancies}</div>
                      </div>
                    </div>

                    <div className="text-[14.5px] font-bold mb-2.5 text-[#0f1c2e]">Key Responsibilities</div>
                    <ul className="flex flex-col gap-1.5 mb-5 space-y-1">
                      {job.responsibilities.map((req, i) => (
                        <li key={i} className="text-[14px] text-slate-600 pl-[18px] relative leading-[1.6] before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#f97316]">
                          {req}
                        </li>
                      ))}
                    </ul>

                    <div className="text-[14.5px] font-bold mb-2.5 text-[#0f1c2e]">Requirements</div>
                    <ul className="flex flex-col gap-1.5 mb-6 space-y-1">
                      {job.requirements.map((req, i) => (
                         <li key={i} className="text-[14px] text-slate-600 pl-[18px] relative leading-[1.6] before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#f97316]">
                          {req}
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/job-post" className="inline-flex items-center gap-2 px-7 py-3 bg-[#f97316] hover:bg-[#ea6600] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(249,115,22,.35)] text-white text-[14px] font-bold rounded-[10px] transition-all">
                      Apply for This Role
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
