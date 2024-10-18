import React from "react";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { withRouter } from "react-router";
import AppAside from "./AppAside";
import AppSidebar from "./AppSidebar";

function AppBody(props) {

    return (
        <React.Fragment>
            <HStack h="calc(100vh - 140px)" bg="gray.200" w="100%">
                <AppSidebar />                    
                <VStack w="100%" bg="blue.100" h="100%">
                    <Text>Hello Body</Text>
                </VStack>
                <AppAside/>
            </HStack>

        </React.Fragment>
    )
}

export default withRouter(AppBody);