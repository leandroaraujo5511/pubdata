import Topbar from "../../components/Topbar";
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Stack, Box, StackDivider, Tag } from '@chakra-ui/react'
import SearchBox from "../../components/searchBox"

const Dashboard = () => {
  return (
    <Topbar>
      <Box padding="0 50px" maxWidth={1200} margin="0 auto" display="grid" gridTemplateColumns="70% 30%" marginTop="50px">
        <Box>
          <Heading size='lg' marginBottom="20px">Dashboard</Heading>
          <Card>
            <CardHeader display="flex" justifyContent="space-between">
              <Heading size='md'>Title</Heading>
              <Tag>12/12/2012</Tag>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box display="grid" gridTemplateColumns="33% 33% 33%">
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      PO
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      View a summary of all your clients over the last month.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Classificação
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      View a summary of all your clients over the last month.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Produto
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      View a summary of all your clients over the last month.
                    </Text>
                  </Box>

                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Descrição
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    See a detailed analysis of all your business clients. See a detailed analysis of
                    all your business clients. See a detailed analysis of all your business clients.
                    See a detailed analysis of all your business clients. See a detailed analysis of
                    all your business clients. See a detailed analysis of all your business clients.
                    See a detailed analysis of all your business clients. See a detailed analysis of
                    all your business clients. See a detailed analysis of all your business clients.
                    See a detailed analysis of all your business clients. See a detailed analysis of
                    all your business clients. See a detailed analysis of all your business clients.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <SearchBox />
      </Box>
    </Topbar>
  );
};

export default Dashboard;
