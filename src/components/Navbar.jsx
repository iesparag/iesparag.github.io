import { Box, Show, Hide, Flex, Heading, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  //resume link https://drive.google.com/file/d/1aP-AGJxtXnLABlQ98f3C9eUCpOxpYnUo/view?usp=share_link

  return (
    <Box className="navbar">
      <Box
        zIndex={20}
        bg="#202124"
        display="block"
        position="fixed"
        top="0"
        justifyContent="space-evenly"
        width="100vw"
      >
        <Box
          zIndex={20}
          bg="#202124"
          justifyContent={{ base: "space-between", md: "space-between" }}
          id="navbar"
          className="navbar_conatiner"
          display="flex"
          alignItems="center"
          boxShadow="dark-lg"
          padding="10px"
        >
          <Hide below="base">
            <Box alignItems="center" className="navbar_left">
              <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={2000}
              >
                <Heading as="h1" size="2xl" letterSpacing="2px">
                  PARAG
                </Heading>
              </Link>
            </Box>
          </Hide>

          <Hide below="md">
            <Box className="navbar_right" flexGrow="3">
              <Flex alignItems="center" justifyContent="space-evenly">
                <Link
                  to="about"
                  className="a-tag"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={2000}
                >
                  About
                </Link>

                <Link
                  to="education"
                  className="a-tag"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={2000}
                >
                  Education
                </Link>

                <Link
                  to="skill"
                  className="a-tag"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={2000}
                >
                  Skills
                </Link>

                <Link
                  to="projects"
                  className="a-tag"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={2000}
                >
                  Projects
                </Link>

                <Link
                  to="github"
                  className="a-tag"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={2000}
                >
                  Github
                </Link>

                <Link
                  to="contact"
                  className="a-tag"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={2000}
                >
                  Contact
                </Link>

                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1aP-AGJxtXnLABlQ98f3C9eUCpOxpYnUo/view?usp=sharing"
                    )
                  }
                  className="btn_pill resu"
                >
                  <a style={{color:"white"}}
                    href="https://drive.google.com/uc?id=1aP-AGJxtXnLABlQ98f3C9eUCpOxpYnUo&export=download"
                    download
                  >
                    RESUME &#8595;
                  </a>
                </button>
              </Flex>
            </Box>
          </Hide>
          <Show below="md">
            <Box
              m="auto"
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={() => handleClick(size)}
            >
              <HamburgerIcon
                position="fixed"
                right="20px"
                key={size}
                fontWeight="bold"
                h={8}
                w={8}
                color="black"
              />
              {/* ----------------------------- */}
              <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton
                    border="2px solid #fb982f"
                    bgColor="black"
                    color="#fff"
                  />
                  <DrawerHeader></DrawerHeader>
                  <DrawerBody>
                    <Box className="navbar_right" flexGrow="3">
                      <Button
                        bg="black"
                        as="a"
                        href="https://drive.google.com/uc?id=1aP-AGJxtXnLABlQ98f3C9eUCpOxpYnUo&export=download"
                        className="side"
                        download
                        onClick={onClose}
                      >
                        <p
                          onClick={() =>
                            window.open(
                              "https://drive.google.com/file/d/1aP-AGJxtXnLABlQ98f3C9eUCpOxpYnUo/view?usp=sharing"
                            )
                          }
                          style={{backgroundColor:"black",color:"white"}}
                        >
                          RESUME &#8595;
                        </p>
                      </Button>

                      <Link
                        to="home"
                        duration={2000}
                        onClick={onClose}
                        spy={true}
                        smooth={true}
                      >
                        <p onClick={onClose} className="side">
                          Home
                        </p>
                      </Link>

                      <Link
                        to="about"
                        duration={2000}
                        onClick={onClose}
                        spy={true}
                        smooth={true}
                      >
                        <p onClick={onClose} className="side">
                          About
                        </p>
                      </Link>

                      <Link
                        to="education"
                        duration={2000}
                        onClick={onClose}
                        spy={true}
                        smooth={true}
                      >
                        <p onClick={onClose} className="side">
                          Education
                        </p>
                      </Link>

                      <Link
                        to="skill"
                        duration={2000}
                        onClick={onClose}
                        spy={true}
                        smooth={true}
                      >
                        <p onClick={onClose} className="side">
                          Skills
                        </p>
                      </Link>

                      <Link
                        to="projects"
                        duration={2000}
                        onClick={onClose}
                        spy={true}
                        smooth={true}
                      >
                        <p onClick={onClose} className="side">
                          Projects
                        </p>
                      </Link>

                      <Link
                        to="github"
                        duration={2000}
                        onClick={onClose}
                        spy={true}
                        smooth={true}
                      >
                        <p onClick={onClose} className="side">
                          Github
                        </p>
                      </Link>

                      <Link
                        to="achievements"
                        duration={2000}
                        onClick={onClose}
                        spy={true}
                        smooth={true}
                      >
                        <p onClick={onClose} className="side">
                          Achievements
                        </p>
                      </Link>

                      <Link
                        to="contact"
                        duration={2000}
                        onClick={onClose}
                        spy={true}
                        smooth={true}
                      >
                        <p onClick={onClose} className="side">
                          Contact
                        </p>
                      </Link>
                    </Box>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
          </Show>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
