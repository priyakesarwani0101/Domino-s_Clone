import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    PinInput, PinInputField, HStack
  } from '@chakra-ui/react';
  import "./Login.css"
  
  import React ,{ useState } from 'react';

  
  export default function ResetPasswordForm() {

    let [otp,setOtp] = useState('') ;
    let [mob,setMob] = useState("") ;
    let [flag,setFlag] = useState(true) ;

    let [eOTP,setEOTP] = useState('') ;




    const check = (e)=>{
        
        setMob(e.target.value) ;
    }

    const getOTP = ()=>{

        if(mob.length < 10){
            setMob("") ;
            alert("enter valid number") ;
            return ;
        }else{
            for(let i=0;i<10;i++){
                if(mob[i] >= '0' && mob[i] <='9'){
                    continue
                }else{
                    setMob("") ;
                    alert("enter valid number!") ;
                    return ;
                }
            }
        }
        
        let digit = '0123456789' ;
        let OTP = '' ;

        for(let i=0;i<4;i++){
            OTP += digit[Math.floor(Math.random()*10)] ;
        }

        setOtp(OTP) ;
        setFlag(false) ;

        alert(OTP) ;

    }

    const compare = ()=>{
        console.log(otp) ;
        console.log(eOTP) ;


        if(otp == eOTP){
            alert("login Success!") ;

        }else{
            alert("wrong OTP entered");
            setEOTP('') ;
            setFlag(true) ;
        }
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Enter valid number
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Enter Mobile number</FormLabel>
            <Input
            onChange={check}
            value={mob}
            maxLength={10}
              placeholder="Mob No."
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>

          <div>
          {
            flag ?   <Stack spacing={6}>
            <Button
            onClick={getOTP}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Submit
            </Button>
          </Stack>  :  <div> 

            {/* <input type={"text"} onChange={eOTP} maxLength='4' value={enterOTP} placeholder='enter otp' /> <button onClick={compare} >submit</button>  */}
            <HStack>
                <PinInput  placeholder='_'  >
                    <PinInputField onChange={(e) => setEOTP( eOTP + e.target.value) } />
                    <PinInputField onChange={(e) => setEOTP( eOTP + e.target.value) } />
                    <PinInputField onChange={(e) => setEOTP( eOTP + e.target.value) } />
                    <PinInputField onChange={(e) => setEOTP( eOTP + e.target.value) } />
                    <button id="verifyBtn"  onClick={compare} >Verify</button>
                </PinInput>
            </HStack> 

            </div>
    
          }
          </div>

        </Stack>
      </Flex>
    );
  }