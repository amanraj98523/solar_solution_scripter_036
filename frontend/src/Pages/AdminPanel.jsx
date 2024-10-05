import { Box } from "@chakra-ui/react";

import { UserDashboard } from "../components/UserDashboard";
import { PollGraph } from "../components/PollGraph";

export const AdminPanel = () => {
  return (
    <Box>
      <PollGraph />
      <UserDashboard />
    </Box>
  );
};
