import { Box, Center, Heading, Grid, Image } from "@chakra-ui/react";

import React from "react";
import "./Cube.css";

const Tech = () => {
    const tech = [
        {
            image: "https://as2.ftcdn.net/v2/jpg/00/75/92/23/1000_F_75922341_EQ5ir4801xHK00ysm5YhZ8nta9jGjNto.jpg",
        },
        {
            image: "https://as2.ftcdn.net/v2/jpg/00/75/92/23/1000_F_75922336_Jz2QgNOx7dnRea9ZI6yQTDtn1vHq5ejF.jpg",
        },
        {
            image: "https://as2.ftcdn.net/v2/jpg/00/75/92/23/1000_F_75922332_V8jiJ9I2F9d9HqV7RtPzUAxr5s7YHWOd.jpg",
        },
        {
            image: "https://t3.ftcdn.net/jpg/03/04/97/12/240_F_304971233_mQ4xlfnBGSszgzJPYzQnZtWI04ZNmuuP.jpg",
        },
        {
            image: "data:image/png;base64,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",
        },
        {
            image: "https://gitlab.com/uploads/-/system/project/avatar/4469969/node.jpg",
        },
        {
            image: "https://gitlab.com/uploads/-/system/project/avatar/38241258/Screen_Shot_2022-08-16_at_12.14.39_AM.png",
        },
        {
            image: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
        },
        {
            image: "https://s.yimg.com/uu/api/res/1.2/y44cQjaKB1xdKCsp9SPtKQ--~B/aD0zNzk7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/58c4d584d4e393722ba985479f6d446c",
        },
        {
            image: "https://i.ytimg.com/an/cxm6FNyKzwA/3903739474801779860_mq.jpg?v=62a9dfef",
        },
        {
            image: "https://jquery-plugins.net/image/plugin/chakra-ui-simple-modular-accessible-ui-components-for-react-applications.png",
        },
        {
            image: "https://cdn.sanity.io/images/599r6htc/localized/aabcd62c256c5baa97a1653d544737701a94ca1c-1108x1108.png?w=514&h=514&q=75&fit=max&auto=format",
        },
        {
            image: "https://digitalmad.co.uk/app/uploads/2017/12/front-end-development-bootstrap.jpg",
        },
    ];

    return (
        <Box
            paddingTop={{ base: "70px", sm: "70px", md: "100px", lg: "100px" }}
            id="skill"
        >
            <Box className="section-title">
                <Heading opacity="0.5" as="h2" size="2xl">
                    Tech Skill
                </Heading>
            </Box>
            <Grid
                mb={{ base: "70px", md: "100px" }}
                templateColumns={{
                    base: "1fr 1fr 1fr",
                    sm: "1fr 1fr 1fr 1fr",
                    md: "1fr 1fr 1fr 1fr",
                    lg: "1fr 1fr 1fr 1fr 1fr",
                }}
            >
                {tech?.map((tech, index) => (
                    <Box
                        bg="#fff"
                        key={index}
                        className="cube"
                        style={{ margin: "50px auto" }}
                    >
                        <Box className="top"></Box>
                        <Box>
                            <span style={{ "--i": 0 }}>
                                <Center>
                                    <Image width="100%" src={tech.image} />
                                </Center>
                            </span>
                            <span style={{ "--i": 1 }}>
                                <Center>
                                    <Image width="100%" src={tech.image} />
                                </Center>
                            </span>
                            <span style={{ "--i": 2 }}>
                                <Center>
                                    <Image width="100%" src={tech.image} />
                                </Center>
                            </span>
                            <span style={{ "--i": 3 }}>
                                <Center>
                                    <Image width="100%" src={tech.image} />
                                </Center>
                            </span>
                        </Box>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default Tech;
