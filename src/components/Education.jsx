import { Box, Heading,Grid,Image, Hide,   } from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'
import React from 'react'
import "./Education.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Education = () => {
  return (
    <Box id="education"    paddingTop={{base:"70px",sm:"70px",md:"100px",lg:"100px"}}>      
        <Box className='section-title' >
           <Heading as="h2" opacity="0.5"  size="2xl"  >Education</Heading>
        </Box>
    <Box   >    
   <Grid fontSize={{base:"14px",sm:"16px"}} letterSpacing="1px"  px={{base:"2px",md:"auto"}}  display="grid"   gridTemplateColumns={{base:"1fr",sm:"1fr" ,md:"1fr" ,lg:'1.5fr 1fr' }}   >
         
         {/* left Box */}
        <Box  fontWeight={{base:"auto",md:"semibold"}} className="details"  >
              <Box  className="qualification__sections" mt='10' >

        {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
                <div className="qualification__content qualification__active" data-content >
                    {/* <!--==================== QUALIFICATION 1 ====================--> */}
                    <div className="qualification__data">
                        <div>
                            <p fontWeight="bold" className="qualification__title">Full Stack Web Development (Full Time)</p>
                            <span className="qualification__subtitle">Masai School.< br/> Bengaluru, Karnataka</span>
                            <div className="qualification__celendar">
                                <CalendarIcon marginRight="7px" />
                                2022 - Present
                            </div>
                        </div>

                        <div>
                        
                            <div className="qualification__rounder"></div>
                            <div className="qualification__line"></div>
                        </div>
                    </div>

                    {/* <!--==================== QUALIFICATION 2 ====================--> */}
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <div className="qualification__rounder"></div>
                            <div className="qualification__line"></div>
                        </div>

                        <div>
                            <h3 className="qualification__title"> B-Tech in Civil Engineering</h3>
                            <span className="qualification__subtitle">Samrat Ashok Technological Institute</span>
                            <div className="qualification__celendar">
                            <CalendarIcon marginRight="7px" />
                                2015 - 2019
                            </div>
                        </div>
                    </div>

                    {/* <!--==================== QUALIFICATION 3 ====================--> */}
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Higher Secondary Education</h3>
                            <span className="qualification__subtitle">St. Joseph's convent Sr. Sec School</span>
                            <div className="qualification__celendar"  >
                            <CalendarIcon marginRight="7px" />
                                2012 - 2014
                            </div>
                        </div>

                        <div>
                            <div className="qualification__rounder"></div>
                            <div className="qualification__line"></div>
                        </div>
                    </div>

                    {/* <!--==================== QUALIFICATION 4 ====================--> */}
                



                </div>
            </Box>
        
        </Box>

         {/* left Box */}
         <Hide below="lg" >
        <Box data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="1000" mt={{lg:'20', md:'auto'}} width={{base:"90%",md:"65%"}} m="auto" >  
        <Image  className="blob" src="https://camo.githubusercontent.com/8bf6f6d78abc81fcf9c49f10649423e73ea44bc248e83aaae8759d401c829a84/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966" />    
        </Box>
        </Hide>


   </Grid>
   </Box>
 
</Box>
  )
}

export default Education