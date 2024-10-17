import React from "react";
import { Text } from "@chakra-ui/react";
import { withRouter } from "react-router";

function AppAside(props) {

    return (
        <React.Fragment>
            <Text>Hello Aside</Text>
        </React.Fragment>
    )
}

export default withRouter(AppAside);