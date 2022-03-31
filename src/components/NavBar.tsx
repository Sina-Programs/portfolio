import { Transition, Navbar, Paper, MantineTheme, useMantineTheme, Text } from '@mantine/core'
import { Icon, Home, User, Terminal2, Brush, MessageCircle } from 'tabler-icons-react'
import NavOption from './Buttons/nav-option'

interface NavProps {
    opened: boolean
}

interface ButtonContent {
    icon: Icon,
    text: string
}

const NavBar = (props: NavProps) => {
    let theme: MantineTheme = useMantineTheme();
    const buttonContent: ButtonContent[] = [
        {icon: Home, text: 'Home'}, 
        {icon: User, text: 'About Me'}, 
        {icon: Terminal2, text: 'Projects'}, 
        {icon: Brush, text: 'Interests'}, 
        {icon: MessageCircle, text: 'Contact'}
    ];

    return (
        <Transition mounted={props.opened} transition={window.innerWidth > theme.breakpoints.sm ? 'slide-right' : 'pop'} duration={250} timingFunction="ease">
            {(styles) => (
            <Navbar p="md" hiddenBreakpoint={5000} hidden={!props.opened} width={{ sm: 300 }} style={styles}>
                {buttonContent.map((content: ButtonContent) => {
                    return <NavOption icon={content.icon} text={content.text}></NavOption>
                })}
                <hr style={{width: '90%', borderColor: 'grey'}}/>
                <Paper p="lg" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '20%'}}>
                    <Text sx={{fontFamily: 'Roboto', fontSize: 16}}>
                        Portfolio
                    </Text>
                    <Text sx={{fontFamily: 'Roboto'}}>by</Text>
                    <Text 
                        size='xl'
                        variant='text'
                        sx={{marginTop: 5, marginBottom: 5, fontFamily: 'sauna-new', fontWeight: 700, fontStyle: 'italic', fontSize: 28}}
                    >
                        Sina Nikmaram
                    </Text>
                </Paper>
            </Navbar>
            )}
        </Transition>
  )
}

export default NavBar