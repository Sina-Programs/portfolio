import { Transition, Container, Text, MantineTheme, useMantineTheme } from '@mantine/core'
import { useState, useEffect } from 'react'
import { Icon, BrandLinkedin, BrandGithub, News, BrandTwitter } from 'tabler-icons-react'
import HomePic from '../components/HomePic'
import ResumeButton from '../components/Buttons/resume'


const Home = () => {
  const [mounted, setMounted] = useState<boolean>(false)

  //fade home page in on mount
  useEffect(() => setMounted(true), [])

  return (
    <Transition mounted={mounted} transition="fade" duration={2000} timingFunction="ease">
      {(styles) => {
        return (
          <Container 
            fluid 
            sx={{
              height: '88vh', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center' 
            }}
            style={styles}
          >
            <HomePic />
            <Text sx={{fontSize: 40, fontFamily: 'Roboto', marginBottom: 20}}>Sina Nikmaram</Text>
            <ResumeButton />
          </Container>
        )}}
    </Transition>
  )
  }
  
export default Home