
import { Center,Heading } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
function   inscrire(){
return (
    <>
    <Navbar/>
    <Center>
    <Heading m="4">
    Créez votre adresse en seulement 3 étapes rapides
    </Heading>
    </Center>

    {/* <Heading>
    Créez votre adresse en seulement 3 étapes rapides</h2>
    </Heading> */}
    <div class="p-3 mb-3">
    <About />
    </div>
   
  
  <Footer />
  
  
  
    
    </>
)
}
export default inscrire