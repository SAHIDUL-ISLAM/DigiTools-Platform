import React from 'react';

const WorkFlow = () => {
    return (
            <div class="w-full py-24 px-6 bg-gradient-to-br bg-violet-600 border-none text-white overflow-hidden relative">

            <div class="max-w-5xl mx-auto text-center relative z-10">
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in">
                Ready To Transform Your Workflow?
                </h2>

                <p class="text-lg md:text-xl text-indigo-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
                </p>

                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button class="btn btn-lg bg-white text-violet-600 border-none hover:bg-slate-100 rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    Explore Products
                </button>
                
                <button class="btn btn-lg btn-outline text-white border-white/40 hover:bg-slate-100 hover:border-bg-slate-100 hover:text-violet-600 rounded-full px-8 transition-all duration-300">
                    View Pricing
                </button>
                </div>

                <div class="text-sm font-medium text-indigo-100/70 tracking-wide">
                14-day free trial <span class="mx-2">•</span> No credit card required <span class="mx-2">•</span> Cancel anytime
                </div>
            </div>
            </div>
    );
};

export default WorkFlow;