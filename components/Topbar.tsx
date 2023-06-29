
import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Text,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Stack,
    useDisclosure,
    Heading,
    Image,
    Drawer,
  } from "@chakra-ui/react";
  import { Children, ReactNode, useState } from "react";
  import {
    HamburgerIcon,
    CloseIcon,
    AddIcon,
    CheckCircleIcon,
    CheckIcon,
  } from "@chakra-ui/icons";
import NavLink from "./NavLink";
import { ITopBar } from "../interfaces";

const Topbar = ({children}: ITopBar) => {

    const links = ["Dashboard", "Team"];
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [openCreatePub, setOpenCreatePub ] = useState(false)

    const handleOpenCreatePub = () => {
        setOpenCreatePub(!openCreatePub)
      }
    return (
        <>
      <Box bg={"gray.100"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image
              width={'100px'}
              alt="Logo"
              src={
                "https://drive.google.com/file/d/1Iq51kvLGfFA9RjjKcWnV11kqWJQrRdcu/view"
              }
            />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
              onClick={handleOpenCreatePub}
            >
              Criar publicação
            </Button>


            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  name='Publish Data'
                  color={'green.400'}
                  background={'gray.800'}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>{children}</Box>
    </>
    )

}

export default Topbar