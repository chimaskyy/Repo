// Error.js
import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const Error = ({ message }) => {
  return (
    <Flex className="p-6 justify-center items-center h-full">
      <Box>
        <Text fontSize="lg" fontWeight="bold" color="red.500">
          Error: {message}
        </Text>
      </Box>
    </Flex>
  );
};

export default Error;
