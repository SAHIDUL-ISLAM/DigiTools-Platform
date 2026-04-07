import Banner from "./component/Banner"
import NavBar from "./component/NavBar"
import Models from "./component/Models"
import Cart from "./component/Cart"
import { useState } from "react";

const getModels = async () =>{
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {
 const [activeTab, setActiveTab] = useState("model")
 console.log(activeTab);
  return (
    <>
    <NavBar/>
    <Banner/>
      <div className="flex justify-center">
        <div className="tabs tabs-box border rounded-full p-1 inline-block">
          <input type="radio" name="my_tabs_1" className="tab mx-1 w-40 rounded-full " aria-label="Products" defaultChecked onClick={()=>setActiveTab("model")}/>

          <input type="radio" name="my_tabs_1" className="tab mx-1 w-40 rounded-full " aria-label="Cart" onClick={()=>setActiveTab("Cart")}/>
        </div>
      </div>
    {activeTab==="model" && <Models modelPromise={modelPromise}/>}
        
     {activeTab === "Cart" && <Cart/>}
    </>
  )
}

export default App
