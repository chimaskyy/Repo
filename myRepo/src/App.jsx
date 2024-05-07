import { Routes, Route } from "react-router-dom";
import Repos from "./Pages/Repos";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Repos />}></Route>
    </Routes>
    </>
  )
}

export default App
