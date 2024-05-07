import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Flex, Box, Text, Spinner } from "@chakra-ui/react";

const RepoDetails = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.github.com/repositories/${id}`)
      .then((response) => {
        setRepo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repository details:", error);
        setLoading(false);
      });
  }, [id]); // Fetch repository details whenever id changes

  if (loading) {
    return <Spinner />;
  }

  if (!repo) {
    return <div>Repository not found!</div>;
  }

  return (
    <div className="bg-cover bg-gray-600">
      <article className="bg-white rounded-lg shadow m-24">
        <Flex className="p-6">
          <Box>
            <Text fontWeight="bold">{repo.full_name}</Text>
            <Text fontSize="sm" className="text-gray-600">
              {repo.description}
            </Text>
            <Text fontSize="sm" className="text-blue">
              Stars: {repo.stargazers_count}
            </Text>
            <Text fontSize="sm" className="text-blue">
              Forks: {repo.forks_count}
            </Text>
          </Box>
        </Flex>
      </article>
    </div>
  );
};

export default RepoDetails;
