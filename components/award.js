import { Flex, Text, Box } from '@chakra-ui/react'


export const AwardSection = ({ year, children }) => {
  return (
    <Flex align="flex-start" mb={2}>
      <Box flexGrow={1} mr={1}>
        {children}
      </Box>
      <Box flexShrink={0} w="90px">
        <Text fontWeight="bold" color="#7f523d" _dark={{ color: '#ff63c3' }} textAlign="right">
          {year}
        </Text>
      </Box>
    </Flex>
  )
}
