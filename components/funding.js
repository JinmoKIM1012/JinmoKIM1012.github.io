import { Flex, Text, Box, chakra } from '@chakra-ui/react'


export const FundSection = ({ year, children }) => {
  return (
    <Flex align="flex-start" mb={2}>
      <Box flexGrow={1} mr={1}>
        {children}
      </Box>
      <Box flexShrink={0} w={{ base: '96px', md: '180px' }}>
        <Text fontWeight="bold" color="#7f523d" _dark={{ color: '#ff63c3' }} textAlign="right">
          {year}
        </Text>
      </Box>
    </Flex>
  )
}

export const FundYear = chakra('span', {
  baseStyle: {
    fontWeight: 'bold',
    marginRight: '1em',
    color: '#7f523d',
    _dark: {
      color: '#ff63c3', 
    },
  },
})
