import React from "react";
import { Text } from "@chakra-ui/react";
import { withRouter } from "react-router";

function AppBody(props) {

    return (
        <React.Fragment>
            <Text>Hello Body</Text>
        </React.Fragment>
    )
}

export default withRouter(AppBody);