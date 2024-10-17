import React from "react";
import { Text } from "@chakra-ui/react";
import { withRouter } from "react-router";

function AppFooter(props) {

    return (
        <React.Fragment>
            <Text>Footer</Text>
        </React.Fragment>
    )
}

export default withRouter(AppFooter);