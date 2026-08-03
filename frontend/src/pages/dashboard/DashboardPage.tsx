import React, { useEffect, useState } from "react";
import AreaCharts from "../../components/AreaCharts/AreaCharts";
import PieCharts from "../../components/PieCharts/PieCharts";
import RadialBar from "../../components/RadialBar/RadialBar";
import { Stats } from "../../helpers/declarations";
import ItemSkeleton from "../../components/ItemSkeleton/ItemSkeleton";
import { GetDashboardStats } from "../../services/ChartsService";
import NavBar from "../../components/NavBar/NavBar";
import { useAuth } from "../../contexts/UseAuth";
import SideNav from "../../components/SideNav/SideNav";

type Props = {};

const DashboardPage = (props: Props) => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const { isLoggedIn, user } = useAuth();

  useEffect(() => {
    const GetStats = async () => {
      setLoading(true);
      const response = await GetDashboardStats();
      setStats(response);
      setLoading(false);
    };
    GetStats();
  }, []);

  return (
    <div className={`w-full m-0 min-h-screen ${isLoggedIn() ? "sm:ps-64" : "p-0"}`}>
      {isLoggedIn() && <SideNav />}
      <NavBar />

      <main className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
        {/* Welcome & AI Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 p-6 rounded-3xl border border-slate-800/80 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                ✨ Intelligent Stock Telemetry
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Welcome back, <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">{user?.userName || "Operator"}</span> 👋
            </h1>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              AI model recommends reordering 2 fast-moving inventory items to prevent stockout in the next 7 days.
            </p>
          </div>

          <div className="flex items-center gap-3 relative z-10">
            <button className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-sm font-medium border border-slate-700/60 transition-all flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export Metrics
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2 hover:scale-105 active:scale-95">
              <svg className="w-4 h-4 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Run AI Forecast
            </button>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Products Stat Card */}
          {isLoading ? (
            <ItemSkeleton isLoading={isLoading} />
          ) : (
            <div className="group p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Products</span>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="text-3xl font-extrabold text-white tracking-tight">{stats?.productNumber ?? 0}</h3>
                <span className="inline-flex items-center text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  +12% vs last month
                </span>
              </div>
            </div>
          )}

          {/* Suppliers Stat Card */}
          {isLoading ? (
            <ItemSkeleton isLoading={isLoading} />
          ) : (
            <div className="group p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Suppliers</span>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="text-3xl font-extrabold text-white tracking-tight">{stats?.supplierNumber ?? 0}</h3>
                <span className="inline-flex items-center text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  100% verified
                </span>
              </div>
            </div>
          )}

          {/* Out of Stock Card */}
          {isLoading ? (
            <ItemSkeleton isLoading={isLoading} />
          ) : (
            <div className="group p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-rose-500/50 transition-all duration-300 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Out of Stock Alerts</span>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center border border-rose-500/20 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="text-3xl font-extrabold text-rose-400 tracking-tight">{stats?.outOfStock ?? 0}</h3>
                <span className="inline-flex items-center text-xs font-semibold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full">
                  Action Required
                </span>
              </div>
            </div>
          )}

          {/* Categories Card */}
          {isLoading ? (
            <ItemSkeleton isLoading={isLoading} />
          ) : (
            <div className="group p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Categories</span>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="text-3xl font-extrabold text-white tracking-tight">{stats?.categoryNumber ?? 0}</h3>
                <span className="inline-flex items-center text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  Optimal balance
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Charts Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Area Chart */}
          <div className="lg:col-span-8 p-6 rounded-3xl bg-slate-900/90 border border-slate-800/80 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-white">Stock Flow & Demand Trends</h2>
                <p className="text-xs text-slate-400">Real-time inbound vs outbound telemetry</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                  Last 30 Days
                </span>
              </div>
            </div>
            <div className="p-2 rounded-2xl bg-slate-950/40 border border-slate-800/50">
              <AreaCharts />
            </div>
          </div>

          {/* Side Pie & Radial Charts */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800/80 shadow-2xl">
              <div className="mb-4">
                <h3 className="text-base font-bold text-white">Category Distribution</h3>
                <p className="text-xs text-slate-400">Inventory share per product line</p>
              </div>
              <div className="flex justify-center p-2">
                <PieCharts />
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800/80 shadow-2xl">
              <div className="mb-4">
                <h3 className="text-base font-bold text-white">Warehouse Capacity Utilization</h3>
                <p className="text-xs text-slate-400">Storage fill rate</p>
              </div>
              <div className="flex justify-center p-2">
                <RadialBar />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;

