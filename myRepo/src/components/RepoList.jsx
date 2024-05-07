import React from "react";
import { Flex, Avatar, Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import RepoDetails from "../pages/RepoDetails";

const RepoList = ({
  items,
  search,
  handlePagination,
  currentPage,
  itemsPerPage,
}) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items
    .filter((item) => {
      return search.toLowerCase() === ""
        ? true
        : item.name.toLowerCase().includes(search.toLowerCase());
    })
    .slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentItems.map((repo) => (
          <article key={repo.id} className="bg-white rounded-lg shadow mb-4">
            <Flex className="p-6">
              <Avatar src={repo.owner.avatar_url} />
              <Box ml="3">
                {repo.owner.login}
                <Text fontSize="sm" className="mt-2">
                  {repo.name}
                </Text>
                <Text fontWeight="bold">
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
                <Link to={`/repos/${repo.id}`}>
                  <Button colorScheme="gray" size="s" className="mt-6 mb-4">
                    View Details
                  </Button>
                </Link>
              </Box>
            </Flex>
          </article>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePagination(number)}
            className={`mx-1 ${
              number === currentPage ? "bg-blue-300" : "bg-gray-300"
            } py-2 px-4 rounded-lg`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
