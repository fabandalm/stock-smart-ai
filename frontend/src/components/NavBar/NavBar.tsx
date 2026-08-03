import React from "react";
import { useAuth } from "../../contexts/UseAuth";

type Props = {};

const NavBar = (props: Props) => {
  const { isLoggedIn, logout, user } = useAuth();
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-[#0d1526]/85 border-b border-[#202c46] px-6 py-3 transition-all">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Search / AI Prompt */}
        <div className="flex items-center space-x-3 w-1/3">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="search"
              className="block w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-[#141f36] border border-[#26375a] text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#425D94] focus:border-transparent transition-all"
              placeholder="Search inventory, SKU, or ask AI agent..."
            />
          </div>
        </div>

        {/* Center Badge */}
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#425D94]/20 text-[#7ca0e6] border border-[#425D94]/40">
            <span className="w-2 h-2 mr-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            AI Engine v2.4 Active
          </span>
        </div>

        {/* Right User Navigation Actions */}
        <div className="flex items-center space-x-4">
          {!isLoggedIn() ? (
            <div className="flex items-center space-x-3">
              <a
                href="/login"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-[#182540]">
                Log In
              </a>
              <a
                href="/register"
                className="text-sm font-semibold text-white bg-gradient-to-r from-[#425D94] to-[#5a7bbd] hover:from-[#374f80] hover:to-[#4e6eb0] px-4 py-2 rounded-xl shadow-lg shadow-[#425D94]/30 transition-all hover:scale-105 active:scale-95">
                Sign Up
              </a>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              {/* Notification Bell */}
              <button
                aria-label="Notifications"
                className="relative p-2 text-slate-400 hover:text-slate-200 hover:bg-[#182540] rounded-xl transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#425D94] rounded-full ring-2 ring-[#0d1526]"></span>
              </button>

              {/* User Avatar Pill */}
              <div className="flex items-center space-x-3 pl-3 border-l border-[#202c46]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#425D94] to-[#6082c9] flex items-center justify-center font-bold text-white text-xs shadow-md">
                  {user?.userName ? user.userName.charAt(0).toUpperCase() : "U"}
                </div>
                <div className="hidden md:flex flex-col text-left">
                  <span className="text-sm font-medium text-slate-200 leading-tight">
                    {user?.userName || "Operator"}
                  </span>
                  <span className="text-xs text-slate-400">Store Manager</span>
                </div>
                <button
                  onClick={() => logout()}
                  className="text-xs text-rose-400 hover:text-rose-300 font-medium px-2.5 py-1 rounded-lg hover:bg-rose-500/10 transition-colors">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;


