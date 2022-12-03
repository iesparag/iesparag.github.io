import { Box, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

const Softskill = () => {
   
  return (
    <Box  m="auto"  marginBottom="30px" >
         <Grid gap={5}  m="auto" gridTemplateColumns={{base:"1fr 1fr",md:"1fr 1fr",lg:"1fr 1fr"}} >
        <Box m="auto"  >
            <Accordion allowToggle w={{base:"auto",md:"200px",lg:"400px"}} >
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Heading opacity="0.5" as="h1" size={{base:"md",md:"lg"}} flex='1' textAlign='left'>
                        Soft Skill 
                        </Heading><br />
                        
                        <AccordionIcon />
                    </AccordionButton>
                    </h2 >
                        <AccordionPanel pb={4}>
                        <b>Teamwork</b>
                        
                        </AccordionPanel>
                        <hr />
                        <AccordionPanel pb={4}>
                        <b>Patience</b>
                        
                        </AccordionPanel>
                        <hr />
                        <AccordionPanel pb={4}>
                        <b>Problem-Solving</b>
                        
                        </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>

        {/* right section */}
        <Box m="auto" >
        <Accordion allowToggle w={{base:"auto",md:"200px",lg:"400px"}} >
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Heading opacity="0.5" as="h1" size={{base:"md",md:"lg"}} flex='1' textAlign='left'>
                        Statistics 
                        </Heading><br />
                       
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                        <AccordionPanel pb={4}>
                       <b> Coding ( 1200+ Hours ) </b>
                        </AccordionPanel>
                        <hr />
                        <AccordionPanel pb={4}>
                        <b>DSA ( 300+ Problems ) </b>
                        </AccordionPanel>
                        <hr />
                        <AccordionPanel pb={4}>
                        <b>Soft-Skill ( 100+ Hours  ) </b>
                        
                        </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
        </Grid>
       
    </Box>
    
  )
}

export default Softskill