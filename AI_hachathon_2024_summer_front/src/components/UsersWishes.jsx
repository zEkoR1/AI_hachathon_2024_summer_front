import React, { useState } from 'react';
import { Box, Textarea, Button, VStack, Text , Spacer} from '@chakra-ui/react';

const UserWishes = () => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <VStack spacing={4} padding={4}>
      <Text>
        What is important for you? Tell us about your use case.
      </Text>
      <Textarea
        value={input}
        onChange={handleChange}
        placeholder="Enter your wishes here..."
        size="md"
        borderColor="gray.300"
        focusBorderColor="teal.400"
        height="100px"
        width="300px"
      />
      <Spacer /> 
      <Button colorScheme="teal" size="md">
        Submit
      </Button>
    </VStack>
  );
};

export default UserWishes;
