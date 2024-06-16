import  { useState } from "react";
import { Input, Text, Button, VStack } from "@chakra-ui/react";

const UserWishes = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
        <VStack spacing={8}>
            <Text fontSize='3xl' mb={4}>
                What is Important<br />for You <br/> Tell about your<br/> use case
            </Text>

            <Input
                value={input}
                onChange={handleChange}
                placeholder='Enter your wishes here...'
                size='lg'
            />

            <Button colorScheme='purple' variant='outline'>
                Help me Choose
            </Button>
        </VStack>
    </>
  );
};

export default UserWishes;
