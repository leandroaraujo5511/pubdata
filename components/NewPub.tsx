import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { platformImpact, product, publishClassification } from "../constants";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface IModalNewPub {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const NewPub = ({ isOpen, onClose, onOpen }: IModalNewPub) => {
  const [editorState, setEditorState] = useState("");

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"xl"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Nova publicação</DrawerHeader>

        <DrawerBody>
          <Stack spacing="24px">
            <Flex gap={4} display={{ md: "flex" }}>
              <Box>
                <FormLabel>Selecione o produto</FormLabel>
                <Select placeholder="Selecione">
                  {product.map((item) => (
                    <option value={item.description} key={item.id}>
                      {item.description}
                    </option>
                  ))}
                </Select>
              </Box>
              <Box>
                <FormLabel>Tipo da publicação</FormLabel>
                <Select placeholder="Selecione">
                  {publishClassification.map((item) => (
                    <option value={item.description} key={item.id}>
                      {item.description}
                    </option>
                  ))}
                </Select>
              </Box>
              <Box>
                <FormLabel>Plataforma de impactor</FormLabel>
                <Select placeholder="Selecione">
                  {platformImpact.map((item) => (
                    <option value={item.description} key={item.id}>
                      {item.description}
                    </option>
                  ))}
                </Select>
              </Box>
            </Flex>

            <Box>
              <FormLabel>Titulo</FormLabel>
              <Input></Input>
            </Box>
            <Box>
              <FormLabel>Descrição</FormLabel>
              <Box>
                <ReactQuill
                  theme="snow"
                  value={editorState}
                  onChange={setEditorState}
                />
              </Box>
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="blue">Enviar</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NewPub;
