"use client";


import HeroFeatureCards from "./HeroFeatureCards";


export default function AppMockup() {
  return (
    <section className=" hidden md:flex relative px-4 sm:px-6 lg:px-8 pb-28 md:pb-32 pt-4 justify-center items-center">



      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl shadow-purple-200/50 overflow-hidden border border-gray-200/80">
        <div className="flex gap-1.5 px-4 py-3 bg-gray-100 border-b border-gray-200">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="relative h-[380px] md:h-[420px] bg-gray-50 overflow-hidden">
          <img
            src="/images/expenses.png"
            alt="TikNEO Gastos"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </div>



      <HeroFeatureCards />


    </section>
  );
}
