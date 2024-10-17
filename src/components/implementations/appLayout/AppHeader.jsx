import React from "react";
import { Text } from "@chakra-ui/react";
import { withRouter } from "react-router";

function AppHeader(props) {

    return (
        <React.Fragment>
            <Text>Hello Header</Text>
        </React.Fragment>
    )
}

export default withRouter(AppHeader);