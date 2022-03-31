import {
    MantineTheme,
    useMantineTheme
} from '@mantine/core'
//@ts-ignore
import Sina from '../Assets/Sina.png'

type Props = {}

const HomePic = (props: Props) => {
    const theme: MantineTheme = useMantineTheme()
    return (
    <div style={{
        height: 275, 
        width: 275, 
        overflow: 'hidden', 
        borderRadius: '100%',
        border: `solid 3px ${theme.colors.gray[6]}`
        }}>
            <img src={Sina} style={{
                height: 500,
                width: 400,
                objectFit: 'cover',
                objectPosition: '100% 50%',
                marginTop: -15,
                marginLeft: -45
            }} />
        </div>
    )
}

export default HomePic