import React from "react";
import { Text, VStack } from "@chakra-ui/react";
import { withRouter } from "react-router";

function AppFooter(props) {

    return (
        <React.Fragment>
            <VStack w="100%" h="40px" bg="gray.100" borderTop="1px solid #cecece">
                <Text>Footer</Text>
            </VStack>
            
        </React.Fragment>
    )
}

export default withRouter(AppFooter);