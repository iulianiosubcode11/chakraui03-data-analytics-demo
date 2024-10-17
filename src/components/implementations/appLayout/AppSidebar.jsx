import React from "react";
import { Text } from "@chakra-ui/react";
import { withRouter } from "react-router";

function AppSidebar(props) {

    return (
        <React.Fragment>
            <Text>Hello Sidebar</Text>
        </React.Fragment>
    )
}

export default withRouter(AppSidebar);