import { useState } from 'react'
import './App.css'
import SelectProduct from "./components/selectProduct.jsx";
import {ChakraProvider, Grid, GridItem} from '@chakra-ui/react';


import MyAppBar from './components/MyAppBar'
import UserWishes from './components/UsersWishes'
function App() {

    return (
        <ChakraProvider>
            <div className="App">
                <MyAppBar/>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem w='100%'  />
                    <GridItem w='100%' >
                        <SelectProduct/>
                    </GridItem>
                    <GridItem w='100%'  />
                    <GridItem w='100%'  >
                        <SelectProduct/>
                    </GridItem>
                <GridItem w='100%'  />
                </Grid>
                <UserWishes />


            </div>
        </ChakraProvider>
    );



export default App
