import {
  Transition,
  Container,
  Image,
  MantineTheme,
  useMantineTheme
} from '@mantine/core'
import { BorderRadius } from 'tabler-icons-react'

//@ts-ignore
import Sina from '../Assets/Sina.png'

const Home = () => {
  const theme: MantineTheme = useMantineTheme()
  return (
    <Transition mounted={true} transition="fade" duration={750} timingFunction="ease">
      {(styles) => {
        return (
          <Container fluid sx={{
            height: '50vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}>
            <div style={{
              height: 300, 
              width: 300, 
              overflow: 'hidden', 
              borderRadius: 200,
              border: `solid 4px ${theme.colors.gray[7]}`
            }}>
              <img src={Sina} style={{
                height: 500,
                width: 400,
                objectFit: 'cover',
                objectPosition: '100% 50%',
                marginTop: -15,
                marginLeft: -30
              }} />
            </div>
          </Container>
        )}}
    </Transition>
  )
  }
  
export default Home