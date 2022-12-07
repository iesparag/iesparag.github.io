import { Box, Heading,Flex, Grid, Image} from '@chakra-ui/react';
import React from 'react'


import Photo_for_tech from "../assets/Photo_for_tech.jpg"
import Type from '../parts/Type';


const Home = () => {
  return (
   <Box  id='home' paddingTop={{base:"70px",sm:"70px",md:"100px",lg:"100px"}} >
      <Grid mt="20px" alignItems="center" justifyContent="space-around" px={{base:"20px",md:"80px",lg:"150px" }} gap={10}   gridTemplateColumns={{md:"1.5fr 1fr"}} >
       
       
          <Box    >
          <Flex     >
            
            <Heading as="h1" size="xl" >Parag Jain...</Heading>
          </Flex>
          <Flex    >
            
            <Heading my="20px" as="h1" size="lg" ><Type/></Heading>
          </Flex>
          <Heading as="h2"  size={{base:"md",md:"lg"}} lineHeight="50px"  my="30px">Great web <span>Designer</span> without functionality is like a sports car with no <span>Engine...</span></Heading>
          </Box>
        
        
        <Flex  m={{base:"auto"}}      justifyContent="center"   >
           <Image width="80%" boxShadow="base" borderRadius="50%"  border="5px solid #fb982f"  src={Photo_for_tech} alt="profile_pic" />
        </Flex>
        
      </Grid>
   </Box>
  )
}

export default Home