import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      align="center"
      opacity={0.4}
      fontSize="sm"
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      py={4} 
    >
      Built based on the{' '}
      <Link
        href="https://www.craftz.dog/"
        target="_blank"
        rel="noopener noreferrer"
        color="#7f523d"               
        _dark={{ color: '#ff63c3' }}
      >
        Takuya Matsuyama&apos;s website
      </Link>.
    </Box>
  )
}

export default Footer