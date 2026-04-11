import React from 'react';

const Footer = () => {
  return (
    <div>
    <footer className="bg-[#0f172a] text-slate-400 py-16 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">DigiTools</h2>
            <p className="max-w-xs leading-relaxed text-slate-400">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Templates</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Integrations</a></li>
            </ul>
          </div>


          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Community</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Contact</a></li>
            </ul>
          </div>


          <div>
            <h4 className="text-white font-semibold mb-6">Social Links</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all duration-300">
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all duration-300">
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all duration-300">
                <i className="fa-brands fa-x-twitter text-lg"></i>
              </a>
            </div>
          </div>
        </div>


        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm"> &copy; 2026 DigiTools. All rights reserved.</p>
          
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;