
import { Box, Button, Card, Checkbox, Heading, Link, Stack } from "@chakra-ui/react";
import React from "react";
import { ReactNode } from "react";

const SearchBox = () => {

    const [checkedItems, setCheckedItems] = React.useState([true, true, true, true, true, true, true])
    const [publishClassification, setPublishClassification] = React.useState([true, true, true])

    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked

    return (
        <Card marginLeft="30px" padding="25px 20px" height="auto">
            <Heading size='sm'>Produtos</Heading>
            <Checkbox
                marginTop="15px"
                isChecked={allChecked}
                isIndeterminate={isIndeterminate}
                onChange={(e) => setCheckedItems([e.target.checked, e.target.checked, e.target.checked, e.target.checked, e.target.checked, e.target.checked, e.target.checked])}
            >
                Todos
            </Checkbox>

            <Checkbox
                isChecked={checkedItems[0]}
                onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1], checkedItems[2], checkedItems[3], checkedItems[4], checkedItems[5], checkedItems[6]])}
            >
                Telemedicina
            </Checkbox>
            <Checkbox
                isChecked={checkedItems[1]}
                onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked, checkedItems[2], checkedItems[3], checkedItems[4], checkedItems[5], checkedItems[6]])}
            >
                Clínica Einstein
            </Checkbox>

            <Checkbox
                isChecked={checkedItems[2]}
                onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], e.target.checked, checkedItems[3], checkedItems[4], checkedItems[5], checkedItems[6]])}
            >
                Portal Empresas'
            </Checkbox>
            <Checkbox
                isChecked={checkedItems[3]}
                onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], checkedItems[2], e.target.checked, checkedItems[4], checkedItems[5], checkedItems[6]])}
            >
                Einstein Conecta
            </Checkbox>

            <Checkbox
                isChecked={checkedItems[4]}
                onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], checkedItems[2], checkedItems[3], e.target.checked, checkedItems[5], checkedItems[6]])}
            >
                Oncologia
            </Checkbox>
            <Checkbox
                isChecked={checkedItems[5]}
                onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], checkedItems[2], checkedItems[3], checkedItems[4], e.target.checked, checkedItems[6]])}
            >
                Dispensação de Medicamentos
            </Checkbox>

            <Checkbox
                isChecked={checkedItems[6]}
                onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], checkedItems[2], checkedItems[3], checkedItems[4], checkedItems[5], e.target.checked])}
            >
                Verifica
            </Checkbox>
            <Heading size='sm' marginTop="15px">Classificação</Heading>
            <Box marginTop="20px" display="flex" justifyContent="space-between">
                <Checkbox
                    isChecked={publishClassification[0]}
                    onChange={(e) => setPublishClassification([e.target.checked, publishClassification[1], publishClassification[2]])}
                >
                    Feature
                </Checkbox>
                <Checkbox
                    isChecked={publishClassification[1]}
                    onChange={(e) => setPublishClassification([publishClassification[0], e.target.checked, publishClassification[2]])}
                >
                    Melhoria
                </Checkbox>

                <Checkbox
                    isChecked={publishClassification[2]}
                    onChange={(e) => setPublishClassification([publishClassification[0], publishClassification[1], e.target.checked])}
                >
                    Bug
                </Checkbox>

            </Box>
            <Button colorScheme='blue' marginTop="15px" onClick={() => {}}>Filtrar</Button>
        </Card>
    )

}
export default SearchBox