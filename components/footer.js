import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      as="footer"
      position={{ base: 'relative', md: 'fixed' }}
      bottom={{ base: 'auto', md: '0' }}
      left="0"
      width="100%"
      py={4}
      textAlign="center"
      opacity={0.4}
      fontSize="sm"
    >
      Built based on the{' '}
      <Link
        href="https://www.craftz.dog/"
        target="_blank"
        rel="noopener noreferrer"
        color="#7f523d"
        _dark={{ color: '#B5651D' }}
        transition="color 0.3s ease-in-out"
      >
        Takuya Matsuyama&apos;s website
      </Link>.
    </Box>
  )
}

export default Footer