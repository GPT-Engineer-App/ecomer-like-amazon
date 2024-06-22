import { Box, Text, VStack, Button } from "@chakra-ui/react";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Product 1", price: "$10", quantity: 1 },
    { id: 2, name: "Product 2", price: "$20", quantity: 2 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price.slice(1) * item.quantity, 0);

  return (
    <Box p={4}>
      <VStack spacing={4} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        {cartItems.map(item => (
          <Box key={item.id} w="100%" d="flex" justifyContent="space-between">
            <Text>{item.name}</Text>
            <Text>{item.price} x {item.quantity}</Text>
          </Box>
        ))}
        <Box w="100%" d="flex" justifyContent="space-between">
          <Text fontSize="xl">Total</Text>
          <Text fontSize="xl">${total}</Text>
        </Box>
        <Button colorScheme="teal">Checkout</Button>
      </VStack>
    </Box>
  );
};

export default Cart;