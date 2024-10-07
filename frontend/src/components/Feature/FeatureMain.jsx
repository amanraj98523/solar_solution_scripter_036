import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import "./Features.css";

export const Features = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://global.discourse-cdn.com/business7/uploads/adalo/original/3X/0/0/00cb4da7aa01fc9b9885eb31a1562e1c9de778a4.jpeg"
  );
  const handleAccordionChange = (image) => {
    setSelectedImage(image);
  };
  return (
    <Box>
      <Heading textAlign="center" fontFamily="Arial">
        Features and Games
      </Heading>
      <Box className="feature-container">
        <Box className="image-container" marginLeft="100px" marginTop="70px">
          <Image src={selectedImage} alt="Selected" />
        </Box>

        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton
                bg="#a984c7"
                color="white"
                width="500px"
                marginLeft="300px"
                borderRadius="10rem"
                onClick={() =>
                  handleAccordionChange(
                    "https://global.discourse-cdn.com/business7/uploads/adalo/original/3X/0/0/00cb4da7aa01fc9b9885eb31a1562e1c9de778a4.jpeg"
                  )
                }
              >
                <Box as="span" flex="1" textAlign="left" padding="20px">
                  MCQ
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel width="500px" marginLeft="300px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                bg="#a984c7"
                color="white"
                width="500px"
                marginLeft="300px"
                borderRadius="10rem"
                onClick={() =>
                  handleAccordionChange(
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63v1Z4Iq1J7qA2lY8evOIggBcpw16g1GHZA&s"
                  )
                }
              >
                <Box as="span" flex="1" textAlign="left" padding="20px">
                  Quizes
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel width="500px" marginLeft="300px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                bg="#a984c7"
                color="white"
                width="500px"
                marginLeft="300px"
                borderRadius="10rem"
                onClick={() =>
                  handleAccordionChange(
                    "https://assets-eu-01.kc-usercontent.com/2702f056-973d-0149-8b6e-67ab679c010f/87256dd3-45f7-49b7-86b6-826304ef58f6/Blog%20images%20-%20Likert%20scale.png?w=1296&h=729"
                  )
                }
              >
                <Box as="span" flex="1" textAlign="left" padding="20px">
                  Binary Poll
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel width="500px" marginLeft="300px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                bg="#a984c7"
                color="white"
                width="500px"
                marginLeft="300px"
                borderRadius="10rem"
                onClick={() =>
                  handleAccordionChange(
                    "https://cdn.sanity.io/images/tlr8oxjg/production/86a0799384de64d2f1d1717a97018b6368029d45-1456x816.png?w=3840&q=80&fit=clip&auto=format"
                  )
                }
              >
                <Box as="span" flex="1" textAlign="left" padding="20px">
                  Scale Poll
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel width="500px" marginLeft="300px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};
