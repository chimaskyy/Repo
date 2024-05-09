import { Routes, Route } from "react-router-dom";
import Repos from "./pages/Repos";
import RepoDetails from "./pages/RepoDetails";
// import Error from "./pages/FourOhFour";
// import ErrorBoundary from "./components/ErrorBoundary";
import FourOhFour from "./pages/FourOhFour";
import Home from "./pages/Home";
import UserRepos from "./pages/UserRepos";
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/repos" element={<Repos />}></Route>
          <Route path="/user_repos/" element={<UserRepos />}></Route>
          <Route path="/repos/:id" element={<RepoDetails />}></Route>
          {/* <Route path="/error" element={<Error />}></Route> */}
          <Route path="*" element={<FourOhFour />} />
        </Routes>
    </>
  );
}

export default App;
