import { use, useState } from "react";
import ModelCard from "./ModelCard";



const Models = ({modelPromise, carts, setCarts}) => {
    const models = use(modelPromise)

    return (
        <div className="max-w-5xl m-auto space-y-6">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
                {/* name of each tab group should be unique */}


            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {models.map((model)=> 
                        <ModelCard key={model.id} model = {model} carts={carts} setCarts={setCarts}/>
                    )}
            </div>
        </div>
    );
};

export default Models;