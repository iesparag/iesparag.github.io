
import { Box, Center, Heading,Grid} from '@chakra-ui/react';

import React from 'react'
import "./Cube.css"

const Tech = () => {
 const tech = ["HTML","Css","Java Script","React Js","Redux","Node Js","Express Js","Mongo DB","Next Js"]
 

  return (
    <>
    <Heading size="2xl" >Tech Page</Heading>
    <Grid mb="100px"  templateColumns={{base: "1fr",sm:"1fr 1fr",md:"1fr 1fr",lg:"1fr 1fr 1fr"}} >
      {
        tech.map((tech)=> (
          <div className='cube' style={{margin:"60px auto"}} >
          <div className='top'  ></div>
            <div>
              {/* style="--i:0;" */}
            <span style={{"--i":0}} ><Center ><Heading  as="h4" size="xl">{tech}</Heading></Center></span>
            <span style={{"--i":1}} ><Center ><Heading  as="h4" size="xl">{tech}</Heading></Center></span>
            <span style={{"--i":2}} ><Center ><Heading  as="h4" size="xl">{tech}</Heading></Center></span>
            <span style={{"--i":3}} ><Center ><Heading  as="h4" size="xl">{tech}</Heading></Center></span>
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
    </>
  )
}

export default Tech