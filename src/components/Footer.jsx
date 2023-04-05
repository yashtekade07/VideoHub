import { Box ,
        Stack,
        VStack,
        HStack,
        Heading,
        Button,
        Input,
        Text,} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend}from "react-icons/ai"

const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"} textAlign={["center","left"]}>
        <Stack direction={["column","row"]}>
            <VStack 
                alignItems={"stretch"} 
                width={"full"} 
                px={"4"}>
                <Heading size={"md"} textTransform={"uppercase"}>
                    Subscribe for more updates
                </Heading>
                <HStack 
                    borderBottom={"2px solid white" }>
                    <Input 
                        placeholder='Enter Email' 
                        border={"none"}
                         borderRadius={"none"} 
                         outline={"none"}
                         focusBorderColor='none'/>
                    <Button
                        p={"0"}
                        colorScheme={"purple"}
                        variant={"ghost"}
                        borderRadius={"0px 20px 20px 0px"}>
                        <AiOutlineSend size={"20"}/>
                    </Button>
                </HStack>
            </VStack>

            <VStack 
                width={"full"} 
                borderLeft={["none","1px"]}
                borderRight={["none","1px"]}
            >
                <Heading
                    textTransform={"uppercase"}
                    textAlign={"center"}
                >
                    Video Hub
                </Heading>
                <Text>
                ALl Rights Reserved    
                </Text>
            </VStack>
            <VStack 
                width={"full"} 
                >
                    <Heading size={"mg"} textTransform={"uppercase"}>
                            Social Media
                        </Heading>
                   
                            <Button variant={"link"} colorScheme='white' >
                            
                                <a href="https://www.youtube.com/@deceit4944" target='blank'>Youtube</a>
                            </Button>
                            <Button variant={"link"} colorScheme='white' >
                                <a href="https://github.com/yashtekade07" target='blank'>GitHub</a>
                            </Button>
                            <Button variant={"link"} colorScheme='white' >
                                <a href="https://www.instagram.com/yashtekade07/" target='blank'>Instagram</a>
                            </Button>
                    
            </VStack>

        </Stack>
  </Box>
  
}

export default Footer