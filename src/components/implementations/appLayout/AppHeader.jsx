import React, { useState } from "react";
import {
    Text, VStack, Flex, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    HStack, Box, Button, Input, Spacer, useDisclosure,
    SimpleGrid,
    useColorMode,
    useColorModeValue,
    FormControl,
    FormLabel,
} from "@chakra-ui/react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { withRouter } from "react-router-dom";

function AppHeader(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { colorMode, toggleColorMode } = useColorMode();
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    
    // Use useColorModeValue to set different colors for light and dark modes
    const bgColor = useColorModeValue("gray.100", "gray.700")
    const borderColor = useColorModeValue("gray.200", "gray.600")

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(inputValue !== "");
    };

    const handleRegister = () => {
        // Implement registration logic here
        console.log("Registering:", inputValue);
    };

    const handleReset = () => {
        setInputValue("");
        setIsFocused(false);
    };

    const isLabelFloating = isFocused || inputValue !== "";

    // Move useColorModeValue calls here
    const floatingColor = useColorModeValue("blue.600", "blue.300");
    const normalColor = useColorModeValue("gray.500", "gray.400");

    return (
        <React.Fragment>
            <Flex w="100%" h="100px" >
                <VStack w="100%" h="100px" bg={bgColor} borderBottom={`1px solid ${borderColor}`}>
                    <HStack w="100%" h="100%" spacing={4}>
                        <Flex w="100%" h="100%" alignItems='center' justifyContent='flex-end' px={5}>
                            <FormControl w="250px" mr={4} position="relative">
                                <FormLabel
                                    htmlFor="name"
                                    position="absolute"
                                    top={isLabelFloating ? "4px" : "50%"}
                                    left={2}
                                    zIndex={2}
                                    fontSize={isLabelFloating ? "10px" : "14px"}
                                    fontWeight={isLabelFloating ? "400" : "400"}
                                    transition="all 0.2s"
                                    transform={isLabelFloating ? "translateY(0)" : "translateY(-50%)"}
                                    transformOrigin="left top"
                                    pointerEvents="none"
                                    textTransform={isLabelFloating ? "uppercase" : "none"}
                                    color={isLabelFloating ? floatingColor : normalColor}
                                >
                                    Username
                                </FormLabel>
                                <Input
                                    id="name"
                                    placeholder=" "
                                    _placeholder={{ opacity: 0 }}
                                    pt={isLabelFloating ? "12px" : "0"}
                                    px="8px"
                                    height="50px"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    borderColor={useColorModeValue("gray.300", "gray.600")}
                                    _hover={{ borderColor: useColorModeValue("gray.400", "gray.500") }}
                                    _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px blue.500" }}
                                />
                            </FormControl>
                            <Button 
                                colorScheme="blue" 
                                mr={2} 
                                onClick={handleRegister}
                                isDisabled={inputValue === ""}
                            >
                                Register
                            </Button>
                            <Button 
                                colorScheme="red" 
                                mr={4} 
                                onClick={handleReset}
                            >
                                Reset
                            </Button>
                            <SimpleGrid columns={2} spacing={2}>
                                <Button ref={btnRef} colorScheme='teal' onClick={onOpen} leftIcon={<FaBars />}>
                                    Open
                                </Button>
                                <Button onClick={toggleColorMode} leftIcon={colorMode === "light" ? <FaMoon /> : <FaSun />}>
                                    {colorMode === "light" ? "Dark" : "Light"}
                                </Button>
                            </SimpleGrid>
                        </Flex>
                    </HStack>
                </VStack>
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </React.Fragment>
    )
}

export default withRouter(AppHeader);
