import React, { useState } from "react";import { useForm } from "react-hook-form";
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";import Navbar from './Navbar'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,Input,Box,Container,Flex,SimpleGrid,Text,
    FormHelperText,Button,Heading, Center
  } from '@chakra-ui/react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    <Heading s='h2' size="md">S'inscrire</Heading> ,
    <Heading s='h2' size="md">Ajouter vos informations personnelles</Heading>,
    <Heading s='h2' size="md">Obtenez votre adresse</Heading>
   
  ];
}

function getStepContent(step) {
   
  switch (step) {
    case 0:
      return (
  
      
        <div className="horizontal container mt-5">
       

        <Center>
        <Box  boxShadow='0px 0px 25px rgba(54,91,125,0.2)' p='6' rounded='md' bg='white.50' w='50%' h='100%'   borderRadius='10' border={1} mb='33'>
            <FormControl className="p-4">
            <FormLabel htmlFor='email' fontSize="xl">Email </FormLabel>
            <Input id='email' type='email' />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl className="p-4">
            <FormLabel htmlFor='passord' fontSize="xl">Mot de passe</FormLabel>
            <Input id='password' type='password' />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>

            <Button bg="green.400" w="100%" p="6" mt="3">S'incrire</Button>
            <Text s="h2" size="md" mt="5">
            Vous avez déjà un compte? <span onClick={() => router.push('/about')}> S'dientifier</span> 
            </Text>
        </Box>
        </Center>
        


        
        </div>
      );

      case 1:
      return (
        <div className="horizontal container mt-5">
      <Center>
      <SimpleGrid columns={2} spacingX='40px' spacingY='20px'  boxShadow='0px 0px 25px rgba(54,91,125,0.2)' p='6' rounded='md' bg='white.50' w='90%' h='100%'   borderRadius='10' border={1} mb='33'>
        <Box  height='80px'>
            <FormControl>
            <FormLabel htmlFor='text' fontSize="xl">Nom </FormLabel>
            <Input id='name' type='text' />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
        </Box>

        <Box  height='80px'>
            <FormControl>
            <FormLabel htmlFor='text' fontSize="xl">Prenom </FormLabel>
            <Input id='prenom' type='text' />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
        </Box>

        <Box  height='80px'>
            <FormControl>
            <FormLabel htmlFor='text' fontSize="xl">Adresse </FormLabel>
            <Input id='adresse' type='text' />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
        </Box>

        <Box  height='80px'>
            <FormControl>
            <FormLabel htmlFor='text' fontSize="xl">Téléphone</FormLabel>
            <Input id='num' type='text' />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
        </Box>

        <Box  height='80px'>
            <FormControl>
            <FormLabel htmlFor='text' fontSize="xl">Code Postal</FormLabel>
            <Input id='code' type='text' />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
        </Box>
        <Box  height='80px'>
            <FormControl>
            <FormLabel htmlFor='text' fontSize="xl">Ville </FormLabel>
            <Input id='code' type='text' />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
        </Box>
        </SimpleGrid>
      </Center>

        
        </div>
      );
   
      case 2:
      return (
        <div className="horizontal container mt-5">
      <Center>
      <SimpleGrid columns={2} spacingX='40px' spacingY='20px' boxShadow='0px 0px 25px rgba(54,91,125,0.2)' p='6' rounded='md' bg='white.50' w='90%' h='100%'   borderRadius='10' border={1} mb='33'>
        <Box  height='80px'>
            <FormControl>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input id='email' type='email' />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
        </Box>

        
        </SimpleGrid>
      </Center>

       
        </div>
      );
    default:
      return "unknown step";
  }
}

const About = () => {
  

  
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    
    <div>
      
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Merci pour votre inscription
        </Typography>
      ) : (
        <div class="text-center">
          <form>{getStepContent(activeStep)}</form>
          <Button m="2"
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Précédent
          </Button >
          {/* {isStepOptional(activeStep) && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              skip
            </Button>
          )} */}
          <Button bg="#38A169" 
            className={classes.button}
           
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Enregistrer" : "Suivant"}
          </Button>
        </div>
      )}
    </div>
  );
  
};

export default About;