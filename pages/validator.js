import React from "react";
import { useForm } from "react-hook-form";
import '../styles/Form.module.css';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,Input,Box,
    FormHelperText,Button,Heading,Center,Text
  } from '@chakra-ui/react'
  import { useRouter } from 'next/router'
function    Validator(){
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        alert ('button is clic');
        
    }
    return (
       <div>
        <div>
        <Center>
    <Heading p="10" size="xl" as="h1">
    Connectez-vous à votre compte 
    </Heading> 
     
    </Center>
    <h1 class="text-center">Vous n'avez pas de compte? S'nscrire</h1>
        </div>
      
    
       <Center>
        <Box boxShadow='0px 0px 25px rgba(54,91,125,0.2)' p='6' rounded='md' bg='white' w='40%'   borderRadius='10' border={1} mt="50">

            <form onSubmit={handleSubmit(onSubmit)}>
             
                    <FormControl className="p-3" > 
                        <FormLabel htmlFor="email" fontSize="xl">Email</FormLabel>
                        <Input  {...register("email",{required: true})} placeholder='email'/>
                        {errors.email && errors.email.type==="required" && <span>champ obligatoire</span>}
                    </FormControl>
                    <FormControl className="p-3" > 
                        <FormLabel htmlFor="password" fontSize="xl">Mot de passe</FormLabel>
                        <Input  {...register("password",{required: true,minLength:8})} placeholder=' mot de passe'/>
                        {errors.password && errors.password.type==="required" && <span>champ obligatoire</span>}
                        {errors.password && errors.password.type==="minLength" && <span>entrez minimum8 caractere</span>}
                    </FormControl>
                    
                    <div className="form-group"> 
                        <Button p="3" type="submit" bg="#48BB78;"variant='solid' w='100%' onClick={() => router.push('/dashboard')}>se connecter</Button>

                    </div>
           
            </form>
            </Box>
       </Center>
       </div>
             
    )
    
}

export default Validator