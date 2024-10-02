import { Box } from "@chakra-ui/react";
import { GetStarted } from "../components/GetStarted";
import { Features } from "../components/Features";
import { Review } from "../components/Review";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

const HomePage = () => {
  return (
    <Box>
      <GetStarted />
      <Features />
      <Review />
      <Contact/>
      <Footer />
    </Box>
  );
};

export default HomePage;
