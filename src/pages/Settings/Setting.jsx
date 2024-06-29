import React from "react";
import PageWrapper from "../../components/RoutesPageWrapper";
import { Box, HStack, VStack, Spacer } from "@chakra-ui/react";
import Leftsidebar from "./SettingSideBar/Settingnavigation";

const Setting = ({ children }) => {
  return (
    <PageWrapper>
      <HStack w={"full"} gap={"10px"}>
        <Box flex={8} h={"100vh"}>
          {children}
        </Box>

        <Box flex={2}>
          <Leftsidebar />
        </Box>
      </HStack>
    </PageWrapper>
  );
};

export default Setting;
