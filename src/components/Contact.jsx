import {
    Box,
    Button,
    Flex,
    FormLabel,
    Heading,
    IconButton,
    Input,
    Link,
    Stack,
    Textarea,
    useClipboard,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
  import { PhoneIcon } from '@chakra-ui/icons'
  import "./contact.css"
  import AOS from 'aos';
  import 'aos/dist/aos.css'; 
  AOS.init();

  

const Contact = () => {
    const { hasCopied, onCopy } = useClipboard('iesparagjain@gmail.com');
  return (
    <Box id='contact' paddingTop={{base:"70px",sm:"70px",md:"100px",lg:"100px"}}>
        {/* heading section */}
        <Box px={{base:"10px",md:"80px",lg:"100px" }} className='section-title' >
           <Heading as="h2" opacity="0.5"  size="2xl" >Contact Page</Heading>
        </Box>
        {/* main section */}
       
        
        <Flex
    //   bg={useColorModeValue('gray.100', 'gray.900')}
      align="center"
      justify="center"
     
      id="contact">
      <Box
        borderRadius="lg"
        mx={{ base: 5, md: 16, lg: 10 }}
        px={{ base: 5, lg: 16 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
           

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>
              <Stack data-aos="slide-right" data-aos-duration="2000" 
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}>
                {/* <Tooltip
                  label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                  closeOnClick={false}
                  hasArrow>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: '#fb982f',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip> */}

                <Link href="tel:9770525851" target="_blank"  >
                  <IconButton
                    aria-label="phone"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<PhoneIcon />}
                    _hover={{
                      bg: '#fb982f',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://github.com/iesparag" target="_blank"  >
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    _hover={{
                      bg: '#fb982f',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://wa.me/919770525851" target="_blank">
                  <IconButton
                    aria-label="whatsapp"
                    variant="ghost"
                    size="lg"
                    icon={<BsWhatsapp size="28px" />}
                    _hover={{
                      bg: '#fb982f',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://www.linkedin.com/in/iesparag/" target="_blank" >
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: '#fb982f',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box data-aos="slide-left" data-aos-duration="2000" 
                // bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base">
                <VStack spacing={5}>
                  <form  action="https://formspree.io/f/mknedrpa" method='POST'>
                  
                    <Box mb="10px">
                    <FormLabel>Name</FormLabel>          
                      
                        <Input 
                        focusBorderColor='#fb982f'
                        type="text"
                          name="name"
                          placeholder="Your Name"  
                        autoComplete='off'
                        required
                        />
                    </Box>
                   
                 

                  
                    <Box mb="10px">
                    <FormLabel>Email</FormLabel>

                    
                     
                          <Input
                          focusBorderColor='#fb982f'
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                          autoComplete='off'

                          />
                    </Box>
                   
                  

                 
                    <Box mb="10px">
                    <FormLabel>Message</FormLabel>

                        <Textarea
                        focusBorderColor='#fb982f'
                          name="message"
                          placeholder="Your Message"
                          rows={6}
                          resize="none"
                          required
                          autoComplete='off'
                        />
                    </Box>
                 

                    {/* <Box mt="10px" as={Button} class="button-82-pushable" type="submit">
                      <span class="button-82-shadow"></span>
                      <span class="button-82-edge"></span>
                      <span class="button-82-front text">
                        Send 
                      </span>
                    </Box> */}



                  <Box mb="10px"><Input
                  opacity="0.75"
                    colorScheme="blue"
                    letterSpacing="1px"
                    bg="#fb982f"
                    color="black"
                    type="submit"
                    fontWeight="bold"
                    value="Send Message"
                    _hover={{
                      bg: '#fb982f',
                      color:"black"
                    }}
                    isFullWidth/></Box>
                    
                    </form>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
       

        
    </Box>
  )
}

export default Contact