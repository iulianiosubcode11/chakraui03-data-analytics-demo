import React from "react";
import { Text, Flex, VStack, Box } from "@chakra-ui/react";
import { withRouter } from "react-router";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppSidebar from "./AppSidebar";
import AppBody from "./AppBody";

function AppLayout(props) {

    return (
        <React.Fragment>
            <Box w="100%">
                <AppHeader />
                <Flex w="100%" bg="blue.200">
                    <AppBody />
                </Flex>
                <AppFooter />
            </Box>
        </React.Fragment>
    )
}

export default withRouter(AppLayout);