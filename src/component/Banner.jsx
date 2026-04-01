import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-gray-500/10 border text-purple-700 text-sm font-medium px-5 py-2 rounded-full">
             New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
            <br />
            Explore Products

          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn bg-gradient-to-br from-[#4F39F6] to-[#fa14df] rounded-full text-white">Explore Products</button>
            <button className="btn bg-[#ff000000] border-purple-900 rounded-full text-purple-800 hover:bg-gradient-to-br from-[#4F39F6] to-[#fa14df] hover:text-white"> <img src="" alt="" /> Watch Demo</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Banner;