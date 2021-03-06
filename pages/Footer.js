import {
    Box,
    chakra,
    Container,
    Stack,
    Text,Center,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
            <Center>
            <Text>© 2022 TAFTAF Express. Tous droits réservés</Text>
            </Center>
         
          <Stack direction={'row'} spacing={6}>
            
          </Stack>
        </Container>
      </Box>
    );
  }