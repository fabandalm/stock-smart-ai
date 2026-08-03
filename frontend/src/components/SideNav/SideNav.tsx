import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {};

const SideNav = (props: Props) => {
  const location = useLocation();

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      name: "Stock Inventory",
      path: "/stock",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      name: "AI Inbox",
      path: "/inbox",
      badge: "3",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      ),
    },
    {
      name: "Inbound / Outbound",
      path: "/flow",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      name: "Suppliers",
      path: "/supplier",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: "Categories",
      path: "/category",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[#0a101d] border-r border-[#1e2c47] flex flex-col justify-between">
      <div>
        {/* Brand Header */}
        <div className="flex items-center space-x-3 px-6 py-5 border-b border-[#1e2c47]">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#425D94] via-[#5a7bbd] to-[#7896d6] flex items-center justify-center text-white shadow-lg shadow-[#425D94]/30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h1 className="font-extrabold text-lg text-white tracking-wide leading-tight">
              StockSmart<span className="text-[#6d8ecf]">.AI</span>
            </h1>
            <p className="text-xs text-slate-400 font-medium">Enterprise Inventory</p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="px-4 py-6">
          <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Main Menu
          </p>
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#425D94] to-[#5a7bbd] text-white shadow-md shadow-[#425D94]/30 font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-[#141f36]"
                  }`}>
                  <div className="flex items-center space-x-3">
                    <span className={isActive ? "text-white" : "text-slate-400"}>{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${
                        isActive ? "bg-white/20 text-white" : "bg-[#425D94]/30 text-[#85a4e3]"
                      }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Footer System Status */}
      <div className="p-4 m-4 rounded-2xl bg-gradient-to-br from-[#121c31] to-[#182643] border border-[#233454]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-300">System Health</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>
        <div className="w-full bg-[#0d1526] rounded-full h-1.5 mb-2 overflow-hidden">
          <div className="bg-gradient-to-r from-[#425D94] to-emerald-400 h-1.5 rounded-full w-4/5"></div>
        </div>
        <p className="text-xs text-slate-400 leading-normal">
          AI Stock Prediction model synchronized (99.4% accuracy)
        </p>
      </div>
    </aside>
  );
};

export default SideNav;


