import { Container,VStack ,Heading, Input, Button,Text,} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
        <form>
            <VStack 
               alignItems={"stretch"} 
               spacing={"8"} 
               w={["full","96"]} 
               m={"auto"} 
               my={"16"}>
                <Heading textAlign={"center"}> 
                    Welcome Back
                </Heading>
                <Input required placeholder='Email' type='email' focusBorderColor={"purple.500"}/>
                <Input required placeholder='password' type='password' focusBorderColor={"purple.500"}/>

                <Button variant={"link"} alignSelf={"flex-end"}>
                    <Link to={"/forgotpassword"}> Forget Password</Link>
                </Button>
                <Button  colorScheme='purple' type='submit'>
                     Login
                </Button>

                <Text textAlign={"right"}> New User? {" "}
                <Button  colorScheme='purple' variant={"link"}>
                    <Link to={"/signup"}> Signup</Link>
                </Button></Text>
                
            </VStack>
        </form>
  </Container>
}

export default Login