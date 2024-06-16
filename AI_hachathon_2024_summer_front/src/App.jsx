import './App.css'
import SelectProduct from "./components/selectProduct.jsx";
import {ChakraProvider, Grid, GridItem} from '@chakra-ui/react';


import MyAppBar from './components/MyAppBar'
import UserWishes from './components/UsersWishes'
function App() {

    return (
        <ChakraProvider>
            <div className="App">

                <Grid templateColumns='repeat(5, 4fr)' gap={12}>
                    <GridItem w='100%' colSpan={5} rowSpan={2}>
                        <MyAppBar/>
                    </GridItem>
                    <GridItem w='100%' colSpan={1}/>
                    <GridItem w='100%' colSpan={1}>
                        <SelectProduct/>
                    </GridItem>
                    <GridItem w='100%' colSpan={1}/>
                    <GridItem w='100%' colSpan={1}>
                        <SelectProduct/>
                    </GridItem>
                    <GridItem w='100%' colSpan={1}/>

                    <GridItem w='100%' colSpan={1}/>
                    <GridItem w='100%' colSpan={3}>
                        <UserWishes/>
                    </GridItem>
                    <GridItem colSpan={1}/>



                </Grid>


            </div>
        </ChakraProvider>
    );


}
export default App

