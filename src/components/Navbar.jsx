import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" p={4}>
    <Flex maxW="1200px" mx="auto" align="center">
      <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">E-commerce</Link>
      <Spacer />
      <Button as={RouterLink} to="/cart" colorScheme="teal" variant="outline">Cart</Button>
    </Flex>
  </Box>
);

export default Navbar;