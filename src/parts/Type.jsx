import { Box ,Text,Heading} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
export default function Type(){
    return (
        <Box    color='#fb982f' >
        <Typewriter 
        options={{
            strings:[ 'Full Stack web Developer....','Coder....','Web Developer..'],
            autoStart: true,
            loop: true,
            deleteSpeed: 200,  
            delay:500, 
            
        }}
        />
        </Box>
    )
}

export  function NameType(){
    return (
        <Heading      color='#fb982f' >
        <Typewriter 
        options={{
            strings:[ 'Parag Jain','PARAG JAIN'],
            autoStart: true,
            loop: true,
            deleteSpeed: 200,  
            delay:500 ,
            
        }}
        />
        </Heading>
    )
}


export  function TypeDot(){
    return (
        <Text fontSize={{base:'sm',sm:'md',md:'2xl',lg:'3xl'}}   ml='5px'>
        <Typewriter 
        options={{
            strings:[ '. . .','. .','. . . . .'],
            autoStart: true,
            loop: true,
            cursor:" ."
        }}
        
        />
        </Text>
        
    )
}