import { Box, Grid, Heading, Image, } from '@chakra-ui/react'
import React from 'react'
import Ncc from "../assets/N.C.C_certificate .jpg"
// import masai_PP from "../assets/masai_power_project_award.pdf"
import Goi from "../assets/GOI.jpg"
import Headquarter from "../assets/Headquarters_Certificate.jpg"

const Achievements = () => {
    
  return (
    <Box id='achievements' paddingTop={{base:"70px",sm:"70px",md:"100px",lg:"100px"}}>
        <Box className='section-title' >
           <Heading opacity="0.5" as="h2"  size="2xl" >Achievements Page</Heading>
        </Box>
        {/* below content */}
        <Grid justifyContent="center" margin="auto" gridTemplateColumns={{base:"1fr",md:"1fr 1fr",lg:"1fr 1fr 1fr"}} gap="20px" >
            <Box w="250px" h="250px" margin="auto" >
                <a href="https://drive.google.com/file/d/1etftm3BrlqTQ0VkxeUVarMhIeegDfnIt/view?usp=sharing" ><Image src={Ncc} alt="image" h="100%" w="100%" /></a>
            </Box>
            <Box w="250px" h="250px" margin="auto">
                <a href="https://drive.google.com/file/d/1ex1cLaBA2jjXgTmfeoYMw8rJYbonnRFC/view?usp=sharing"><Image src={Headquarter} alt="image" h="100%" w="100%" /></a>
            </Box>
            <Box w="250px" h="250px" margin="auto">
                <a href="https://drive.google.com/file/d/1f29S7zmlM23z6TWop0kw_bl1Bf5VBqOb/view?usp=sharing"  ><Image src={Goi} alt="image" h="100%" w="100%" /></a>
            </Box>
            {/* <Box>
                <Image src={} alt="image" />
            </Box> */}
        </Grid>

    </Box>
  )
}

export default Achievements