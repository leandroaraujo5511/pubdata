import { Avatar, Box, Flex, Heading, Link } from "@chakra-ui/react";
import Topbar from "../../components/Topbar";
import NavLink from "../../components/NavLink";

const Team = () => {
  return (
    <Topbar>
      <Flex alignItems={"center"} flexDirection={"column"} gap={8} mt={8} >
      <Heading>Equipe</Heading>
      <Flex alignItems={"center"}  gap={8} mt={8}>
        <Flex alignItems={"center"} gap={4}>
          <Avatar
            size={"xl"}
            name="Publish Data"
            color={"green.400"}
            background={"gray.800"}
            src="https://avatars.githubusercontent.com/u/11648062?v=4"
          />
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p={2}>            
             <NavLink href="https://github.com/fldnascimento">Felipe Nascimento</NavLink>    
          </Box>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Avatar
            size={"xl"}
            name="Publish Data"
            color={"green.400"}
            background={"gray.800"}
            src="https://avatars.githubusercontent.com/u/19637090?v=4"
          />
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p={2}>            
             <NavLink href="https://github.com/dgsmj">Douglas Martins</NavLink>    
          </Box>
        </Flex><Flex alignItems={"center"} gap={4}>
          <Avatar
            size={"xl"}
            name="Publish Data"
            color={"green.400"}
            background={"gray.800"}
            src="https://avatars.githubusercontent.com/u/57292535?v=4"
          />
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p={2}>            
             <NavLink href="https://github.com/PedroHenriqueAS">Pedro Henrique</NavLink>    
          </Box>
        </Flex><Flex alignItems={"center"} gap={4}>
          <Avatar
            size={"xl"}
            name="Publish Data"
            color={"green.400"}
            background={"gray.800"}
            src="https://avatars.githubusercontent.com/u/48131407?v=4"
          />
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p={2}>            
             <NavLink href="https://github.com/leandroaraujo5511">Leandro Araujo</NavLink>    
          </Box>
        </Flex>
      </Flex>
      </Flex>
    </Topbar>
  );
};

export default Team;
