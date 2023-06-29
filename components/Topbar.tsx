
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
import ModalNewPub from "./NewPub";

const Topbar = ({children}: ITopBar) => {

    const links = [{name: "Dashboard", href: "/Dashboard"}, {name: "Team", href: "/Team"}];
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
                <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
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

            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>{children}</Box>

      <ModalNewPub isOpen={openCreatePub} onClose={handleOpenCreatePub} onOpen={() => {}}/>
    </>
    )

}

export default Topbar