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
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { PhoneIcon } from "@chakra-ui/icons";
import "./contact.css";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact = () => {
    const toast = useToast();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_cttwct8",
                "template_fbhj1bi",
                form.current,
                "WWNKds33SpcnjkE0Y"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    toast({
                        title: "E-mail",
                        description: "E-mail sent successfully..",
                        status: "success",
                        position: "top-right",
                        duration: 4000,
                        isClosable: true,
                    });
                    setName("");
                    setEmail("");
                    setMessage("");
                },
                (error) => {
                    console.log(error.text);
                    toast({
                        title: `Please enter correct detail`,
                        status: error,
                        position: "top-right",
                        duration: 4000,
                        isClosable: true,
                    });
                }
            );
    };

    return (
        <Box
            id="contact"
            paddingTop={{ base: "70px", sm: "70px", md: "100px", lg: "100px" }}
        >
            {/* heading section */}
            <Box
                px={{ base: "10px", md: "80px", lg: "100px" }}
                className="section-title"
            >
                <Heading as="h2" opacity="0.5" size="2xl">
                    Contact
                </Heading>
            </Box>
            {/* main section */}

            <Flex align="center" justify="center" id="contact">
                <Box
                    borderRadius="lg"
                    mx={{ base: 5, md: 16, lg: 10 }}
                    px={{ base: 5, lg: 16 }}
                >
                    <Box>
                        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                            <Stack
                                spacing={{ base: 4, md: 8, lg: 20 }}
                                direction={{ base: "column", md: "row" }}
                            >
                                <Stack
                                    data-aos="fade-right"
                                    data-aos-easing="ease-in-out"
                                    data-aos-duration="2000"
                                    align="center"
                                    justify="space-around"
                                    direction={{ base: "row", md: "column" }}
                                >
                                    <Link href="tel:9770525851" target="_blank">
                                        <Tooltip
                                            hasArrow
                                            label="9770525851"
                                            bg="#202124"
                                        >
                                            <IconButton
                                                aria-label="phone"
                                                variant="ghost"
                                                size="lg"
                                                fontSize="3xl"
                                                bgColor="none"
                                                icon={<PhoneIcon />}
                                                _hover={{
                                                    bg: "#fb982f",
                                                    color: useColorModeValue(
                                                        "white",
                                                        "gray.700"
                                                    ),
                                                }}
                                                isRound
                                            />
                                        </Tooltip>
                                    </Link>

                                    <Link
                                        href="https://github.com/iesparag"
                                        target="_blank"
                                    >
                                        <Tooltip
                                            hasArrow
                                            label="https://github.com/iesparag"
                                            bg="#202124"
                                        >
                                            <IconButton
                                                aria-label="github"
                                                variant="ghost"
                                                size="lg"
                                                fontSize="3xl"
                                                icon={<BsGithub />}
                                                _hover={{
                                                    bg: "#fb982f",
                                                    color: useColorModeValue(
                                                        "white",
                                                        "gray.700"
                                                    ),
                                                }}
                                                isRound
                                            />
                                        </Tooltip>
                                    </Link>

                                    <Link
                                        href="https://www.linkedin.com/in/iesparag/"
                                        target="_blank"
                                    >
                                        <Tooltip
                                            hasArrow
                                            label="https://www.linkedin.com/in/iesparag/"
                                            bg="#202124"
                                        >
                                            <IconButton
                                                aria-label="linkedin"
                                                variant="ghost"
                                                size="lg"
                                                icon={
                                                    <BsLinkedin size="28px" />
                                                }
                                                _hover={{
                                                    bg: "#fb982f",
                                                    color: useColorModeValue(
                                                        "white",
                                                        "gray.700"
                                                    ),
                                                }}
                                                isRound
                                            />
                                        </Tooltip>
                                    </Link>

                                    <Link
                                        href="https://wa.me/919770525851"
                                        target="_blank"
                                    >
                                        <Tooltip
                                            hasArrow
                                            label="9770525851"
                                            bg="#202124"
                                        >
                                            <IconButton
                                                aria-label="whatsapp"
                                                variant="ghost"
                                                size="lg"
                                                icon={
                                                    <BsWhatsapp size="28px" />
                                                }
                                                _hover={{
                                                    bg: "#fb982f",
                                                    color: useColorModeValue(
                                                        "white",
                                                        "gray.700"
                                                    ),
                                                }}
                                                isRound
                                            />
                                        </Tooltip>
                                    </Link>
                                </Stack>

                                <Box
                                    borderRadius="lg"
                                    p={8}
                                    color={useColorModeValue(
                                        "gray.700",
                                        "whiteAlpha.900"
                                    )}
                                    shadow="base"
                                >
                                    <VStack spacing={5}>
                                        <form ref={form} onSubmit={sendEmail}>
                                            <Box mb="10px">
                                                <FormLabel>Name</FormLabel>

                                                <Input
                                                    focusBorderColor="#fb982f"
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    type="text"
                                                    name="user_name"
                                                    placeholder="Your Name"
                                                    autoComplete="off"
                                                    required
                                                />
                                            </Box>

                                            <Box mb="10px">
                                                <FormLabel>Email</FormLabel>

                                                <Input
                                                    focusBorderColor="#fb982f"
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    name="user_email"
                                                    placeholder="Your Email"
                                                    required
                                                    autoComplete="off"
                                                />
                                            </Box>

                                            <Box mb="10px">
                                                <FormLabel>Message</FormLabel>

                                                <Textarea
                                                    focusBorderColor="#fb982f"
                                                    name="message"
                                                    value={message}
                                                    onChange={(e) =>
                                                        setMessage(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Your Message"
                                                    rows={6}
                                                    resize="none"
                                                    required
                                                    autoComplete="off"
                                                />
                                            </Box>

                                            <Box mb="10px">
                                                <Input
                                                    opacity="0.75"
                                                    colorScheme="blue"
                                                    letterSpacing="1px"
                                                    bg="#fb982f"
                                                    color="black"
                                                    type="submit"
                                                    fontWeight="bold"
                                                    value="Send Message"
                                                    _hover={{
                                                        bg: "#fb982f",
                                                        color: "black",
                                                    }}
                                                />
                                            </Box>
                                        </form>
                                    </VStack>
                                </Box>
                            </Stack>
                        </VStack>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default Contact;
