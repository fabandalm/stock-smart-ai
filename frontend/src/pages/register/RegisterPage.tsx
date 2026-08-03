import React from "react";
import * as Yup from "yup";
import { useAuth } from "../../contexts/UseAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {};
type RegisterFormInputs = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  role: "Technician" | "Engineer" | "Operator" | "Supervisor";
};

const validation = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  role: Yup.string()
    .oneOf(["Technician", "Engineer", "Operator", "Supervisor"], "Please select a valid role")
    .required("Role is required"),
});

const RegisterPage = (props: Props) => {
  const { RegisterUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: error,
  } = useForm<RegisterFormInputs>({ resolver: yupResolver(validation) });

  const handleRegister = (form: RegisterFormInputs) => {
    RegisterUser(form.email, form.username, form.password, form.role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-slate-950">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-xl relative z-10 py-8">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl shadow-indigo-500/25 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">StockSmart<span className="text-indigo-400">.AI</span></h1>
          <p className="text-sm text-slate-400 mt-1">Create an operator profile to access AI telemetry</p>
        </div>

        {/* Register Card */}
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
          <form className="space-y-5" onSubmit={handleSubmit(handleRegister)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="username" className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                  placeholder="johndoe"
                  {...register("username")}
                />
                {error.errors.username && (
                  <span className="text-xs text-rose-400 mt-1 block">{error.errors.username?.message}</span>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                  placeholder="john@company.com"
                  {...register("email")}
                />
                {error.errors.email && (
                  <span className="text-xs text-rose-400 mt-1 block">{error.errors.email?.message}</span>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                  {...register("password")}
                />
                {error.errors.password && (
                  <span className="text-xs text-rose-400 mt-1 block">{error.errors.password?.message}</span>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                  {...register("confirmPassword")}
                />
                {error.errors.confirmPassword && (
                  <span className="text-xs text-rose-400 mt-1 block">{error.errors.confirmPassword?.message}</span>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="role" className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Select Role / Title
                </label>
                <select
                  {...register("role")}
                  id="role"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700/80 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm">
                  <option value="" className="bg-slate-900">Select Job Role</option>
                  <option value="Operator" className="bg-slate-900">Operator</option>
                  <option value="Technician" className="bg-slate-900">Technician</option>
                  <option value="Engineer" className="bg-slate-900">Engineer</option>
                  <option value="Supervisor" className="bg-slate-900">Supervisor</option>
                </select>
                {error.errors.role && (
                  <span className="text-xs text-rose-400 mt-1 block">{error.errors.role?.message}</span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] mt-4">
              Create Operator Account
            </button>

            <p className="text-center text-sm text-slate-400 pt-2">
              Already have an account?{" "}
              <a href="/login" className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

