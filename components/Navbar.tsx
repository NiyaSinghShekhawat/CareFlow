"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Stethoscope, Beaker, User, Scan } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Doctor", href: "/doctor", icon: Stethoscope },
    { name: "Lab", href: "/lab", icon: Beaker },
    { name: "Radiology", href: "/radiology", icon: Scan },
    { name: "Patient", href: "/patient", icon: User },
  ];

  return (
    <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 text-slate-400 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center font-bold text-white hover:text-teal-400 transition-all hover:scale-105 ml-6">
             <span className="hidden md:inline tracking-tighter text-2xl font-black">Care<span className="text-teal-400">Flow</span></span>
          </Link>

          <div className="flex items-center gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 relative group",
                    isActive 
                      ? "bg-teal-500/10 text-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.1)] border border-teal-500/20" 
                      : "hover:bg-slate-900 hover:text-white border border-transparent"
                  )}
                >
                  <item.icon size={18} className={cn("transition-transform group-hover:scale-110", isActive ? "text-teal-400" : "")} />
                  <span className="hidden sm:inline">{item.name}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="nav-active"
                      className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-teal-400 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
