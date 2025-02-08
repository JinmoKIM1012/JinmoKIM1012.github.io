import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container mt={8}>
      <Heading as="h1">Not found :(</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} 
        href="/" 
        bg="#7f523d" 
        color="#ffffff"
        _hover={{ bg: '#a3694e' }}
        _dark={{ bg: '#ff63c3', _hover: { bg: '#c24c96' }}}
        >
          Return to home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
