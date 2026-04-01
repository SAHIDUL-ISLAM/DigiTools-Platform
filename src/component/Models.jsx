import { use } from "react";

const Models = ({modelPromise}) => {
    const models = use(modelPromise)
    console.log(models)
    return (
        <div className="max-w-5xl m-auto space-y-6">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    models.map(model=> <div className="border border-gray-100 rounded-2xl shadow-sm p-6 space-y-5">
                        <div className="text-2xl text-pink-700 flex justify-between">
                            <i className={model.icon}></i>
                            <span class="px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">{model.tag}</span>
                        </div>
                        <div className="space-y-5">
                            <h2 className="text-3xl font-bold">{model.title}</h2>
                            <p className="text-slate-500 leading-relaxed line-clamp-2">{model.description}</p>
                            <h3 className="text-[20px] font-bold">${model.price}</h3>
                            <ul class="space-y-3">
                                <li class="flex items-center gap-3 text-slate-600">
                                <i class="fa-solid fa-check text-green-500"></i>
                                <span>{model.features[0]}</span>
                                </li>
                                <li class="flex items-center gap-3 text-slate-600">
                                <i class="fa-solid fa-check text-green-500"></i>
                                <span>{model.features[1]}</span>
                                </li>
                                <li class="flex items-center gap-3 text-slate-600">
                                <i class="fa-solid fa-check text-green-500"></i>
                                <span>{model.features[2]}</span>
                                </li>
                            </ul>
                        </div>
                        <button className="btn bg-gradient-to-br from-[#4F39F6] to-[#fa14df] rounded-full text-white w-full">Buy Now</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Models;