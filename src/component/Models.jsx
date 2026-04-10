import { use, useState } from "react";
import ModelCard from "./ModelCard";



const Models = ({modelPromise, carts, setCarts}) => {
    const models = use(modelPromise)

    return (
        <div className="max-w-5xl m-auto space-y-6 pb-30">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {models.map((model)=> 
                        <ModelCard key={model.id} model = {model} carts={carts} setCarts={setCarts}/>
                    )}
            </div>
        </div>
    );
};

export default Models;