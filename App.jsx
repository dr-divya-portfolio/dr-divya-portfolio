import React, { useState, useEffect } from 'react';
import { Brain, Eye, TrendingUp, Award, Mail, Linkedin, ChevronDown, ArrowRight, Check, X, Volume2, VolumeX, Play, Target, Shield, MessageSquare, Users } from 'lucide-react';

const MediMarketerPortfolio = () => {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-teal-950 to-gray-950 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-white text-7xl font-bold mb-8 font-mono">{String(loadProgress).padStart(3, '0')}</div>
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-teal-500 to-green-500 transition-all duration-300" style={{ width: `${loadProgress}%` }} />
          </div>
          <div className="text-teal-400 mt-6 text-xs tracking-widest">LOADING EXPERIENCE</div>
        </div>
      </div>
    );
  }

  if (!hasStarted) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-teal-950 to-gray-950 flex items-center justify-center z-50">
        <div className="text-center max-w-4xl px-6">
          <div className="mb-12">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-teal-500 to-green-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center">
                <Brain className="w-20 h-20 text-teal-400" />
              </div>
            </div>
          </div>
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-6">Dr. Divya M A</h1>
          <div className="text-2xl text-teal-400 mb-4 tracking-wide">Medi-Marketer</div>
          <div className="text-lg text-gray-500 mb-2">BDS | House Surgeon | AI Research Assistant</div>
          <div className="text-sm text-gray-600 mb-16">DAPM RV Dental College, Bangalore</div>
          <button onClick={() => setHasStarted(true)} className="inline-flex items-center gap-4 bg-gradient-to-r from-teal-500 to-green-500 text-white px-16 py-6 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-teal-500/50 transition-all transform hover:scale-105">
            <Play className="w-6 h-6" />START EXPERIENCE
          </button>
          <div className="mt-12 space-y-2">
            <p className="text-teal-500 text-sm">For the best experience</p>
            <p className="text-gray-600 text-xs">Turn your sound on / Switch to desktop</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="fixed top-0 left-0 w-full h-0.5 bg-gray-900 z-50">
        <div className="h-full bg-gradient-to-r from-teal-500 to-green-500 transition-all" style={{ width: `${scrollProgress}%` }} />
      </div>

      <button onClick={() => setSoundEnabled(!soundEnabled)} className="fixed top-8 right-8 z-50 bg-white/5 backdrop-blur-md p-4 rounded-full border border-white/10 hover:bg-white/10 transition-all">
        {soundEnabled ? <Volume2 className="w-5 h-5 text-teal-400" /> : <VolumeX className="w-5 h-5 text-gray-600" />}
      </button>

      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-xl border-b border-white/5 z-40">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">DMA</div>
          <div className="hidden md:flex gap-10 text-sm tracking-wide">
            {['ABOUT', 'PROBLEM', 'SOLUTION', 'CASE STUDY', 'CONTACT'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-500 hover:text-teal-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
          <a href="mailto:divya.ma413@gmail.com" className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-7 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all">
            BOOK CONSULTATION
          </a>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8"><span className="text-teal-400 text-xs tracking-widest font-bold uppercase">Doctor-Driven Digital Growth</span></div>
          <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-tight tracking-tight">
            <div className="bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent">Bridging</div>
            <div className="bg-gradient-to-r from-teal-400 via-green-400 to-teal-400 bg-clip-text text-transparent">Clinical Precision</div>
            <div className="bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent">with Strategy</div>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto">Why would a Dental Surgeon leave the clinic to scale tech startups?</p>
          <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto italic">"Because great healthcare innovations fail without great communication."</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {[
              { stat: '78%', label: 'prefer simple explanations' },
              { stat: '64%', label: 'trust visible teams' },
              { stat: '89%', label: 'research symptoms first' },
              { stat: '92%', label: 'value transparency' }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-teal-500/20 hover:border-teal-500/50 transition-all hover:scale-105">
                <div className="text-5xl font-bold text-teal-400 mb-2">{item.stat}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <a href="mailto:divya.ma413@gmail.com" className="group bg-gradient-to-r from-teal-500 to-green-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-teal-500/50 transition-all transform hover:scale-105">
              <span className="flex items-center justify-center gap-3">BOOK CONSULTATION<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" /></span>
            </a>
          </div>
          <div className="animate-bounce"><ChevronDown className="w-10 h-10 mx-auto text-teal-500" /></div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-teal-400 text-xs tracking-widest font-bold uppercase">The Medi-Marketer</div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">A Strategist Who <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">Actually Understands</span> the Clinical Side</h2>
              <p className="text-2xl text-gray-400 leading-relaxed">Combining medical expertise with digital growth strategy.</p>
              
              <div className="space-y-6 mt-12">
                {[
                  { Icon: Award, title: 'BDS, House Surgeon', desc: 'DAPM RV Dental College, Bangalore' },
                  { Icon: Brain, title: 'AI Research Assistant', desc: 'Patient perception of AI in dentistry' },
                  { Icon: Users, title: 'Healthcare Marketing', desc: 'Clinics and HealthTech startups' }
                ].map((item, idx) => (
                  <div key={idx} className="group flex items-start gap-6 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-teal-500/30 transition-all">
                    <div className="p-5 bg-teal-500/10 rounded-2xl group-hover:bg-teal-500/20 transition-all">
                      <item.Icon className="w-8 h-8 text-teal-400" />
                    </div>
                    <div>
                      <div className="font-bold text-xl mb-2">{item.title}</div>
                      <div className="text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-teal-950/40 to-green-950/40 p-12 rounded-3xl border border-teal-500/20 shadow-2xl">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent">The Communication Gap</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">Healthcare brands suffer from a disconnect: generalist marketers lack medical depth, while doctors lack marketing expertise.</p>
              
              <div className="space-y-5">
                {[
                  { emoji: '🛡️', label: 'Safety First', desc: 'Regulatory compliance', stat: 'Zero violations' },
                  { emoji: '⚡', label: 'Efficiency', desc: 'No wasted time', stat: '10x faster' },
                  { emoji: '👑', label: 'Authority', desc: 'Medical credibility', stat: '95% trust' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 p-6 bg-black/20 rounded-2xl hover:bg-black/30 transition-all group">
                    <span className="text-4xl group-hover:scale-110 transition-transform">{item.emoji}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-bold text-lg text-teal-300">{item.label}</div>
                        <div className="text-xs text-teal-400 bg-teal-500/20 px-3 py-1 rounded-full">{item.stat}</div>
                      </div>
                      <div className="text-sm text-gray-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="py-40 px-6 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-red-400 text-xs tracking-widest font-bold mb-6 uppercase">The Problem</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Why Generalist Marketers <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Fail</span> in Healthcare</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Three critical blind spots that cost healthcare brands time, money, and credibility.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Regulatory Blindness', icon: Shield, desc: 'Missing compliance requirements', examples: ['Unverified claims', 'Missing disclaimers', 'Misleading stats'] },
              { title: 'Terminology Barriers', icon: MessageSquare, desc: 'Misuse of clinical jargon', examples: ['Incorrect terms', 'Oversimplified', 'Lost credibility'] },
              { title: 'Psychological Disconnect', icon: Brain, desc: 'Generic targeting wastes spend', examples: ['Demographics over symptoms', 'Product-focused', 'No empathy'] }
            ].map((problem, i) => {
              const Icon = problem.icon;
              return (
                <div key={i} className="bg-red-950/20 p-8 rounded-3xl border-2 border-red-500/30 hover:border-red-500/50 transition-all">
                  <div className="p-5 bg-red-500/20 rounded-2xl inline-block mb-6">
                    <Icon className="w-10 h-10 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-red-300">{problem.title}</h3>
                  <p className="text-gray-400 mb-6">{problem.desc}</p>
                  <div className="space-y-2">
                    {problem.examples.map((ex, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-500">
                        <X className="w-4 h-4 text-red-400" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-red-950/30 to-orange-950/20 p-12 rounded-3xl border border-red-500/20 text-center">
            <div className="text-4xl md:text-5xl font-bold text-red-400 mb-8">The Result?</div>
            <div className="grid md:grid-cols-3 gap-8">
              <div><div className="text-5xl font-bold text-red-300 mb-2">₹90</div><div className="text-gray-400">Cost per lead</div></div>
              <div><div className="text-5xl font-bold text-red-300 mb-2">20%</div><div className="text-gray-400">Engagement</div></div>
              <div><div className="text-5xl font-bold text-red-300 mb-2">2.5%</div><div className="text-gray-400">Conversion</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-teal-400 text-xs tracking-widest font-bold mb-6 uppercase">The Solution</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">The <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">3-Phase</span> Methodology</h2>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory">
            {[
              { number: 1, title: 'Clinical Audit', tagline: 'First, do no harm.', desc: 'Medical content review for accuracy.', icon: Shield },
              { number: 2, title: 'Trust-First Content', tagline: 'The Translation Layer.', desc: 'Jargon to patient-friendly language.', icon: Eye },
              { number: 3, title: 'Pathology-Based Marketing', tagline: 'Targeting symptoms.', desc: 'Campaigns based on health concerns.', icon: Target }
            ].map((phase, i) => {
              const PhaseIcon = phase.icon;
              return (
                <div key={i} onClick={() => setActivePhase(i)} className={`flex-shrink-0 w-96 p-8 rounded-3xl cursor-pointer transition-all snap-start ${activePhase === i ? 'bg-gradient-to-br from-teal-600 to-green-600 shadow-2xl scale-105' : 'bg-gray-900/50 border border-gray-800'}`}>
                  <div className={`mb-6 p-4 rounded-2xl inline-block ${activePhase === i ? 'bg-white/20' : 'bg-teal-500/20'}`}>
                    <PhaseIcon className={`w-8 h-8 ${activePhase === i ? 'text-white' : 'text-teal-400'}`} />
                  </div>
                  <div className={`text-sm font-bold mb-3 ${activePhase === i ? 'text-teal-100' : 'text-teal-400'}`}>PHASE {phase.number}</div>
                  <h3 className="text-3xl font-bold mb-3">{phase.title}</h3>
                  <p className={`text-lg italic mb-6 ${activePhase === i ? 'text-teal-100' : 'text-teal-400'}`}>"{phase.tagline}"</p>
                  <p className={activePhase === i ? 'text-white/90' : 'text-gray-400'}>{phase.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="case-study" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-teal-400 text-xs tracking-widest font-bold mb-6 uppercase">Case Study</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">The Clinic <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">Transformation</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-red-950/30 p-10 rounded-3xl border-2 border-red-500/30">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-4 bg-red-500/20 rounded-xl"><X className="w-8 h-8 text-red-400" /></div>
                <h3 className="text-3xl font-bold text-red-300">Before</h3>
              </div>
              <ul className="space-y-4">
                {['Dark photos', 'No team visibility', 'Clinical jargon', 'Generic messaging', 'Lead cost: ₹90', 'Engagement: 20%'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <X className="w-5 h-5 text-red-400 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-teal-950/30 p-10 rounded-3xl border-2 border-teal-500/30">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-4 bg-teal-500/20 rounded-xl"><Check className="w-8 h-8 text-teal-400" /></div>
                <h3 className="text-3xl font-bold text-teal-300">After</h3>
              </div>
              <ul className="space-y-4">
                {['Bright environment', 'Meet the Team', 'Patient-friendly', 'Symptom-focused', 'Lead cost: ₹10', 'Engagement: 95%'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-teal-400 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 p-12 rounded-3xl border border-teal-500/30">
            <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">Performance Over 4 Quarters</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-red-400">Lead Cost (Decreasing)</h4>
                <div className="space-y-4">
                  {[90, 60, 30, 10].map((value, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-sm text-gray-500 w-12">Q{i + 1}</span>
                      <div className="flex-1 bg-gray-800 rounded-full h-10 relative overflow-hidden">
                        <div className="bg-red-500 h-full rounded-full transition-all" style={{ width: `${value}%` }} />
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">₹{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-6 text-green-400">Engagement (Increasing)</h4>
                <div className="space-y-4">
                  {[20, 45, 70, 95].map((value, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-sm text-gray-500 w-12">Q{i + 1}</span>
                      <div className="flex-1 bg-gray-800 rounded-full h-10 relative overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full transition-all" style={{ width: `${value}%` }} />
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">{value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-gray-900/50 border-t border-white/5 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to treat your brand's visibility?</h2>
          <p className="text-gray-400 mb-12 text-lg">Let's bridge the gap between clinical excellence and patient understanding.</p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:divya.ma413@gmail.com" className="flex items-center gap-3 bg-teal-600 px-8 py-4 rounded-full hover:bg-teal-700 transition font-semibold">
              <Mail className="w-5 h-5" />divya.ma413@gmail.com
            </a>
            <a href="https://linkedin.com" className="flex items-center gap-3 bg-blue-600 px-8 py-4 rounded-full hover:bg-blue-700 transition font-semibold">
              <Linkedin className="w-5 h-5" />LinkedIn
            </a>
          </div>
          <div className="text-gray-600 text-sm">© 2026 Dr. Divya M A. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};
