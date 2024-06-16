// eslint-disable-next-line no-unused-vars
import { Box, Flex, Heading, Button, Stack, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

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
      boxShadow="lg"
    >
      <Flex
        h="100%"
        justifyContent="space-between"
        // width="100%"
        maxWidth="1200px"
      >
        <Flex alignItems="center">
          <Heading size="lg" color="white" mr={4} fontWeight="bold" letterSpacing="wide" variant="solid">
            Macri Specs
          </Heading>
          {/*<Stack padding = "15px"  direction="row" spacing={4}>*/}
          {/*  <Button colorScheme="purple" variant="solid">*/}
          {/*    Comparative analysis*/}
          {/*  </Button>*/}

          {/*</Stack>*/}
          <Breadcrumb color='white'>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href='#'>Specs</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>

      </Flex>
    </Box>
  );
};

export default MyAppBar;
