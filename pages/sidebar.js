import React, { useState } from "react"
import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box, 
    Button,
    Input,
    InputGroup,
    InputLeftElement
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
import Navbar from './Navbar'
import { useRouter } from 'next/router'
function sidebar(){
     const [display, changeDisplay] = useState('hide')
    const [value, changeValue] = useState(1)
    const router = useRouter()
    return (
        <Flex
        w={["100%", "100%", "10%", "15%", "15%"]}
        flexDir="column"
        alignItems="center"
        backgroundColor="blue.900"
        color="#fff"
    >
        <Flex
            flexDir="column"
            
            h={[null, null, "100vh"]}
            justifyContent="space-between"
        >
            <Flex
                flexDir="column"
                as="nav"
            >
                <Heading
                    mt={50}
                    mb={[25, 50, 0]}
                    fontSize={["4xl", "4xl", "2xl", "3xl", "4xl",]}
                    alignSelf="center"
                    letterSpacing="tight"
                >
                    TAFTAF
                </Heading>
                <Flex
                    flexDir={["row", "row", "column", "column", "column"]}
                    align={["center", "center", "center", "flex-start", "flex-start"]}
                    wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                    justifyContent="center"
                >
                    <Flex className="sidebar-items" >
                        <Box
                    
                    mt={4}
                    w="150px"
                    h="60px"
                    borderRadius="6"
                    bgGradient="linear(to-t, green.200, blue.100)"
                >
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                    <Link display="none">
                                        <Icon as={FiPieChart} fontSize="2xl" />
                                    </Link>
                                    <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}
                                     onClick={() => router.push('/colis')}
                                    >
                                    
                                        <Text fontSize="2xl" fontWeight="700" href="/colis" className='text-center p-3'>COLIS</Text>
                                    </Link>
                            </Flex>
                    </Box>
                    

                    </Flex>

                    <Flex className="sidebar-items" >
                        <Box
                    
                    mt={4}
                    w="150px"
                    h="60px"
                    bgGradient="linear(to-t, yellow.300, blue.500)"
                    borderRadius="6"
                >
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]} >
                                    <Link display="none">
                                        <Icon as={FiPieChart} fontSize="2xl" />
                                    </Link>
                                    <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                        <Text fontSize="2xl" fontWeight="700" className='text-center p-3'>USERS</Text>
                                    </Link>
                            </Flex>
                    </Box>
                    

                    </Flex>

                    <Flex className="sidebar-items" >
                        <Box
                    
                    mt={4}
                    w="150px"
                    h="60px"
                    bgGradient="linear(to-t, yellow.300, blue.500)"
                    borderRadius="6"
                >
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                    <Link display="none">
                                        <Icon as={FiPieChart} fontSize="2xl" />
                                    </Link>
                                    <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}
                                     onClick={() => router.push('/Barils')}
                                    >
                                    
                                        <Text fontSize="2xl" fontWeight="700" href="/Barils" className='text-center p-3'>Barils</Text>
                                    </Link>
                            </Flex>
                    </Box>
                    

                    </Flex>
                    <Flex className="sidebar-items" >
                        <Box
                    
                    mt={4}
                    w="150px"
                    h="60px"
                    borderRadius="6"
                    bgGradient="linear(to-t, yellow.300, blue.500)"
                >
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                    <Link display="none">
                                        <Icon as={FiPieChart} fontSize="2xl" />
                                    </Link>
                                    <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                        <Text  fontSize="2xl" fontWeight="700" className='text-center p-3'>PROFILE</Text>
                                    </Link>
                            </Flex>
                    </Box>
                    

                    </Flex>

                </Flex>
            </Flex>
            <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
                <Avatar my={2} src="avatar-1.jpg" />
                <Text textAlign="center">TAFTAF DEV</Text>
            </Flex>
        </Flex>
    </Flex>
    )
}

export default sidebar