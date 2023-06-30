import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import {  useForm } from "react-hook-form";
import { platformImpact, product, publishClassification } from "../constants";
import dynamic from "next/dynamic";
import { api } from "../services/api";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface IModalNewPub {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const NewPub = ({ isOpen, onClose, onOpen }: IModalNewPub) => {
  const [editorState, setEditorState] = useState("");

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleSubmitNewPub = async (e)  => {
    e.preventDefault();
    const { title, publishClassification, platformImpact, product, date } =
      getValues();

    

    const response = await api.post("publish",{
      data: {
        title,
        classificationId: +publishClassification,
        impactedPlatforms: [{id: +platformImpact }],
        products: [{id: +product }],
        description: editorState,
        publishedDate: date
      }
  })


  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"xl"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Nova publicação</DrawerHeader>
        <Flex
          alignItems={"center"}
          gap={4}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <form
            action=""
            onSubmit={handleSubmitNewPub}
            style={{ height: "100vh", width: "100vh" }}
          >
            <Flex m={4} flexDirection={"column"} gap={6}>
              <FormControl>
                <FormLabel>Selecione o produto</FormLabel>
                <Select placeholder="Selecione" {...register("product")}>
                  {product.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.description}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Tipo da publicação</FormLabel>
                <Select
                  placeholder="Selecione"
                  {...register("publishClassification")}
                >
                  {publishClassification.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.description}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Plataforma de impactor</FormLabel>
                <Select placeholder="Selecione" {...register("platformImpact")}>
                  {platformImpact.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.description}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Data da publicação</FormLabel>
                <Input name="date" type={"date"} {...register("date")} />
              </FormControl>
              <FormControl>
                <FormLabel>Titulo</FormLabel>
                <Input
                  name="title"
                  placeholder="Ex: Pbi 1234 - Criar tabela de exames"
                  {...register("title")}
                />
                <FormErrorMessage>
                  {errors.title && errors.title.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>Descrição</FormLabel>
                <Box>
                  <ReactQuill
                    placeholder="Descrição da publicação"
                    theme="snow"
                    value={editorState}
                    onChange={setEditorState}
                  />
                </Box>
              </FormControl>
            </Flex>
            <DrawerFooter borderTopWidth="1px">
              <Button colorScheme="blue" type="submit" isLoading={isSubmitting}>
                Enviar
              </Button>
            </DrawerFooter>
          </form>
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};

export default NewPub;
