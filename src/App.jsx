import Banner from "./component/Banner"
import NavBar from "./component/NavBar"
import Models from "./component/Models"
import Cart from "./component/Cart"
import Steps from "./component/Steps"
import Pricing from "./component/Pricing"
import WorkFlow from "./component/WorkFlow"
import Footer from "./component/Footer"
import { useState } from "react";

const getModels = async () =>{
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {
 const [activeTab, setActiveTab] = useState("model")
const [carts, setCarts]= useState([])

  return (
    <>
    <NavBar carts={carts}/>
    <Banner/>
      <div className="flex justify-center mb-8">
        <div className="tabs tabs-box border rounded-full p-1 inline-block">
          <input type="radio" name="my_tabs_1" className="tab mx-1 w-40 rounded-full" aria-label="Products" defaultChecked onClick={()=>setActiveTab("model")}/>

          <input type="radio" name="my_tabs_1" className="tab mx-1 w-40 rounded-full" aria-label={`Cart(${carts.length})`} onClick={()=>setActiveTab("cart")}/>
        </div>
      </div>
    {activeTab==="model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>}
        
     {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}/>}
     <Steps/>
     <Pricing/>
     <WorkFlow/>
     <Footer/>
    </>
  )
}

export default App
