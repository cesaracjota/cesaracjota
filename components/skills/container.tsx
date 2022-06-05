import React from "react";
import { Box } from "@chakra-ui/react";

export const Container = props => (
  <Box
    textAlign="center"
    fontSize="xl"
    w={["95%", "95%", "95%"]}
    maxW={990}
    mx="auto"
    {...props}
  />
);

export default Container;
