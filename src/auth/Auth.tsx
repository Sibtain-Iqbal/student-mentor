import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

export const AuthModal = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [tab, setTab] = useState<"login" | "register">("login");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="h-10 w-10 rounded-lg bg-white/20" />
                        <span className="text-2xl font-bold text-white">LearnHub</span>
                    </div>
                    <span className="inline-block rounded-full bg-white/20 text-white border border-white/30 px-3 py-1 text-sm font-medium">
                        🚀 Join 100,000+ learners
                    </span>
                </div>

                {/* Card */}
                <div className="bg-white/95 backdrop-blur rounded-xl shadow-xl p-6">
                    {/* Tabs */}
                    <div className="grid grid-cols-2 mb-6">
                        <button
                            className={`py-2 font-medium rounded-t-md ${tab === "login"
                                    ? "bg-indigo-600 text-white"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                            onClick={() => setTab("login")}
                        >
                            Sign In
                        </button>
                        <button
                            className={`py-2 font-medium rounded-t-md ${tab === "register"
                                    ? "bg-indigo-600 text-white"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                            onClick={() => setTab("register")}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Login Form */}
                    {tab === "login" && (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <h2 className="text-xl font-semibold text-center">Welcome Back</h2>
                            <p className="text-sm text-gray-500 text-center">
                                Continue your learning journey
                            </p>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email
                                </label>
                                <div className="relative mt-1">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        className="w-full rounded-md border px-10 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium">
                                    Password
                                </label>
                                <div className="relative mt-1">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        required
                                        className="w-full rounded-md border px-10 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-2 text-gray-500"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember + Forgot */}
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="rounded" />
                                    <span>Remember me</span>
                                </label>
                                <button
                                    type="button"
                                    className="text-indigo-600 hover:underline"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-700 disabled:opacity-70"
                            >
                                {isLoading ? "Signing in..." : "Sign In"}
                                {!isLoading && <ArrowRight className="h-4 w-4" />}
                            </button>

                            {/* Divider */}
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-white px-2 text-gray-500">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            {/* Google */}
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 border rounded-md px-4 py-2 hover:bg-gray-50"
                            >
                                <svg className="h-4 w-4" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Continue with Google
                            </button>
                        </form>
                    )}

                    {/* Register Form */}
                    {tab === "register" && (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <h2 className="text-xl font-semibold text-center">Create Account</h2>
                            <p className="text-sm text-gray-500 text-center">
                                Start your learning journey today
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium">First name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your name"
                                        required
                                        className="w-full rounded-md border px-2 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    />
                                </div>

                            </div>

                            <div>
                                <label className="block text-sm font-medium">Email</label>
                                <div className="relative mt-1">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        required
                                        className="w-full rounded-md border px-10 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Password</label>
                                <div className="relative mt-1">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Create a password"
                                        required
                                        className="w-full rounded-md border px-10 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-2 text-gray-500"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <label className="flex items-center space-x-2 text-sm">
                                <input type="checkbox" required className="rounded" />
                                <span className="text-indigo-600 hover:underline">
                                    I agree to the{" "}
                                   
                                        Terms of Service
                                   
                                    and{" "}
                                   
                                        Privacy Policy
                                  
                                </span>
                            </label>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-700 disabled:opacity-70"
                            >
                                {isLoading ? "Creating account..." : "Create Account"}
                                {!isLoading && <ArrowRight className="h-4 w-4" />}
                            </button>

                            {/* Divider */}
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-white px-2 text-gray-500">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            {/* Google */}
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 border rounded-md px-4 py-2 hover:bg-gray-50"
                            >
                                <svg className="h-4 w-4" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Continue with Google
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
