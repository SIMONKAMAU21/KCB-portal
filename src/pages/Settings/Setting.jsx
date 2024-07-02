import React from "react";
import PageWrapper from "../../components/RoutesPageWrapper";
import { Box, HStack, VStack, Spacer } from "@chakra-ui/react";
import Leftsidebar from "./SettingSideBar/Settingnavigation";
import { Outlet } from "react-router-dom";

const Setting = ({ children }) => {
  return (
    <PageWrapper>
      <HStack w={"full"} gap={"10px"}>
        <Box flex={8} h={"100vh"}>
          <Outlet/>
        </Box>

        <Box flex={2}>
          <Leftsidebar />
        </Box>
      </HStack>
    </PageWrapper>
  );
};

export default Setting;
