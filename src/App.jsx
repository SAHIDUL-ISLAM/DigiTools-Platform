import Banner from "./component/Banner"
import NavBar from "./component/NavBar"
import Models from "./component/Models"

const getModels = async () =>{
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {

  return (
    <>
    <NavBar/>
    <Banner/>
    <Models modelPromise={modelPromise}/>
    </>
  )
}

export default App
