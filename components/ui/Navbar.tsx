
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { cn } from "@/lib/utils";

export function Navbar({ title, icon: Icon, colorClass = "text-blue-400" }: { title: string, icon?: any, colorClass?: string }) {
  return (
    <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all hover:scale-105 shadow-sm">
              <ArrowLeft size={18} />
              <span className="font-semibold text-sm hidden sm:block">Home</span>
            </Link>
            
            <div className="h-6 w-px bg-slate-800 mx-1"></div>
            
            <div className="flex items-center gap-3">
              {Icon && <Icon className={cn(colorClass, "transition-transform scale-110")} size={22} />}
              <span className="font-bold text-xl tracking-tight text-white">
                {title}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400 border border-slate-700">
                  ID
                </div>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
