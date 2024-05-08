import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import RepoList from "../components/RepoList";

const Repos = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("chimaskyy");
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    setLoading(true);
    searchRepos();
  }, [currentPage, user]);

  function searchRepos() {
    const url = `https://api.github.com/users/${user}/repos`;
    axios
      .get(url)
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    searchRepos();
  };

  const searchHandler = (e) => {
    let value = e.target.value;
    setSearch(value);
    if (value !== "") setSearching(true);
    else setSearching(false);
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-r from-slate-300 to-slate-500 bg-opacity-25 p-6 ${
        searching ? "h-screen" : "h-full"
      }`}
    >
      <div className="flex items-center justify-center mb-6">
        <form className="form">
          <input
            className="border border-slate-300 shadow-sm rounded mt-5 text-start px-2 py-1 md:py-2"
            placeholder="Search User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          {/* <button className="bg-blue-300" onClick={handleSubmit}>
            Search
          </button> */}
        </form>
        <input
          className="border border-slate-300 shadow-sm rounded mt-5 text-start px-2 py-1 w-1/2 md:py-2 md:w-1/3 lg:w-1/4"
          placeholder="Search Repo by name"
          onChange={searchHandler}
        />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <RepoList
          items={items}
          search={search}
          handlePagination={handlePagination}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      )}
    </div>
  );
};

export default Repos;
