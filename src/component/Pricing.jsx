import React from 'react';

const Pricing = () => {
    return (
        <div className='max-w-5xl mx-auto py-30'>
        <div>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
                <p className="text-slate-500 text-lg">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                
                <div className="card bg-white border border-slate-200 shadow-sm p-8 flex flex-col justify-between">
                    <div>
                    <h3 className="text-2xl font-bold text-slate-800">Starter</h3>
                    <p className="text-slate-500 mb-6">Perfect for getting started</p>
                    <div className="flex items-baseline mb-8">
                        <span className="text-4xl font-black text-slate-900">$0</span>
                        <span className="text-slate-500 ml-1">/Month</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3 text-slate-600">
                        <i className="fa-solid fa-check text-green-500"></i>
                        Access to 10 free tools
                        </li>
                        <li className="flex items-center gap-3 text-slate-600">
                        <i className="fa-solid fa-check text-green-500"></i>
                        Basic templates
                        </li>
                        <li className="flex items-center gap-3 text-slate-600">
                        <i className="fa-solid fa-check text-green-500"></i>
                        Community support
                        </li>
                        <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-500"></i>
                        1 project per month
                        </li>
                    </ul>
                    </div>
                    <button className="btn btn-primary btn-block rounded-2xl bg-violet-600 border-none hover:bg-violet-700">Get Started Free</button>
                </div>

                <div className="card bg-violet-600 text-white shadow-xl p-8 relative flex flex-col justify-between scale-105 z-10">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="badge badge-warning font-bold py-3 px-4 shadow-sm text-xs">Most Popular</span>
                    </div>
                    
                    <div>
                    <h3 className="text-2xl font-bold">Pro</h3>
                    <p className="opacity-80 mb-6">Best for professionals</p>
                    <div className="flex items-baseline mb-8">
                        <span className="text-4xl font-black">$29</span>
                        <span className="opacity-80 ml-1">/Month</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-500"></i>
                        Access to all premium tools
                        </li>
                        <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-500"></i>
                        Unlimited templates
                        </li>
                        <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-500"></i>
                        Priority support
                        </li>
                        <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-500"></i>
                        Unlimited projects
                        </li>
                        <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-500"></i>
                        Cloud sync
                        </li>
                        <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-500"></i>
                        Advanced analytics
                        </li>

                    </ul>
                    </div>
                    <button className="btn btn-white btn-block rounded-2xl bg-white text-violet-600 border-none hover:bg-slate-100">Start Pro Trial</button>
                </div>

                <div className="card bg-white border border-slate-200 shadow-sm p-8 flex flex-col justify-between">
                    <div>
                    <h3 className="text-2xl font-bold text-slate-800">Enterprise</h3>
                    <p className="text-slate-500 mb-6">For teams and businesses</p>
                    <div className="flex items-baseline mb-8">
                        <span className="text-4xl font-black text-slate-900">$99</span>
                        <span className="text-slate-500 ml-1">/Month</span>
                    </div>
                    <ul className="space-y-4 mb-8 text-slate-600">
                        <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-500"></i>
                        Everything in Pro
                        </li>
                        <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-500"></i>
                        Team collaboration
                        </li>
                        <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-500"></i>
                        Custom integrations
                        </li>
                        <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-500"></i>
                        Dedicated support
                        </li>
                        <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-500"></i>
                        SLA guarantee
                        </li>
                        <li className="flex items-center gap-3">
                        <i className="fa-solid fa-check text-green-500"></i>
                        Custom branding
                        </li>
                    </ul>
                    </div>
                    <button className="btn btn-primary btn-block rounded-2xl bg-violet-600 border-none hover:bg-violet-700">Contact Sales</button>
                </div>

                </div>
            </div>
            </div>
        </div>
    );
};

export default Pricing;