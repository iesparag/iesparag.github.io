import { Box, Heading, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

import Photo_for_tech from "../assets/Photo_for_tech.jpg";
import Type from "../parts/Type";

const Home = () => {
    return (
        <Box
            id="home"
            paddingTop={{ base: "70px", sm: "70px", md: "100px", lg: "100px" }}
        >
            <Grid
                mt="20px"
                alignItems="center"
                justifyContent="space-around"
                px={{ base: "20px", md: "80px", lg: "150px" }}
                gap={10}
                gridTemplateColumns={{ md: "1.5fr 1fr" }}
            >
                <Box>
                    <Box
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                        gap={{ base: "10px", md: "20px", lg: "30px" }}
                    >
                        <Heading
                            style={{ textAlign: "left" }}
                            as="h1"
                            size="xl"
                        >
                            Hello, I'm <span>Parag Jain</span>.
                        </Heading>
                        <Heading
                            style={{ textAlign: "left" }}
                            as="h1"
                            size="xl"
                        >
                            I am a <span>{`{' '}`}</span>
                        </Heading>
                    </Box>
                    {/* <Flex>
                        <Heading my="20px" as="h1" size="lg">
                            <Type />
                        </Heading>
                    </Flex> */}
                    <Text
                        fontSize={{ base: "20px", md: "22px" }}
                        marginTop={{ base: "20px", md: "30px", lg: "50px" }}
                        fontStyle="italic"
                        letterSpacing={{ base: "1.5px", md: "1px", lg: "2px" }}
                        lineHeight={{ base: "40px", md: "35px", lg: "50px" }}
                        fontWeight="bold"
                    >
                        <span>Full Stack Developer and Designer:</span> Crafting
                        Beautiful Frontend Interfaces and Robust Backend
                        Solutions Focused on Simplicity and Purpose.
                    </Text>
                </Box>

                <Flex m={{ base: "auto" }} justifyContent="center">
                    <Image
                        width={{ base: "80%", md: "100%", lg: "100%" }}
                        boxShadow="base"
                        borderRadius="50%"
                        border="5px solid #fb982f"
                        src={Photo_for_tech}
                        alt="profile_pic"
                    />
                </Flex>
            </Grid>
        </Box>
    );
};

export default Home;
