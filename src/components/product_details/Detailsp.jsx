import React from 'react'
import UncontrolledExample from './Carousel'
import {Button,Image,Heading,Text,Textarea,DrawerFooter,Select,DrawerCloseButton,InputRightAddon,InputLeftAddon,InputGroup,Input,Box,FormLabel,Drawer,DrawerHeader,DrawerBody,DrawerOverlay,useDisclosure,Stack,DrawerContent, localStorageManager} from '@chakra-ui/react'
import CouponPage from './CouponPage'
// import Carousel from './Carousel'
//  const details = () => {
//    return (
//      <div>hi</div>
//    )
//  }
function Detailsp() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const sizeRef=React.useRef();
    const[price,setPrice]=React.useState(0);
    const[extraprice,setExtraPrice]=React.useState(0);
    const[size,setSize]=React.useState('Regular');
    const[sizePrice,setSizePrice]=React.useState(0);
    const[crust,setCrust]=React.useState('false');
    let getPrice=(v)=>{
       console.log(v);
       setPrice(v);
    }
  
    return (
      <>
      <Box>
        <Button leftIcon={"ram"} colorScheme='teal' onClick={onOpen}>
          Create user
        </Button>
        <CouponPage/>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement='left'
          initialFocusRef={firstField}
          onClose={onClose}
          size='lg'
          overflow-y='scroll'
        >
          <DrawerOverlay />
          <DrawerContent overflowY='scroll'>
            {/* <DrawerCloseButton /> */}
            {/* <DrawerHeader borderBottomWidth='1px'> */}
            <Box boxSize='sm' w="96%" h="250px" position='relative' >
               <Image ml='10px'   objectFit='cover' m='auto' src='https://images.dominos.co.in/PIZ0171.jpg' alt='Dan Abramov'  />
               <Heading color='white' ml='50px' mt='-70px' position='absolute'>₹ {price}</Heading>
               </Box>

               <Box ml='10px'>{"The 4 Cheese Pizza"}</Box>
               <Text ml='10px'>  Cheese Overloaded pizza with 4 different varieties of cheese and 4 times the cheese of a normal pizza, including a spicy hit of Ghost Pepper flavoured Cheese  </Text>
                <Box w='80%' margin='auto'>
                    <Heading size='sm'>Select Size</Heading >
                    <Box w='80%' display='flex' gap='5px'>
                        <Box  display='flex' border='1px solid grey' onClick={()=>{setSize('Regular');setPrice(399)}} ><Image w='50%' src='https://www.slideteam.net/media/catalog/product/cache/1280x720/p/i/pizza_with_toppings_line_icon_slide01.jpg' alt='pizza icon'/>
                       <Box> <Heading size='s' >Regular</Heading>
                        <Text>Serves 1</Text></Box></Box>
                        <Box display='flex' border='1px solid grey' onClick={()=>{setSize('Medium');setPrice(630)}}><Image w='50%' src='https://www.slideteam.net/media/catalog/product/cache/1280x720/p/i/pizza_with_toppings_line_icon_slide01.jpg' alt='pizza icon'/>
                       <Box> <Heading size='s' >Medium</Heading>
                        <Text>Serves 2</Text></Box></Box>
                        <Box display='flex' border='1px solid grey' onClick={()=>{setSize('Large');setPrice(959)}}><Image w='50%' src='https://www.slideteam.net/media/catalog/product/cache/1280x720/p/i/pizza_with_toppings_line_icon_slide01.jpg' alt='pizza icon'/>
                       <Box> <Heading size='s' >Large</Heading>
                        <Text>Serves 4</Text></Box></Box>
                    </Box>
                </Box>
                <Box w='80%' margin='auto'>
                    <Heading size='sm'>Select Crust</Heading >
                    <Box w='80%' display='flex' gap='5px'>
                        <Box  display='flex' border='1px solid grey' onClick={()=>{}} > 
                       <Box> <Text size='s' color='#93afc1' >New Hand Tossed</Text>
                        <span style={{backgroundColor:'green',color:'white'}}> ₹ {price}</span></Box></Box>
                        <Box  display='flex' border='1px solid grey' onClick={()=>{if(size==='Regular'&& crust==='false'){setPrice(price+50) ;setCrust('true')} else if(size==='Medium' && crust==='false'){setPrice(price+40) ;setCrust('true')}else if(size==='Large' && crust==='false'){setPrice(price+80);setCrust('true')}
                        }} > 
                       <Box> <Text size='s' color='#93afc1' >100% Wheat Thin Crust</Text>
                        <span style={{backgroundColor:'green',color:'white'}}> ₹ {price}</span></Box></Box>
                        <Box  display='flex' border='1px solid grey' onClick={()=>{}} > 
                       <Box> <Text size='s' color='#93afc1' >New Hand Tossed</Text>
                        <span style={{backgroundColor:'green',color:'white'}}> ₹ {price}</span></Box></Box>
                    </Box>
                </Box>
                <Box ml='60px'><Heading size='sm'>Add Veg Toppings @  ₹ 50.00 each  </Heading> </Box>
                <Box>
                    <UncontrolledExample  price={{price,getPrice}}/>
                </Box>
                
            <DrawerFooter borderTopWidth='1px' w='100%' >
              {/* <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button> */}
              <Box backgroundColor='green' height='50px' w='100%' display='flex' justifyContent='space-between' position='fixed' bottom='0px' z-index='1'>
                <Box w='30%' ml='50px' mt='10px'color='white' letterSpacing='3px'> ₹ {price} | {1} ITEM </Box>
              <Button colorScheme='Green' mt='5px' mr='10px' border='1px solid white' onClick={onClose}>ADD TO CART</Button>
              </Box>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
   )
 }

export default Detailsp;