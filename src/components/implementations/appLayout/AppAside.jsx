import React from "react";
import { Text, Flex, VStack } from "@chakra-ui/react";
import { withRouter } from "react-router";

function AppAside(props) {

    return (
        <React.Fragment>
            <VStack h="100%" w="300px" bg="green.100"  style={{minWidth: "300px", maxWidth: "300px"}}>
                <Text>Hello Aside</Text>
            </VStack>
        </React.Fragment>
    )
}

export default withRouter(AppAside);