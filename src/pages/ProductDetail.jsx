import { Box, Image, Text, Button, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const productDetails = {
  1: { id: 1, name: "Product 1", price: "$10", description: "Description of Product 1", image: "/images/product1.jpg" },
  2: { id: 2, name: "Product 2", price: "$20", description: "Description of Product 2", image: "/images/product2.jpg" },
  3: { id: 3, name: "Product 3", price: "$30", description: "Description of Product 3", image: "/images/product3.jpg" },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productDetails[id];

  return (
    <Box p={4}>
      <VStack spacing={4} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Image src={product.image} alt={product.name} boxSize="300px" objectFit="cover" />
        <Text fontSize="2xl">{product.name}</Text>
        <Text fontSize="lg">{product.price}</Text>
        <Text>{product.description}</Text>
        <Button colorScheme="teal">Add to Cart</Button>
      </VStack>
    </Box>
  );
};

export default ProductDetail;