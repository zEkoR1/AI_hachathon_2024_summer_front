import { Box, Flex, Heading, Button, Stack } from '@chakra-ui/react';

const MyAppBar = () => {
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="4rem"
      bg="purple"
      px={4}
      zIndex={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="sm"
    >
      <Flex
        h="100%"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        maxWidth="1200px"
      >
        <Flex alignItems="center">
          <Heading as="h2" size="lg" color="white" mr={4} fontWeight="bold" letterSpacing="wide" variant="solid">
            Macri Specs
          </Heading>
          <Stack padding = "15px"  direction="row" spacing={4}>
            <Button colorScheme="teal" variant="solid">
              Comparative analysis
            </Button>

          </Stack>
        </Flex>

      </Flex>
    </Box>
  );
};

export default MyAppBar;
