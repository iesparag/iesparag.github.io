
import {  Box,Center, Heading,Grid, Image} from '@chakra-ui/react';

import React from 'react'
import "./Cube.css"

const Tech = () => {
 const tech = [
  {image:"https://i.pinimg.com/736x/20/a8/e4/20a8e4d45dbf9878d60b13f6a3ea42e9--html-text-web-development.jpg"},
 {image:"https://www.theamplituhedron.com/articles/How-to-hide-scrollbars-but-keep-functionality-in-CSS/Pictures/1.png"},
 {image:"https://www.nivida.in/image/technology/javascript-20191202083859.jpg"},
 {image:"https://th.bing.com/th/id/OIP.zXu2vsYPZ5mqF0tOB7kupAHaHa?pid=ImgDet&rs=1"},
 {image:"https://lerablog.org/wp-content/uploads/2019/07/REDUX-LOGO-1014x1024.png"},
 {image:"https://gitlab.com/uploads/-/system/project/avatar/4469969/node.jpg"},
 {image:"https://yt3.ggpht.com/a/AATXAJza6mH9lrfKzqGQKTn9GqoXo2ODifBIvlYQ7Q=s900-c-k-c0xffffffff-no-rj-mo"},
 {image:"https://s.yimg.com/uu/api/res/1.2/y44cQjaKB1xdKCsp9SPtKQ--~B/aD0zNzk7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/58c4d584d4e393722ba985479f6d446c"},
 {image:"https://i1.sndcdn.com/avatars-YyFW7ghxE2zZ2JZY-sGtRPQ-t500x500.jpg"},
 {image:"https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg"},
]
 

  return (
    <Box paddingTop={{base:"70px",sm:"70px",md:"100px",lg:"100px"}} id="skill" >
    <Box className='section-title' >
        <Heading  opacity="0.5" as="h2"   size="2xl" >Tech Page</Heading>
        </Box>
    <Grid mb="100px"  templateColumns={{base: "1fr 1fr",sm:"1fr 1fr",md:"1fr 1fr 1fr",lg:"1fr 1fr 1fr 1fr"}} >
      {
        tech.map((tech)=> (
          <div className='cube' style={{margin:"60px auto"}} >
          <div className='top'  ></div>
            <div>
              {/* style="--i:0;" */}
            <span style={{"--i":0}} ><Center ><Image width="100%" src={tech.image}/></Center></span>
            <span style={{"--i":1}} ><Center ><Image width="100%" src={tech.image}/></Center></span>
            <span style={{"--i":2}} ><Center ><Image width="100%" src={tech.image}/></Center></span>
            <span style={{"--i":3}} ><Center ><Image width="100%" src={tech.image}/></Center></span>
            </div>
        </div>
        ))
      }
       {/* <div className='cube'  >
        <div className='top'  ></div>
          <div>
            
          <span style={{"--i":0}} ><Center ><Heading  as="h4" size="xl">HTML</Heading></Center></span>
          <span style={{"--i":1}} ><Center ><Heading  as="h4" size="xl">HTML</Heading></Center></span>
          <span style={{"--i":2}} ><Center ><Heading  as="h4" size="xl">HTML</Heading></Center></span>
          <span style={{"--i":3}} ><Center ><Heading  as="h4" size="xl">HTML</Heading></Center></span>
          </div>
      </div>  */}
    </Grid>
    </Box>
  )
}

export default Tech