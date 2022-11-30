import React from 'react'
import {Button,Image,Heading,Text,Textarea,DrawerFooter,Select,DrawerCloseButton,InputRightAddon,InputLeftAddon,InputGroup,Input,Box,FormLabel,Drawer,DrawerHeader,DrawerBody,DrawerOverlay,useDisclosure,Stack,DrawerContent, localStorageManager} from '@chakra-ui/react'
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
  
    return (
      <>
        <Button leftIcon={"ram"} colorScheme='teal' onClick={onOpen}>
          Create user
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          initialFocusRef={firstField}
          onClose={onClose}
          size='lg'
          overflow='fit'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            {/* <DrawerHeader borderBottomWidth='1px'> */}
            <Box boxSize='sm' w="96%" h="250px" position='relative' >
               <Image boxSize='100%' objectFit='cover' m='auto' src='https://images.dominos.co.in/PIZ0171.jpg' alt='Dan Abramov'  />
               <Heading color='red' ml='50px' mt='-70px' position='absolute'>{660}</Heading>
               </Box>

               <Box>{"The 4 Cheese Pizza"}</Box>
               <h1>'Cheese Overloaded pizza with 4 different varieties of cheese and 4 times the cheese of a normal pizza, including a spicy hit of Ghost Pepper flavoured Cheese'</h1>
                <Box w='80%' margin='auto'>
                    <Heading size='sm'>Select Size</Heading >
                    <Box w='80%' display='flex' gap='5px'>
                        <Box  display='flex' border='1px solid grey' onClick={(e)=>{e.target.backgroundColor="#ddf4ff"}} ><Image w='50%' src='https://www.slideteam.net/media/catalog/product/cache/1280x720/p/i/pizza_with_toppings_line_icon_slide01.jpg' alt='pizza icon'/>
                       <Box> <Heading size='s' >Regular</Heading>
                        <Text>Serves 1</Text></Box></Box>
                        <Box display='flex' border='1px solid grey'><Image w='50%' src='https://www.slideteam.net/media/catalog/product/cache/1280x720/p/i/pizza_with_toppings_line_icon_slide01.jpg' alt='pizza icon'/>
                       <Box> <Heading size='s' >Medium</Heading>
                        <Text>Serves 2</Text></Box></Box>
                        <Box display='flex' border='1px solid grey'><Image w='50%' src='https://www.slideteam.net/media/catalog/product/cache/1280x720/p/i/pizza_with_toppings_line_icon_slide01.jpg' alt='pizza icon'/>
                       <Box> <Heading size='s' >Large</Heading>
                        <Text>Serves 4</Text></Box></Box>
                    </Box>
                </Box>
                {/* <Carousel/> */}


            {/* </DrawerHeader> */}
  
            {/* <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='username'>Name</FormLabel>
                  <Input
                    ref={firstField}
                    id='username'
                    placeholder='Please enter user name'
                  />
                </Box>
  
                <Box>
                  <FormLabel htmlFor='url'>Url</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>http://</InputLeftAddon>
                    <Input
                      type='url'
                      id='url'
                      placeholder='Please enter domain'
                    />
                    <InputRightAddon>.com</InputRightAddon>
                  </InputGroup>
                </Box>
  
                <Box>
                  <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                  <Select id='owner' defaultValue='segun'>
                    <option value='segun'>Segun Adebayo</option>
                    <option value='kola'>Kola Tioluwani</option>
                  </Select>
                </Box>
  
                <Box>
                  <FormLabel htmlFor='desc'>Description</FormLabel>
                  <Textarea id='desc' />
                </Box>
              </Stack>
            </DrawerBody>
   */}
            <DrawerFooter borderTopWidth='1px' w='100%'>
              {/* <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button> */}
              <Box backgroundColor='green' height='50px' w='100%' display='flex' justifyContent='space-between'>
                <Box w='30%' ml='30px' mt='10px'color='white' letterSpacing='3px'>{'639'}|{1}ITEM </Box>
              <Button colorScheme='Green' mt='5px' mr='10px' border='1px solid white'>ADD TO CART</Button>
              </Box>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
   )
 }

export default Detailsp;