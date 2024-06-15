import {Input, VStack, Text, Box,} from '@chakra-ui/react'

const SelectProduct = () => {

    return (
        <div>
            <Box
                bg='purple'
                borderWidth="2px"
                borderRadius="xl"
                boxShadow="md"
                p={6}
                borderColor='black'>

                <VStack spacing={4} centerContent>
                    <Text
                        fontSize='5xl'
                        color ='gray.900'>
                        Product
                    </Text>
                    <Input
                        focusBorderColor='white'
                        placeholder='Type in the Model'
                        _placeholder={{ opacity: 1, color: 'black' }}
                        variant='outline'
                        borderColor='black'

                    />
                </VStack>
            </Box>

        </div>
    );
};

export default SelectProduct;
