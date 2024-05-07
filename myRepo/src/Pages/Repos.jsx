// src/App.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { Flex, Avatar, Box, Text } from "@chakra-ui/react";
// import Pagination from "../components/Paginate";
function Repos() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("chimaskyy");
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (searching) {
    searchRepos();
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setSearching(true)
    searchRepos();
    setUser("")
  }
  function searchRepos() {
    setLoading(true);
    const url = `https://api.github.com/users/${user}/repos`;
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setItems(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const searchHandler = (e) => {
    let value = e.target.value;
    setSearch(value);
    if (value !== "") setSearching(true);
    else setSearching(false);
  };

  return (
    <div
      className={`bg-cover bg-gray-600 p-6 ${
        searching ? "h-screen" : "h-full"
      }`}
    >
      <div className="flex items-center justify-center mb-6">
        <form className="form">
          <input
            className="border border-slate-300 shadow-sm rounded mt-5
            text-start px-2 py-1 md:py-2"
            placeholder="Search User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <button className="bg-blue-300" onClick={handleSubmit}>
            Search
          </button>
        </form>
        <input
          className="border border-slate-300 shadow-sm rounded mt-5
            text-start px-2 py-1 w-1/2 md:py-2 md:w-1/3 lg:w-1/4"
          placeholder="search Repo by name"
          onChange={searchHandler}
        />
      </div>
      {items &&
        items
          .filter((item) => {
            return search.toLowerCase() === ""
              ? true
              : item.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((repo) => (
            <article key={repo.id} className="bg-white rounded-lg shadow mb-4">
              <Flex className="p-6">
                <Avatar src={repo.owner.avatar_url} />
                <Box ml="3">
                  <Text fontWeight="bold">
                    {repo.owner.login}
                    {repo.private ? (
                      <p className="bg-rose-400 py-1 px-2 text-xs text-white shadow rounded-lg inline-block">
                        Private
                      </p>
                    ) : (
                      <p className="bg-green-400 py-1 m-4 px-2 text-xs text-white shadow rounded-lg inline-block">
                        Public
                      </p>
                    )}
                  </Text>
                  <Text fontSize="sm" className="text-blue">
                    {repo.name}
                  </Text>
                  <Button colorScheme="gray" size="s" className="ml-96 mb-4">
                    View Details
                  </Button>
                </Box>
              </Flex>
            </article>
          ))}
    </div>
  );
}

export default Repos;
