import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Spinner,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

export const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editUser, setEditUser] = useState({}); // State for editing user

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/auth");
        setUsers(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditUser({ ...user });
    onOpen();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.patch(`/auth/update/${selectedUser._id}`, editUser);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === selectedUser._id ? { ...editUser } : user
        )
      );
      onClose();
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/auth/delete/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box p={4} maxW="1200px" mx="auto" marginTop={150} marginBottom={100}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Users Data
      </Heading>

      <TableContainer>
        <Table variant="striped" colorScheme="white" size="md">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user._id}>
                <Td>{user.name}</Td>
                <Td>{user.lastName || ""}</Td>
                <Td>{user.email}</Td>
                <Td>{user.role}</Td>
                <Td>
                  <Button
                    bg="#f3e3ff"
                    size="sm"
                    onClick={() => handleEditClick(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    bg="#8853bf"
                    size="sm"
                    ml={2}
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {users.length === 0 && (
        <Box mt={6} textAlign="center" fontSize="lg">
          No users found.
        </Box>
      )}

      {/* Edit user modal */}
      {selectedUser && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit User</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Name"
                name="name"
                value={editUser.name}
                onChange={handleInputChange}
                mb={3}
              />
              <Input
                placeholder="Last Name"
                name="lastName"
                value={editUser.lastName || ""}
                onChange={handleInputChange}
                mb={3}
              />
              <Input
                placeholder="Email"
                name="email"
                value={editUser.email}
                onChange={handleInputChange}
                mb={3}
              />
              <Input
                placeholder="Role"
                name="role"
                value={editUser.role}
                onChange={handleInputChange}
                mb={3}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSave}>
                Save
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};
