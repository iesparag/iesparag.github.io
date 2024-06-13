import { Box, Heading, Grid, Image, Hide, Text, Flex } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import React from "react";
import Responsibilites from "./Responsibilites";
import {
    BrainerHub_ProjectDetail,
    ClientManagementDetails,
} from "../StaticData";

const Experience = () => {
    console.log(BrainerHub_ProjectDetail, ClientManagementDetails);
    return (
        <Box
            id="experience"
            paddingTop={{ base: "70px", sm: "70px", md: "100px", lg: "100px" }}
        >
            <Box className="section-title">
                <Heading as="h2" opacity="0.5" size="2xl">
                    Experience
                </Heading>
            </Box>
            <Box>
                <Box mb="10px">
                    <Text color="#fb982f" fontSize="24px">
                        BrainerHub Solutions, Ahmedabad
                    </Text>
                    <Text fontSize="20px">April 2023 - Present</Text>
                    <Text fontSize="24px">Full Stack Developer</Text>
                </Box>
                <Flex
                    maxWidth="95%"
                    justifyContent="space-between"
                    gap="5% !important"
                    display={{ base: "block", md: "block", lg: "flex" }}
                >
                    <Box w={"100%"} mb={{ base: "5%", lg: "auto" }}>
                        <Text color="#fb982f" fontSize="20px">
                            Development Responsibilities:
                        </Text>
                        <Responsibilites items={BrainerHub_ProjectDetail} />
                    </Box>
                    <Box w={"100%"}>
                        <Text color="#fb982f" fontSize="20px">
                            Client Management Responsibilities:
                        </Text>
                        <Responsibilites items={ClientManagementDetails} />
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default Experience;
