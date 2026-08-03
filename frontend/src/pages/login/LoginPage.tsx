import React from "react";
import * as Yup from "yup";
import { useAuth } from "../../contexts/UseAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {};
type LoginFormInputs = {
  username: string;
  password: string;
};

const validation = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = (props: Props) => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: error,
  } = useForm<LoginFormInputs>({ resolver: yupResolver(validation) });

  const handleLogin = (form: LoginFormInputs) => {
    login(form.username, form.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#0a101d]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#425D94]/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#5c7ebc]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#425D94] via-[#5a7bbd] to-[#7896d6] text-white shadow-xl shadow-[#425D94]/30 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">StockSmart<span className="text-[#6d8ecf]">.AI</span></h1>
          <p className="text-sm text-slate-400 mt-1">Sign in to your intelligent inventory control hub</p>
        </div>

        {/* Login Card */}
        <div className="p-8 rounded-3xl bg-[#121c31]/95 border border-[#233557] shadow-2xl backdrop-blur-xl">
          <form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>
            <div>
              <label htmlFor="username" className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a101d] border border-[#233557] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#425D94] focus:border-transparent transition-all text-sm"
                  placeholder="Enter your username"
                  {...register("username")}
                />
              </div>
              {error.errors.username && (
                <span className="text-xs text-rose-400 mt-1.5 block">{error.errors.username?.message}</span>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Password
                </label>
                <a href="#" className="text-xs text-[#7195de] hover:text-[#9bb7f5] font-medium transition-colors">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-[#0a101d] border border-[#233557] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#425D94] focus:border-transparent transition-all text-sm"
                {...register("password")}
              />
              {error.errors.password && (
                <span className="text-xs text-rose-400 mt-1.5 block">{error.errors.password?.message}</span>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 rounded bg-[#0a101d] border-[#233557] text-[#425D94] focus:ring-[#425D94]"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-slate-400">
                Keep me signed in
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-[#425D94] via-[#5676b7] to-[#425D94] hover:from-[#374e7e] hover:to-[#4a6ab0] shadow-lg shadow-[#425D94]/30 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]">
              Sign In to Telemetry
            </button>

            <p className="text-center text-sm text-slate-400 pt-2">
              Don’t have an account yet?{" "}
              <a href="/register" className="font-semibold text-[#7195de] hover:text-[#9bb7f5] transition-colors">
                Create Account
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


