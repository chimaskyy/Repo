import { Routes, Route } from "react-router-dom";
import Repos from "./pages/Repos";
import RepoDetails from "./pages/RepoDetails";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Repos />}></Route>
      <Route path="/repos" element={<Repos />}></Route>
      <Route path="/repos/:id" element={<RepoDetails/>}></Route>
    </Routes>
    </>
  )
}

export default App
