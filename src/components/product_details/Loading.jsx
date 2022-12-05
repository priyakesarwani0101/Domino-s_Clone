import React from 'react'
import {Box,Image,Flex} from '@chakra-ui/react'

const Loading = () => {
    const outerBoxStyles = {
        boxSize: '100%',
        height:'730px',
        p: '10',
        background:
          'url(https://media.tenor.com/tNFIwasgcS4AAAAC/pizza-delivery-spongebob-squarepants.gif) center/cover no-repeat',
      }
    
      const innerBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: 'full',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
      }
      return (
        <Flex flexWrap='wrap' gap='24px' justifyContent='space-evenly'>
          {/* adding backdrop-filter property to the element */}
          
          {/* adding backdrop-blur property to the element */}
          <Box sx={outerBoxStyles}>
            <Box sx={innerBoxStyles} backdropFilter='auto' backdropBlur='8px'>
              <Image src='https://www.icegif.com/wp-content/uploads/pizza-icegif.gif' alt='gif'/>
            </Box>
          </Box>
           
        </Flex>
      )
    }

export default Loading