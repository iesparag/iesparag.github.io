import { Box, Image,Show,Hide ,Flex,} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import React from 'react'
import parag_jain_logo from "../assets/parag_jain_logo.png"
import { HamburgerIcon } from '@chakra-ui/icons'
import "./Navbar.css"

const Navbar = () => {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [placement, setPlacement] = React.useState("right");
  

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };
 

  
  

  return (
    
    <Box mb="100px" className='navbar'    >
        <Box  zIndex="100"  display="block"  position="fixed" top="0" justifyContent="space-evenly" width="100vw" >
        <Box  backgroundColor="#fff"   justifyContent={{base:"space-between",md:"space-between"}} id='navbar' className='navbar_conatiner' display="flex" alignItems="center" boxShadow="dark-lg"  >
          <Hide below="base" >
            <Box   className='navbar_left'>
                <a href="#navbar"><Image  width={{base:"200px",sm:"200px",md:"300px"}} src={parag_jain_logo} alt="logo" ></Image></a>
            </Box>
            </Hide>
            <Hide below="md">
            <Box  className='navbar_right' flexGrow="3"  >
               <Flex justifyContent='space-evenly'>
                
                <p className='a-tag'  ><a href="#about">About</a></p>
                <p className='a-tag'  ><a href="#skill">Skill</a></p>
                <p className='a-tag'  ><a href="#projects">Projects</a></p>
                <p className='a-tag'  ><a href="#github">Github</a></p>
                <p className='a-tag'  ><a href="#contact">Contact</a></p>
                <p className='a-tag'  ><button><a href="#resume">Resume</a></button></p>
               </Flex>
            </Box>
            </Hide>
            <Show below='md' >
                   <Box onClick={() => handleClick(size)}  paddingRight="30px">
                     <HamburgerIcon  key={size} w={6} size="lg" fontWeight="bold"  color="black"  />
                     {/* ----------------------------- */}
                     <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton border="2px solid #fb982f" bg="black" color="#fff" />
          <DrawerHeader ></DrawerHeader>
          <DrawerBody>
          <Box  className='navbar_right' flexGrow="3"  >
              
                <p className='side' onClick={onClose}><a href="#home">Home</a></p>
                <p className='side' onClick={onClose}><a href="#about">About</a></p>
                <p className='side' onClick={onClose}><a href="#skill">Skill</a></p>
                <p className='side' onClick={onClose}><a href="#projects">Projects</a></p>
                <p className='side' onClick={onClose}><a href="#github">Github</a></p>
                <p className='side' onClick={onClose}><button><a href="#achievements">Achievements</a></button></p>
                <p className='side' onClick={onClose}><a href="#contact">Contact</a></p>
                
              
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
                   </Box>
                  
            </Show>
          
        </Box>
        </Box>
    </Box>
    
  )
}

export default Navbar