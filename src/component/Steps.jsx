import React from 'react';

const Steps = () => {
    return (
        <div>
            <div className='bg-[#F9FAFC] py-30'>
                <div className='max-w-5xl mx-auto'>
                    <div className="text-center space-y-4 mb-8">
                        <h1 className="text-5xl font-bold">Get Started in 3 Steps</h1>
                        <p>Start using premium digital tools in minutes, not hours.</p>
                    </div>
                    <div className="py-16 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow relative overflow-visible">
                        <div className="absolute top-5 right-5 w-8 h-8 bg-primary text-primary-content rounded-full flex items-center justify-center font-bold text-xs z-10">
                        01
                        </div>
                        <div className="card-body items-center text-center p-10">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <img src="/user.png" alt="" />
                        </div>
                        <h2 className="card-title text-2xl font-bold text-base-content">Create Account</h2>
                        <p className="text-base-content/70">Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow relative overflow-visible">
                        <div className="absolute top-5 right-5 w-8 h-8 bg-primary text-primary-content rounded-full flex items-center justify-center font-bold text-xs z-10">
                        02
                        </div>
                        
                        <div className="card-body items-center text-center p-10">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <img src="/package.png" alt="" />
                        </div>
                        <h2 className="card-title text-2xl font-bold text-base-content">Choose Products</h2>
                        <p className="text-base-content/70">Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow relative overflow-visible">
                        <div className="absolute top-5 right-5 w-8 h-8 bg-primary text-primary-content rounded-full flex items-center justify-center font-bold text-xs z-10">
                        03
                        </div>
                        
                        <div className="card-body items-center text-center p-10">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <img src="/rocket.png" alt="" />
                        </div>
                        <h2 className="card-title text-2xl font-bold text-base-content">Start Creating</h2>
                        <p className="text-base-content/70">Download and start using your premium tools immediately.</p>
                        </div>
                    </div>

                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;