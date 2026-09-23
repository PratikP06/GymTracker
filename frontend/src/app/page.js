import React from "react";

// GymTracker landing page
// colors: bg #F7F7F5, surface #FFFFFF, primary #1F2933, text #667085, accent #E85D3F, success #3A7D44, border #E5E7EB

export default function GymTrackerLanding() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#F7F7F5] font-sans antialiased">
      {/* navbar */}
      <header className="border-b border-[#E5E7EB] bg-[#F7F7F5]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-[#1F2933] font-semibold text-lg tracking-tight">
            GymTracker
          </span>

          <nav className="hidden md:flex items-center gap-8 text-sm text-[#667085]">
            <a href="#features" className="hover:text-[#1F2933]">
              Features
            </a>

            <a href="#" className="hover:text-[#1F2933]">
              Log in
            </a>
          </nav>

          <a
            href="#"
            className="text-sm font-medium text-white bg-[#1F2933] px-4 py-2 rounded-md hover:bg-[#111827] transition-colors"
          >
            Start tracking
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#1F2933] leading-tight tracking-tight">
            Log your workouts. See your progress.
          </h1>
          <p className="mt-5 text-lg text-[#667085] leading-relaxed max-w-md">
            A straightforward way to record sets, reps, and weight — and
            watch your numbers move in the right direction over time.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-medium text-white bg-[#E85D3F] px-5 py-3 rounded-md hover:bg-[#d14e31] transition-colors"
            >
              Start tracking — it's free
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-[#1F2933] px-5 py-3 rounded-md border border-[#E5E7EB] hover:border-[#1F2933] transition-colors"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="mt-16 border border-[#E5E7EB] rounded-lg bg-white p-6 max-w-md">
          <div className="flex items-center justify-between text-sm text-[#667085] pb-3 border-b border-[#E5E7EB]">
            <span>Today — Push day</span>
            <span className="text-[#3A7D44] font-medium">
              +2.5kg vs last week
            </span>
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center justify-between text-[#1F2933]">
              <span>Bench press</span>
              <span className="text-[#667085]">4 × 8 @ 62.5kg</span>
            </li>
            <li className="flex items-center justify-between text-[#1F2933]">
              <span>Overhead press</span>
              <span className="text-[#667085]">3 × 10 @ 35kg</span>
            </li>
            <li className="flex items-center justify-between text-[#1F2933]">
              <span>Dips</span>
              <span className="text-[#667085]">3 × 12 bodyweight</span>
            </li>
          </ul>
        </div>
      </section>

      {/* features */}
      <section
        id="features"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-[#E5E7EB]"
      >
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <h3 className="text-[#1F2933] font-semibold">Log in seconds</h3>
            <p className="mt-2 text-sm text-[#667085] leading-relaxed">
              Pick an exercise, enter your sets, done. No extra taps standing
              between you and the next rep.
            </p>
          </div>

          <div>
            <h3 className="text-[#1F2933] font-semibold">
              Track real progress
            </h3>
            <p className="mt-2 text-sm text-[#667085] leading-relaxed">
              Every lift is plotted over time, so you know exactly what to
              beat next session.
            </p>
          </div>

          <div>
            <h3 className="text-[#1F2933] font-semibold">Plan your week</h3>
            <p className="mt-2 text-sm text-[#667085] leading-relaxed">
              Lay out routines ahead of time and follow them without
              thinking about what's next.
            </p>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-sm text-[#667085]">
            © {year} GymTracker
          </span>
          
        </div>
      </footer>
    </div>
  );
}