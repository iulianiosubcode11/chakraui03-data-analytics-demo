import React from "react";
import { Text } from "@chakra-ui/react";
import { withRouter } from "react-router";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppAside from "./AppAside";
import AppSidebar from "./AppSidebar";
import AppBody from "./AppBody";

function AppLayout(props) {

    return (
        <React.Fragment>
            <AppHeader/>
            <AppBody/>
            <AppSidebar/>
            <AppAside/>            
            <AppFooter/>ceva
        </React.Fragment>
    )
}

export default withRouter(AppLayout);