import Link from 'next/link'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import CubeAltIcon from './icons/cube'

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <Box
        display="inline-flex"
        alignItems="center"
        fontWeight="bold"
        fontSize="18px"
        height="30px"
        lineHeight="20px"
        padding="10px"
        _hover={{
          '> svg': { transform: 'rotate(20deg)', transition: '200ms ease' }
        }}
      >
        <CubeAltIcon />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c, sans-serif"
          fontWeight="bold"
          ml={1}
        >
          Jinmo Kim
        </Text>
      </Box>
    </Link>
  )
}

export default Logo