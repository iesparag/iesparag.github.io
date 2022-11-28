import { Box, Heading,Flex, Grid, Image} from '@chakra-ui/react';
import React from 'react'
// import Type from "../../Parts/type";
// import { TypeDot } from "../../Parts/type";
import Photo_for_tech from "../assets/Photo_for_tech.jpg"
import Type from '../parts/Type';


const Home = () => {
  return (
   <Box  id='home' padding={{base:"auto",sm:"auto",md:"50px",lg:"20px 100px"}} >
      <Grid alignItems="center" justifyContent="space-around" p="20px" mt="20px" gap={5}   gridTemplateColumns={{md:"1.5fr 1fr"}} >
       
        <Box   >
          <Box   >
          <Flex    alignItems="center" >
            
            <Heading mb="10px" as="h1" size="2xl" >Parag Jain...</Heading>
          </Flex>
          <Flex   alignItems="center" >
            
            <Heading mt="30px" as="h1" size="lg" ><Type/></Heading>
          </Flex>
          <Heading lineHeight="50px" mt="30px">Great web <span>Designer</span> without functionality is like a sports car with no <span>Engine...</span></Heading>
          </Box>
        </Box>
        
        <Flex  m={{base:"auto"}}     alignItems='center' justifyContent="center"   >
           <Image boxShadow="base" borderRadius="50%"  border="5px solid #fb982f"  src={Photo_for_tech} alt="profile_pic" />
        </Flex>
        
      </Grid>
   </Box>
  )
}

export default Home