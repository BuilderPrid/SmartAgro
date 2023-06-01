import { Button, Box, HStack, Heading } from "@chakra-ui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Fragment>
            <Box

                position="fixed"
                top={0}
                left={0}
                right={0}
                translateY={0}
                transitionProperty="transform"
                transitionDuration=".3s"
                transitionTimingFunction="ease-in-out"
                backgroundColor="#000002ab"
            >
                <Box color="white" maxWidth="1280px" margin="0 auto">
                    <HStack
                        px={26}
                        py={4}
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <nav>
                            {/* Add social media links based on the `socials` data */
                                <HStack spacing={8}>
                                    {
                                        <Heading>Welcome to Agro India!! </Heading>
                                    }
                                </HStack>
                            }
                        </nav>
                        <nav>
                            <HStack spacing={8}>z``
                                {/* Add links to Projects and Contact me section */
                                    <>
                                        <Link to='/signup'>
                                            <Button colorScheme="green">Signup</Button>
                                        </Link>
                                        <Link to='/login'>
                                            <Button colorScheme="teal">Login</Button>
                                        </Link>
                                    </>

                                }
                            </HStack>
                        </nav>
                    </HStack>
                </Box>
            </Box >
        </Fragment >
    );
}
export default Navbar;