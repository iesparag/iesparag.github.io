import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { BsGithub, BsLinkedin, BsPerson, BsPhone, BsTwitter, BsWhatsapp } from 'react-icons/bs';
  import { MdEmail, MdOutlineEmail } from 'react-icons/md';
  import { PhoneIcon } from '@chakra-ui/icons'



  

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
              <Stack
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

              <Box
                // bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base">
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                     
                      <Input focusBorderColor='#fb982f' type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                     
                      <Input
                      focusBorderColor='#fb982f'
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                    focusBorderColor='#fb982f'
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>

                  <Button
                    colorScheme="blue"
                    bg="#fb982f"
                    color="white"
                    _hover={{
                      bg: '#fb982f',
                      color:"black"
                    }}
                    isFullWidth>
                    Send Message
                  </Button>
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