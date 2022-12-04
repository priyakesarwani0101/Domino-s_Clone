import React from 'react'
import {Box,Image,Flex} from '@chakra-ui/react'

const Loading = () => {
    const outerBoxStyles = {
        boxSize: '100%',
        height:'730px',
        p: '10',
        background:
          'url(https://img.freepik.com/premium-vector/soft-multicolor-vector-background-with-meshes-eps10_147066-362.jpg?w=900) center/cover no-repeat',
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
              Box with Backdrop Blur
            </Box>
          </Box>
           
        </Flex>
      )
    }

export default Loading