import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { EduSection } from '../components/edu'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoDocumentText, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      {/* <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer based in Japan!
      </Box> */}
      <Box display={{ md: 'flex' }} mt={{ base: 4, md: 8 }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
          <Text 
            as="span" 
            color="#7f523d"
            _dark={{ color: '#ff63c3' }}
          >
            Jinmo
          </Text>{' '}
           Kim
          </Heading>
          <b>M.S./Ph.D. Integrated Student</b>
          <p>SNU, Visual & Geometric Intelligence Lab.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="#f4ede4"
            borderWidth={5}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/jinmo.jpeg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      
      <Button
        as={NextLink}
        href="/Jinmo_Kim_CV.pdf"
        scroll={false}
        rightIcon={<ChevronRightIcon />}
        color="white"
        bg="#7f523d"
        _hover={{ bg: '#a3694e' }}
        _dark={{ bg: '#ff63c3', _hover: { bg: '#c24c96' } }}
        leftIcon={<IoDocumentText />}
        mb={6}
      >
        Curriculum Vitae
      </Button>
      <Button
        as="a"
        href="mailto:jmkim1012@snu.ac.kr"
        scroll={false}
        rightIcon={<ChevronRightIcon />}
        color="white"
        bg="#7f523d"
        _hover={{ bg: '#a3694e' }}
        _dark={{ bg: '#ff63c3', _hover: { bg: '#c24c96' } }}
        leftIcon={<EmailIcon />}
        ml={3}
        mb={6}
      >
        Contact
      </Button>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          I am a M.S./Ph.D. integrated student at Seoul National University, advised by Prof. {' '}
          <Link as={NextLink} href="https://jaesik.info" passHref scroll={false} color={'#a3694e'} _hover={{ color: '#7f523d' }} _dark={{ color: '#ff63c3', _hover: { color: '#c24c96' }}}>
            Jaesik Park
          </Link>
          . Also, I am a member of the <b>Visual & Geometric Intelligence Lab</b>. 
          Previously, I completed by B.S. in Computer Science at Pohang University of Science and Technology (POSTECH).
        </Paragraph>
        <Paragraph>
          My research interests include <b>3D reconstruction</b>, <b>robotics</b>, and <b>3D scene understanding</b>.
          Recently, I am especially focusing on feed-forward image-to-3D reconstruction.
        </Paragraph>
        
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <EduSection year="Sep. 2023 - Present">
          <Text as="span" fontWeight="bold">
            Seoul National University
          </Text>
          <br />
          M.S./Ph.D. Integrated Student in AI. <br />
          Advised by Prof. Jaesik Park (VGI Lab.).
        </EduSection>
        <EduSection year="Feb. 2023 - Aug. 2023">
          <Text as="span" fontWeight="bold">
            Pohang University of Science and Technology
          </Text>
          <br />
          M.S. Student in CSE. <br />
          Advised by Prof. Jaesik Park.
        </EduSection>
        <EduSection year="Feb. 2019 - Feb. 2023">
          <Text as="span" fontWeight="bold">
            Pohang University of Science and Technology
          </Text>
          <br />
          B.S. Student in CSE. <br />
          <em><b>Cum Laude</b></em>, GPA: 3.83/4.3.
        </EduSection>
        <EduSection year="Mar. 2016 - Feb. 2019">
          <Text as="span" fontWeight="bold">
            Sejong Science High School
          </Text>
        </EduSection> 
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/JinmoKIM1012" target="_blank">
              <Button
                scroll={false}
                color="black"
                bg="#7f523d00"
                _hover={{ bg: '#a3694e10', color: '#7f523d' }}
                _dark={{ bg: '#ff63c300', color: 'white', _hover: { bg: '#ff63c330' } }}
                leftIcon={<IoLogoGithub />}
              >
                GitHub
              </Button>
            </Link>
          </ListItem>
            <Link href="https://www.linkedin.com/in/jinmo-kim-3041501aa" target="_blank">
              <Button
                scroll={false}
                color="black"
                bg="#7f523d00"
                _hover={{ bg: '#a3694e10', color: '#7f523d' }}
                _dark={{ bg: '#ff63c300', color: 'white', _hover: { bg: '#ff63c330' } }}
                leftIcon={<IoLogoLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
