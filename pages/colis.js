import React, { useState } from 'react'
import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,Grid, GridItem ,
    Link,
    Box, 
    Button,
    Input,
    InputGroup,
    InputLeftElement,FormControl,FormLabel, Table,
  
    
    Tfoot,
    
    TableCaption,
    TableContainer, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,Center,Modal,useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Select
} from '@chakra-ui/react'
import NextLink from 'next/link'
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCreditCard,
    FiSearch,
    FiBell
} from "react-icons/fi"
import Nav from './nav'
import { useRouter } from 'next/router'
// import MyChart from '../components/MyChart'
import Sidebar from './sidebar'
export default function colis() {
    const [display, changeDisplay] = useState('hide')
    const [value, changeValue] = useState(1)
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (

        <Flex
            h={[null, null, "100vh"]}
            maxW="2000px"
            flexDir={["column", "column", "row"]}
            overflow="hidden"
        >
            
            {/* Column 1 */}
           <Sidebar/>

            {/* Column 2 */}
            <Flex
                w={["100%", "100%", "100%", "100%", "100%"]}
                p="0%"
                flexDir="column"
                overflow="auto"
                minH="100vh"
            >
                <Nav/>
                <div class="text-center mt-5 ">
                <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                    <GridItem colSpan={2} h='10' bg='tomato.100' >
                        <Heading fontSize='2xl'>les colis enrégistrés</Heading>
                    </GridItem>
                    <GridItem colStart={4} colEnd={6} h='10' >

                    <Button onClick={onOpen}>Ajouter</Button>
                    </GridItem>
                    </Grid>
                

<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent w="1500px">
    <ModalHeader>Ajouter un colis</ModalHeader>
    <ModalCloseButton />
    <ModalBody >
      <Text fontWeight='bold' mb='1rem'>
        Veillez remplir les informations du colis
      </Text>
      <FormControl className="p-2" > 
         <FormLabel htmlFor="text">Nom</FormLabel>
        <Input  placeholder='Nom'/>
                        
        </FormControl>
        <FormControl className="p-2" > 
         <FormLabel htmlFor="text">Desciption</FormLabel>
        <Input  placeholder='Description'/>
                        
        </FormControl>
        <FormControl className="p-2" > 
         <FormLabel htmlFor="number">quantity</FormLabel>
        <Input  placeholder='quantity'/>
                        
        </FormControl>

        <FormControl className="p-2" > 
         <FormLabel htmlFor="text">User</FormLabel>
         <Select placeholder='selectionner le proprietaire'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
                        
        </FormControl>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Annuler
      </Button>
      <Button variant='ghost'>Enregister</Button>
    </ModalFooter>
  </ModalContent>
</Modal>

                
            
                </div> 
            
            <Box borderRadius='md' bg='white' color='white' px={4} h="100% "m="10px">

            <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Ensemble de colis enregistrés</TableCaption>
    <Thead>
      <Tr>
        <Th>Id</Th>
        <Th>Nom</Th>
        <Th>Description</Th>
        <Th >Quantity </Th>
        <Th >User </Th>
        <Th >Status </Th>
        <Th >Actions </Th>

      </Tr>
    </Thead>
    <Tbody>
      <Tr color="black"
       fontSize='lg'
      >
        <Td>1</Td>
        <Td>Machine</Td>
        <Td>machine a laver</Td>
        <Td>1</Td>
        <Td>Mamadou Bah </Td>
        <Td><Select color="black">
  <option value='option1'>en cours </option>
  <option value='option2'>livré</option>
  
</Select></Td>
        <Td isNumeric><Button colorScheme='green' m="3">update</Button>
        <Button colorScheme='red' >delete</Button>
        </Td>
      </Tr>
      <Tr color="black"
       fontSize='lg'>
      <Td>2</Td>
        <Td>Telephone</Td>
        <Td>portable samsung </Td>
        <Td>10</Td>
        <Td>Abdel</Td>
        <Td><Select >
  <option value='option1'>en cours </option>
  <option value='option2'>livré</option>
  
</Select></Td>
        <Td isNumeric><Button colorScheme='green' m="3">update</Button>
        <Button colorScheme='red' >delete</Button>
        </Td>
      </Tr>
      <Tr color="black"
       fontSize='lg'>
      <Td>3</Td>
        <Td>Telephone</Td>
        <Td>portable samsung</Td>
        <Td>10</Td>
        <Td>test2</Td>
        <Td><Select >
  <option value='option1'>en cours </option>
  <option value='option2'>livré</option>
  
</Select></Td>
        <Td isNumeric><Button colorScheme='green' m="3">update</Button>
        <Button colorScheme='red' >delete</Button>
        </Td>
      </Tr>
      <Tr color="black"
       fontSize='lg'>
      <Td>4</Td>
        <Td>Telephone</Td>
        <Td>portable samsung</Td>
        <Td>5</Td>
        <Td>test4</Td>
        <Td><Select >
  <option value='option1'>en cours </option>
  <option value='option2'>livré</option>
  
</Select></Td>
        <Td isNumeric><Button colorScheme='green' m="3">update</Button>
        <Button colorScheme='red' >delete</Button>
        </Td>
      </Tr>
    </Tbody>
    
  </Table>
</TableContainer>
        
            </Box>

            </Flex>
            
            
        </Flex>
        
    )
}
