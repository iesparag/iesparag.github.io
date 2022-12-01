import { Box, Center, Flex, Grid, Heading, Hide, Image, Show, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Box paddingTop={{base:"70px",sm:"70px",md:"100px",lg:"100px"}}   id='about' >
        <Box className='section-title' >
           <Heading as="h2"  size="2xl" >About Page</Heading>
        </Box>
        {/* below content start */}
         <Box px="10px"  >
         <Box m="auto"   >
          <Heading as="h1" mb="15px" size={{base:"lg",md:"xl"}} >I'm Parag jain and <span>Full Stack Web Developer</span></Heading>
          
          <Heading  px={{base:"15px",md:"50px"}} lineHeight={{base:"30px",md:"40px"}} as="h4" size={{base:"18px",md:"md"}}  letterSpacing="1.5px"   >Enthusiastic and well-organized Full Stack Web Developer with <span>2500+ hours</span> of rigorous <span>coding experience</span>. Curious to learn about  emerging web technologies. Eager to join, to bring in top-class  Full Stack Web Development and <span> problem-solving skills</span>.</Heading>
          
          </Box>
          <Flex gap={10} mt="50px" >
             <Show above="md">
             
                 <Flex>
                  <Image m="auto" width={{md:"100%",lg:"50%"}} src="https://r7q6w9z6.rocketcdn.me/career/wp-content/uploads/2021/02/regurly-img.gif" bg="#202124" alt="coder_gif" />
                 </Flex>
              
             </Show>
              <Box  width={{base:"100%",md:"50%"}} p="10px"    >
                    <Text mb="10px" fontWeight="bold" >
                      Email Address : <a  href="mailto:iesparagjain@gmail.com"><span> iesparagjain@gmail.com</span></a>
                    </Text>
                    
                    <Text mb="10px" fontWeight="bold" >
                      Phone Number : <a    href="tel:9770525851"><span> 9770525851</span></a>
                    </Text>
                    
                    <Text mb="10px" fontWeight="bold" >
                      Location : <span> Sagar M.P</span>
                    </Text>
                    
                    <Text mb="10px" fontWeight="bold" >
                      Degree : <span> B.Tech (Civil Engineer)</span>
                    </Text>
                    
                    <Text mb="10px" fontWeight="bold" >LinkedIn:
                          <a  href="https://www.linkedin.com/in/iesparag/"
                           > <span> Linkdin</span> </a
                          >
                    </Text>
                     
                    <Text fontWeight="bold" >GitHub :
                       <a href="https://github.com/iesparag"
                            ><span> https://github.com/iesparag</span></a
                          >
                      
                    </Text>
              </Box> 
              
          </Flex>
         </Box>
        
        {/* below content end */}
         
    </Box>
  )
}

export default About