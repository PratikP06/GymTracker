"use client";

import { useRequireAuth } from "../../hooks/useRequireAuth";

export default function DashboardPage() {
    const { user, loading } = useRequireAuth();

    if (loading) {
        return (
            <div className="min-h-screen bg-[#F7F7F5] flex items-center justify-center">
                <p className="text-sm text-[#667085]">Loading...</p>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-[#F7F7F5] font-sans antialiased px-6 py-16">
            <h1 className="text-2xl font-semibold text-[#1F2933]">
                Welcome back, {user.name}
            </h1>
            <p className="mt-2 text-sm text-[#667085]">{user.email}</p>
        </div>
    );
}   