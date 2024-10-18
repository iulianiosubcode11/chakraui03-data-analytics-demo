import React from "react";
import { Text, VStack, Flex } from "@chakra-ui/react";
import { withRouter } from "react-router";

function AppHeader(props) {

    return (
        <React.Fragment>
            <Flex w="100%" h="100px" >
                <VStack w="100%" h="100px" bg='gray.200' borderBottom="1px solid #cecece">
                    <Text>ceva</Text>
                </VStack>
            </Flex>
        </React.Fragment>
    )
}

export default withRouter(AppHeader);