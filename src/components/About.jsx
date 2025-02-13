import { Box, Flex, Heading, Image, Show, Text } from "@chakra-ui/react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
    return (
        <Box
            paddingTop={{ base: "70px", sm: "70px", md: "100px", lg: "100px" }}
            id="about"
        >
            <Box className="section-title">
                <Heading opacity="0.5" as="h2" size="2xl">
                    About
                </Heading>
            </Box>
            {/* below content start */}

            <Box px="10px">
                {/* <Box> */}
                    {/* <Heading
                        letterSpacing="2px"
                        as="h2"
                        mb="15px"
                        size={{ base: "md", md: "xl" }}
                    >
                        I'm Parag jain
                    </Heading> */}
                    {/* <Heading as="h2" mb="15px" size={{ base: "md", md: "xl" }}>
                        <span>Full Stack Web Developer</span>
                    </Heading> */}

                    <Box
                        px={{ base: "15px", md: "20px", lg: "10px" }}
                        lineHeight={{ base: "30px", md: "40px" }}
                        as="h4"
                        fontSize={{ base: "18px", md: "18px" }}
                        letterSpacing="1.5px"
                    >
                        I am a Full Stack MERN Developer with{" "}
                        <span>2.5 years</span> of experience in building
                        user-focused web applications using{" "}
                        <span>JavaScript</span>, <span>React</span>,{" "}
                        <span>Node.js</span>, and <span>MongoDB</span>. I excel
                        in both <span>frontend</span> and <span>backend</span>{" "}
                        development, ensuring seamless and efficient solutions.
                        My passion for <span>innovation</span> drives me to
                        create exceptional web applications that meet user
                        needs. I thrive in{" "}
                        <span>collaborative environments</span> and am always
                        eager to learn and adapt. Currently, I am seeking new
                        opportunities to leverage my skills and grow within a
                        dynamic team. Let’s connect and collaborate to create
                        outstanding web solutions!
                    </Box>
                {/* </Box> */}
                <Flex
                    gap={10}
                    mt="50px"
                    display={{ base: "block", md: "flex" }}
                >
                    {/* <Show above="md"> */}
                    <Flex mb={{ base: "40px", md: "auto" }}>
                        <Image
                            data-aos="fade-right"
                            data-aos-easing="ease-in-out"
                            data-aos-duration="1500"
                            borderRadius={"20px"}
                            m="auto"
                            width={{ base: "80%", md: "100%", lg: "50%" }}
                            src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"
                            bg="#202124"
                            alt="coder_gif"
                        />
                    </Flex>
                    {/* </Show> */}
                    <Box
                        lineHeight={{ base: "30px", md: "40px" }}
                        letterSpacing="1px"
                        width={{ base: "100%", md: "50%" }}
                        p="10px"
                    >
                        <Text
                            mb="10px"
                            fontWeight={{ base: "auto", md: "semibold" }}
                        >
                            Email Address :{" "}
                            <a href="mailto:iesparagjain@gmail.com">
                                <span> iesparagjain@gmail.com</span>
                            </a>
                        </Text>

                        <Text
                            mb="10px"
                            fontWeight={{ base: "auto", md: "semibold" }}
                        >
                            Phone Number :{" "}
                            <a href="tel:9770525851">
                                <span> 9770525851</span>
                            </a>
                        </Text>

                        <Text
                            mb="10px"
                            fontWeight={{ base: "auto", md: "semibold" }}
                        >
                            Location : <span> Sagar M.P</span>
                        </Text>

                        <Text
                            mb="10px"
                            fontWeight={{ base: "auto", md: "semibold" }}
                        >
                            Degree : <span> B.Tech (Civil Engineer)</span>
                        </Text>

                        <Text
                            mb="10px"
                            fontWeight={{ base: "auto", md: "semibold" }}
                        >
                            LinkedIn:
                            <a href="https://www.linkedin.com/in/iesparag/">
                                {" "}
                                <span> LinkedIn</span>{" "}
                            </a>
                        </Text>

                        <Text fontWeight={{ base: "auto", md: "semibold" }}>
                            GitHub :
                            <a href="https://github.com/iesparag">
                                <span> https://github.com/iesparag</span>
                            </a>
                        </Text>
                    </Box>
                </Flex>
            </Box>

            {/* below content end */}
        </Box>
    );
};

export default About;
