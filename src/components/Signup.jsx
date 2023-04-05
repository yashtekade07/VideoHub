import { Container,VStack ,Heading, Input, Button,Text, Avatar,} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
        <form>
            <VStack 
               alignItems={"stretch"} 
               spacing={"8"} 
               w={["full","96"]} 
               m={"auto"} 
               my={"16"}>
                <Heading textAlign={"center"}> 
                    Video Hub
                </Heading>
                <Avatar alignSelf={"center"} boxSize={"32"}> </Avatar>
                <Input required placeholder='Name' type='text' focusBorderColor={"purple.500"}/>
                <Input required placeholder='Email' type='email' focusBorderColor={"purple.500"}/>
                <Input required placeholder='password' type='password' focusBorderColor={"purple.500"}/>

                
                <Button  colorScheme='purple' type='submit'>
                     Signup
                </Button>

                <Text textAlign={"right"}> Already Signed Up? {" "}
                <Button  colorScheme='purple' variant={"link"}>
                    <Link to={"/login"}> Login</Link>
                </Button></Text>
                
            </VStack>
        </form>
  </Container>
}

export default Signup