import { Box, SimpleGrid, Image, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Product 1", price: "$10", image: "/images/product1.jpg" },
  { id: 2, name: "Product 2", price: "$20", image: "/images/product2.jpg" },
  { id: 3, name: "Product 3", price: "$30", image: "/images/product3.jpg" },
];

const Products = () => (
  <Box p={4}>
    <SimpleGrid columns={[1, 2, 3]} spacing={10}>
      {products.map(product => (
        <VStack key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" />
          <Text fontSize="xl">{product.name}</Text>
          <Text>{product.price}</Text>
          <Button as={Link} to={`/product/${product.id}`} colorScheme="teal">View Details</Button>
        </VStack>
      ))}
    </SimpleGrid>
  </Box>
);

export default Products;