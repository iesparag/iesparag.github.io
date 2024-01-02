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
        <Box>
          <Heading
            letterSpacing="2px"
            as="h2"
            mb="15px"
            size={{ base: "md", md: "xl" }}
          >
            I'm Parag jain
          </Heading>
          <Heading as="h2" mb="15px" size={{ base: "md", md: "xl" }}>
            <span>Full Stack Web Developer</span>
          </Heading>

          <Box
            px={{ base: "15px", md: "50px", lg: "100px" }}
            lineHeight={{ base: "30px", md: "40px" }}
            as="h4"
            size={{ base: "18px", md: "md" }}
            letterSpacing="1.5px"
          >
            Highly motivated and detail-oriented <span>full-stack MERN developer</span> with a strong
foundation in <span>JavaScript, React, Node.js, and MongoDB </span>. Seeking an opportunity
to contribute my technical skills and passion for innovation to a dynamic team
focused on creating exceptional web applications that meet and exceed user
expectations.
          </Box>
        </Box>
        <Flex gap={10} mt="50px" display={{base:"block",md:"flex"}} >
          {/* <Show above="md"> */}
            <Flex mb={{base:"40px",md:"auto"}}>
              <Image
                data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-duration="1500"
                borderRadius={"20px"}
                m="auto"
                width={{base:"80%", md: "100%", lg: "50%" }}
                src="https://www.vkreate.in/storage/services_image/2019-10-02-17-55-54-5d94e4aa809b3-web-development.gif"
                bg="#202124"
                alt="coder_gif"
              />
            </Flex>
          {/* </Show> */}
          <Box lineHeight={{base:"30px",md:"40px"}} letterSpacing="1px" width={{ base: "100%", md: "50%" }} p="10px">
            <Text mb="10px" fontWeight={{ base: "auto", md: "semibold" }}>
              Email Address :{" "}
              <a href="mailto:iesparagjain@gmail.com">
                <span> iesparagjain@gmail.com</span>
              </a>
            </Text>

            <Text mb="10px" fontWeight={{ base: "auto", md: "semibold" }}>
              Phone Number :{" "}
              <a href="tel:9770525851">
                <span> 9770525851</span>
              </a>
            </Text>

            <Text mb="10px" fontWeight={{ base: "auto", md: "semibold" }}>
              Location : <span> Sagar M.P</span>
            </Text>

            <Text mb="10px" fontWeight={{ base: "auto", md: "semibold" }}>
              Degree : <span> B.Tech (Civil Engineer)</span>
            </Text>

            <Text mb="10px" fontWeight={{ base: "auto", md: "semibold" }}>
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
