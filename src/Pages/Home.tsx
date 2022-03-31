import { Transition, Container, MantineTheme, useMantineTheme } from '@mantine/core'
import { useState, useEffect } from 'react'
import HomePic from '../components/HomePic'

const Home = () => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])
  return (
    <Transition mounted={mounted} transition="fade" duration={2000} timingFunction="ease">
      {(styles) => {
        return (
          <Container 
            fluid 
            sx={{
              height: '50vh', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}
            style={styles}
          >
            <HomePic />
          </Container>
        )}}
    </Transition>
  )
  }
  
export default Home