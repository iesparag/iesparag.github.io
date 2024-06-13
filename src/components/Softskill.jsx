import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";

const Softskill = () => {
    return (
        <Box m="auto" mb="30px">
            <Flex gap={{ base: "1", md: "5" }} m="auto">
                <Box m="auto">
                    <Accordion
                        allowToggle
                        w={{ base: "auto", md: "200px", lg: "300px" }}
                    >
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Heading
                                        bgColor={"none"}
                                        opacity="0.5"
                                        as="h1"
                                        size={{ base: "md", md: "lg" }}
                                        flex="1"
                                        textAlign="left"
                                    >
                                        Soft Skill
                                    </Heading>
                                    <br />

                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <hr />
                            <AccordionPanel pb={4}>
                                <b>Teamwork</b>
                            </AccordionPanel>
                            <hr />
                            <AccordionPanel pb={4}>
                                <b>Collaboration</b>
                            </AccordionPanel>
                            <hr />
                            <AccordionPanel pb={4}>
                                <b>Problem-Solving</b>
                            </AccordionPanel>
                            <hr />
                            <AccordionPanel pb={4}>
                                <b>Adaptability</b>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>

                {/* right section */}
                <Box m="auto">
                    <Accordion
                        allowToggle
                        w={{ base: "auto", md: "200px", lg: "300px" }}
                    >
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Heading
                                        opacity="0.5"
                                        as="h1"
                                        size={{ base: "md", md: "lg" }}
                                        flex="1"
                                        textAlign="left"
                                    >
                                        Statistics
                                    </Heading>
                                    <br />

                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <hr />
                            <AccordionPanel pb={4}>
                                <b> Coding ( 1200+ Hours ) </b>
                            </AccordionPanel>
                            <hr />
                            <AccordionPanel pb={4}>
                                <b>DSA ( 300+ Problems ) </b>
                            </AccordionPanel>
                            <hr />
                            <AccordionPanel pb={4}>
                                <b>Soft-Skill ( 100+ Hours ) </b>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Flex>
        </Box>
    );
};

export default Softskill;
