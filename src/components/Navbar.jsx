import { Box, Image,Show,Hide ,Flex, Heading, Button,} from '@chakra-ui/react'
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
import { HiOutlineDownload } from 'react-icons/hi'
import "./Navbar.css"

const Navbar = () => {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [placement, setPlacement] = React.useState("right");
  

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };
 

  
  //resume link https://drive.google.com/file/d/1aP-AGJxtXnLABlQ98f3C9eUCpOxpYnUo/view?usp=share_link

  return (
    
    <Box   className='navbar'    >
        <Box    zIndex="100"  display="block"  position="fixed" top="0" justifyContent="space-evenly" width="100vw" >
        <Box     justifyContent={{base:"space-between",md:"space-between"}} id='navbar' className='navbar_conatiner' display="flex" alignItems="center" boxShadow="dark-lg"  padding="10px" >
          <Hide below="base" >
            <Box alignItems="center"  className='navbar_left'>
                <a href="#home"><Heading as="h1" size="2xl" letterSpacing="2px" >PARAG</Heading></a>
            </Box>
            </Hide>
            <Hide below="md">
            <Box  className='navbar_right' flexGrow="3"  >
               <Flex alignItems="center" justifyContent='space-evenly'>
                
                <p className='a-tag'  ><a  href="#about">About</a></p>
                <p className='a-tag'  ><a href="#skill">Skill</a></p>
                <p className='a-tag'  ><a href="#projects">Projects</a></p>
                <p className='a-tag'  ><a href="#github">Github</a></p>
                <p className='a-tag'  ><a href="#contact">Contact</a></p>
                <button className='btn_pill' ><a   href="https://drive.google.com/uc?id=1aP-AGJxtXnLABlQ98f3C9eUCpOxpYnUo&export=download"   download  >RESUME &#8595;
              </a></button>
               </Flex>
            </Box>
            </Hide>
            <Show below='md' >
                   <Box m="auto" display="flex" alignItems="center" justifyContent="center" onClick={() => handleClick(size)}  >
                     <HamburgerIcon position="fixed"  right="20px"   key={size}   fontWeight="bold" h={8} w={8} color="black"  />
                     {/* ----------------------------- */}
                     <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton border="2px solid #fb982f" bg="black" color="#fff" />
          <DrawerHeader ></DrawerHeader>
          <DrawerBody>
          <Box  className='navbar_right' flexGrow="3"  >
              <Button bg="black" as="a" href="https://drive.google.com/uc?id=1aP-AGJxtXnLABlQ98f3C9eUCpOxpYnUo&export=download"  className='side' download onClick={onClose} >RESUME &#8595;
             
              </Button>
          <a href="#home"><p className='side' onClick={onClose}>Home</p></a>
          <a href="#about"> <p className='side' onClick={onClose}>About</p></a>
          <a href="#skill"> <p className='side' onClick={onClose}>Skill</p></a>
          <a href="#projects"> <p className='side' onClick={onClose}>Projects</p></a>
          <a href="#github"> <p className='side' onClick={onClose}>Github</p></a>
          <a href="#achievements"> <p className='side' onClick={onClose}>Achievements</p></a>
          <a href="#contact">   <p className='side' onClick={onClose}>Contact</p></a>
                
              
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