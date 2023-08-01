import { Box, Heading, Image, } from '@chakra-ui/react'
import React from 'react'
import Ncc from "../assets/N.C.C_certificate .jpg"
import Goi from "../assets/GOI.jpg"
import Headquarter from "../assets/Headquarters_Certificate.jpg"
import masai from "../assets/masai_award.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import figma from "../assets/figma.png";
import bootstrap from "../assets/bootstrap.png"


const Achievements = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
      autoplaySpeed: 2000,
      };
  return (
    <Box id='achievements' paddingTop={{base:"70px",sm:"70px",md:"100px",lg:"10px"}}>
        <Box className='section-title' >
           <Heading opacity="0.5" as="h2"  size="2xl" >Achievements</Heading>
        </Box>
        {/* below content */}
        
         <Box justifyContent="center" alignItems="center" w={{base:"80vw",md:"60vw",lg:"40vw"}} m="auto">
         <Slider {...settings}>
          <div>
      <Box m="auto" h="350px" ><Image src={figma} alt="image" w="100%" h="100%" /></Box>
      </div>
      <div>
      <Box m="auto" h="350px" ><Image src={bootstrap} alt="image" w="100%" h="100%" /></Box>
      </div>
      <div>
      <Box m="auto"  h="350px" ><Image src={masai} alt="image" w="100%" h="100%"  /></Box>
      </div>
      <div >
        <Box m="auto"  h="350px" ><Image src={Ncc} alt="image" w="100%" h="100%" /></Box>
      </div>
      <div>
      <Box m="auto" h="350px" ><Image src={Headquarter} alt="image" w="100%" h="100%" /></Box>
        
      </div>
      <div>
      <Box m="auto" h="350px" ><Image src={Goi} alt="image" w="100%" h="100%" /></Box>

      </div>
      
     
    </Slider>
         </Box>

    </Box>
  )
}

export default Achievements