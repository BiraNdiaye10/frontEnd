import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

import { useRouter } from 'next/router'
 
  
function Navbar(){
    const router = useRouter()
    return(
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
            
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
            
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box>Logo</Box>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
            
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              
              <Button
                variant={'outline'}
                colorScheme={'teal'}
                size={'md'}
                mr={4}
                
                >
                Connexion

              </Button>
              
              

              <Button
                variant={'solid'}
                colorScheme={'teal'}
                size={'md'}
                mr={30}
                onClick={() => router.push('/inscrire')}
                >
                Creer un compte
              </Button>
              
            </Flex>
          </Flex>
  
          
        </Box>
    )
}

export default Navbar