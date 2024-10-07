
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
  Button,
  Collapse,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { AddIcon, DragHandleIcon, CheckIcon } from '@chakra-ui/icons';

const Sidebar = ({ isOpen, onClose }) => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isDesktop ? (
        <Box
          w="250px"
          p={4}
          bg="#8853bf"
          color="white"
          position="fixed"
          top="78px"
          left="0"
          height="calc(100vh - 64px)"
          boxShadow="md"
          zIndex="docked"
        >
          <VStack spacing={4} align="start">
            <Button as={Link} to="/polls" variant="solid" size="md" borderRadius="md" _hover={{ bg: '#f3e3ff' }}>
              User Polls
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                variant="solid"
                size="md"
                borderRadius="md"
                _hover={{ bg: '#f3e3ff' }}
                rightIcon={<ChevronDownIcon />}
              >
                Create Poll
              </MenuButton>
              <MenuList bg={'#8853bf'}>
                <MenuItem bg={'#8853bf'} as={Link} to="/showallcreations">
                  <AddIcon mr={2} />Poll Creation
                </MenuItem>
                <MenuItem bg={'#8853bf'} as={Link} to="/pollcreation">
                  <AddIcon mr={2} />MCQ Poll Creation
                </MenuItem>
                <MenuItem bg={'#8853bf'} as={Link} to="/polldrag">
                  <DragHandleIcon mr={2} /> Drag Poll
                </MenuItem>
                <MenuItem bg={'#8853bf'} as={Link} to="/true-false-poll">
                  <CheckIcon mr={2} /> Binary Poll
                </MenuItem>
              </MenuList>
            </Menu>

            <Button as={Link} to="/pollsresult" variant="solid" size="md" borderRadius="md" _hover={{ bg: '#f3e3ff' }}>
              Analytics
            </Button>
            
            <Button as={Link} to='/video'  variant="solid" size="md" borderRadius="md" _hover={{ bg: '#f3e3ff' }}>
                    Tutorial
                  </Button>
          </VStack>
        </Box>
      ) : (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Sidebar</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="start">
                  <Button as={Link} to="/polls" variant="solid" size="md" borderRadius="md" _hover={{ bg: '#f3e3ff' }}>
                    User Polls
                  </Button>

                  <Menu>
                    <MenuButton
                      as={Button}
                      variant="solid"
                      size="md"
                      borderRadius="md"
                      _hover={{ bg: '#f3e3ff' }}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Create Poll
                    </MenuButton>
                    <MenuList>
                      <MenuItem color={"red"} as={Link} to="/showallcreations">
                        <AddIcon mr={2} color={"red"} /> Poll Creation
                      </MenuItem>
                      <MenuItem as={Link} to="/pollcreation">
                        <AddIcon mr={2} /> MCQ Poll Creation
                      </MenuItem>
                      <MenuItem as={Link} to="/polldrag">
                        <DragHandleIcon mr={2} /> Drag Poll
                      </MenuItem>
                      <MenuItem as={Link} to="/true-false-poll">
                        <CheckIcon mr={2} /> Binary Poll
                      </MenuItem>
                    </MenuList>
                  </Menu>

                  <Button as={Link} to="/pollsresult" variant="solid" size="md" borderRadius="md" _hover={{ bg: '#f3e3ff' }}>
                    Analytics
                  </Button>
                  
                  <Button  variant="solid" size="md" borderRadius="md" _hover={{ bg: '#f3e3ff' }}>
                    Tutorial
                  </Button>

                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
