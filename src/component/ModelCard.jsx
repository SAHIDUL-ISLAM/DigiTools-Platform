import { useState } from "react";
import { toast } from "react-toastify";



const ModelCard = ({model, carts, setCarts}) => {
        const [isBuye, setIsBuye]= useState(false)

        const handleBuying = ()=>{
            setIsBuye(true)
            const isFound = carts.find(item=>item.id === model.id)
            if(isFound){
                toast.error("Item Already in Cart!")
                return
            }
            setCarts([...carts,model])
            toast.success("Item Added to Cart!")
        }

    return (
        <div className="border border-gray-100 rounded-2xl shadow-sm p-6 space-y-5">
            <div className="text-2xl text-pink-700 flex justify-between">
                <i className={model.icon}></i>
                <span className="px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">{model.tag}</span>
            </div>
            <div className="space-y-5">
                <h2 className="text-3xl font-bold">{model.title}</h2>
                <p className="text-slate-500 leading-relaxed line-clamp-2">{model.description}</p>
                <h3 className="text-[20px] font-bold">${model.price}<span className="text-slate-500">{model.tagType}</span>    </h3>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-600">
                    <i className="fa-solid fa-check text-green-500"></i>
                    <span>{model.features[0]}</span>
                                </li>
                    <li className="flex items-center gap-3 text-slate-600">
                    <i className="fa-solid fa-check text-green-500"></i>
                    <span>{model.features[1]}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600">
                    <i className="fa-solid fa-check text-green-500"></i>
                    <span>{model.features[2]}</span>
                    </li>
                </ul>
            </div>
            <button onClick={handleBuying} className="btn bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full text-white w-full">{isBuye?"Bought":"Buy Now"}</button>
        </div>
    );
};

export default ModelCard;