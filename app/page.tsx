
import Link from 'next/link';
import { Activity, Beaker, Pill, ShieldAlert, User, Zap, Heart, Scan } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-teal-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl w-full text-center space-y-12 relative z-10">
        <div className="space-y-6 flex flex-col items-center w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium mb-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System Operational
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Care<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Flow</span>
            <span className="text-slate-700">.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed text-center">
            Next-Gen Real-time Clinical Workflow Coordination
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Doctor Card */}
          <Link href="/doctor" className="group">
            <div className="bg-slate-900/40 backdrop-blur-md p-12 rounded-[2.5rem] shadow-2xl border border-slate-800/50 hover:shadow-teal-500/10 hover:border-teal-500/40 transition-all duration-500 h-full flex flex-col items-center justify-between group-hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col items-center gap-10">
                <div className="p-6 bg-slate-800/50 rounded-2xl text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-xl group-hover:shadow-teal-500/20 group-hover:scale-110">
                  <Activity size={36} />
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors tracking-tight">Doctor</h3>
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors px-4">Patient intake, triage, and real-time command center management.</p>
                </div>
              </div>

              <div className="w-full mt-10">
                <div className="w-full py-3 rounded-xl bg-teal-500/5 border border-teal-500/20 text-teal-500 text-xs font-black uppercase tracking-[0.2em] group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 text-center">
                  Enter Portal
                </div>
              </div>
            </div>
          </Link>

          {/* Nurse Card */}
          <Link href="/nurse" className="group">
            <div className="bg-slate-900/40 backdrop-blur-md p-12 rounded-[2.5rem] shadow-2xl border border-slate-800/50 hover:shadow-rose-500/10 hover:border-rose-500/40 transition-all duration-500 h-full flex flex-col items-center justify-between group-hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col items-center gap-10">
                <div className="p-6 bg-slate-800/50 rounded-2xl text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-xl group-hover:shadow-rose-500/20 group-hover:scale-110">
                  <Heart size={36} />
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-rose-400 transition-colors tracking-tight">Nurse</h3>
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors px-4">Patient care monitoring, vitals tracking, and task management.</p>
                </div>
              </div>

              <div className="w-full mt-10">
                <div className="w-full py-3 rounded-xl bg-rose-500/5 border border-rose-500/20 text-rose-500 text-xs font-black uppercase tracking-[0.2em] group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 text-center">
                  Enter Portal
                </div>
              </div>
            </div>
          </Link>

          {/* Lab Card */}
          <Link href="/lab" className="group">
            <div className="bg-slate-900/40 backdrop-blur-md p-12 rounded-[2.5rem] shadow-2xl border border-slate-800/50 hover:shadow-blue-500/10 hover:border-blue-500/40 transition-all duration-500 h-full flex flex-col items-center justify-between group-hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col items-center gap-10">
                <div className="p-6 bg-slate-800/50 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-xl group-hover:shadow-blue-500/20 group-hover:scale-110">
                  <Beaker size={36} />
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">Laboratory</h3>
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors px-4">Sample processing, real-time result entry, and clinical analysis.</p>
                </div>
              </div>

              <div className="w-full mt-10">
                <div className="w-full py-3 rounded-xl bg-blue-500/5 border border-blue-500/20 text-blue-500 text-xs font-black uppercase tracking-[0.2em] group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 text-center">
                  Enter Portal
                </div>
              </div>
            </div>
          </Link>

          {/* Radiology Card */}
          <Link href="/radiology" className="group">
            <div className="bg-slate-900/40 backdrop-blur-md p-12 rounded-[2.5rem] shadow-2xl border border-slate-800/50 hover:shadow-indigo-500/10 hover:border-indigo-500/40 transition-all duration-500 h-full flex flex-col items-center justify-between group-hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col items-center gap-10">
                <div className="p-6 bg-slate-800/50 rounded-2xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-xl group-hover:shadow-indigo-500/20 group-hover:scale-110">
                  <Scan size={36} />
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">Radiology</h3>
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors px-4">Imaging modality queue, DICOM viewer access, and diagnostics.</p>
                </div>
              </div>

              <div className="w-full mt-10">
                <div className="w-full py-3 rounded-xl bg-indigo-500/5 border border-indigo-500/20 text-indigo-500 text-xs font-black uppercase tracking-[0.2em] group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 text-center">
                  Enter Portal
                </div>
              </div>
            </div>
          </Link>

          {/* Pharmacy Card */}
          <Link href="/pharmacy" className="group">
            <div className="bg-slate-900/40 backdrop-blur-md p-12 rounded-[2.5rem] shadow-2xl border border-slate-800/50 hover:shadow-purple-500/10 hover:border-purple-500/40 transition-all duration-500 h-full flex flex-col items-center justify-between group-hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col items-center gap-10">
                <div className="p-6 bg-slate-800/50 rounded-2xl text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-xl group-hover:shadow-purple-500/20 group-hover:scale-110">
                  <Pill size={36} />
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors tracking-tight">Pharmacy</h3>
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors px-4">Medication prescription fulfillment and dispensing management.</p>
                </div>
              </div>

              <div className="w-full mt-10">
                <div className="w-full py-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-purple-500 text-xs font-black uppercase tracking-[0.2em] group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 text-center">
                  Enter Portal
                </div>
              </div>
            </div>
          </Link>

          {/* Patient Card */}
          <Link href="/patient" className="group">
            <div className="bg-slate-900/40 backdrop-blur-md p-12 rounded-[2.5rem] shadow-2xl border border-slate-800/50 hover:shadow-emerald-500/10 hover:border-emerald-500/40 transition-all duration-500 h-full flex flex-col items-center justify-between group-hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col items-center gap-10">
                <div className="p-6 bg-slate-800/50 rounded-2xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-xl group-hover:shadow-emerald-500/20 group-hover:scale-110">
                  <User size={36} />
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight">Patient</h3>
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors px-4">Track your care journey, view test results, and prescriptions.</p>
                </div>
              </div>

              <div className="w-full mt-10">
                <div className="w-full py-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-500 text-xs font-black uppercase tracking-[0.2em] group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 text-center">
                  Enter Portal
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-3 text-sm text-slate-500 pt-8">
          <ShieldAlert size={16} />
          <span className="font-mono">SECURE CONNECTION • DEMO BUILD v0.2.0</span>
        </div>
      </div>
    </div>
  );
}
