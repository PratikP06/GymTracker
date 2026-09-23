"use client";

import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("login", { email, password });
    }

    return (
        <div className="min-h-screen bg-[#F7F7F5] font-sans antialiased flex flex-col">

            <header className="border-b border-[#E5E7EB] bg-[#F7F7F5]">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <a href="/" className="text-[#1F2933] font-semibold text-lg tracking-tight">
                        GymTracker
                    </a>
                    <span className="text-sm text-[#667085]">
                        No account?{" "}
                        <a href="/signup" className="text-[#1F2933] font-medium hover:underline">
                            Sign up
                        </a>
                    </span>
                </div>
            </header>

            {/* form */}
            <main className="flex-1 flex items-center justify-center px-6 py-16">
                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-semibold text-[#1F2933] tracking-tight">
                        Log in
                    </h1>
                    <p className="mt-2 text-sm text-[#667085]">
                        Welcome back. Enter your details to continue.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-[#1F2933] mb-1.5"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                required
                                className="w-full rounded-md border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#1F2933] placeholder:text-[#667085] focus:outline-none focus:border-[#1F2933]"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-[#1F2933]"
                                >
                                    Password
                                </label>
                                <a href="#" className="text-sm text-[#667085] hover:text-[#1F2933]">
                                    Forgot?
                                </a>
                            </div>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                                className="w-full rounded-md border border-[#E5E7EB] bg-white px-3 py-2.5 text-sm text-[#1F2933] placeholder:text-[#667085] focus:outline-none focus:border-[#1F2933]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full text-sm font-medium text-white bg-[#E85D3F] px-5 py-2.5 rounded-md hover:bg-[#d14e31] transition-colors"
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </main>

            {/* footer */}
            <footer className="border-t border-[#E5E7EB]">
                <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-[#667085]">
                    © {new Date().getFullYear()} GymTracker
                </div>
            </footer>
        </div>
    );
}