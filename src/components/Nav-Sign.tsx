import { Paper, Text } from '@mantine/core'

const NavSign = () => {
    return (<Paper p="lg" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '20%'}}>
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
    </Paper>)
}

export default NavSign