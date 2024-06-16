import {Input, VStack, Text, Box, Spacer} from '@chakra-ui/react'

const SelectProduct = () => {

    return (
        <div>
            <Box
                // bg='purple'
                borderWidth="2px"
                borderRadius="xl"
                boxShadow="md"
                p={6}
                borderColor='black'>

                <VStack spacing={0.5} centerContent>
                    <Text
                        fontSize='5xl'
                        color ='gray.900'>
                        Product
                    </Text>
                    <Text>Type in the Model</Text>
                    <Input
                        focusBorderColor='white'
                        placeholder='iPhone 15'
                        _placeholder={{ opacity: 1, color: 'gray', fontStyle:'italic' }}
                        variant='outline'
                        borderColor='black'

                    />
                </VStack>
            </Box>

        </div>
    );
};

export default SelectProduct;
