import {
    MantineTheme,
    useMantineTheme
} from '@mantine/core'
import { relative } from 'path'
//@ts-ignore
import Sina from '../Assets/Sina.png'

type Props = {}

const HomePic = (props: Props) => {
    const theme: MantineTheme = useMantineTheme()
    return (
    <div style={{
        position: 'relative',
        display: 'inline-block',
        minHeight: "275px",
        height: '275px', 
        width: "275px", 
        overflow: 'hidden', 
        borderRadius: '100%',
        border: `solid 3px ${theme.colors.gray[6]}`,
        marginTop: 50,
        marginBottom: 20,
        }}>
            <img 
                src={Sina} 
                style={{
                    height: 500,
                    width: 400,
                    objectFit: 'cover',
                    objectPosition: '100% 50%',
                    marginTop: -15,
                    marginLeft: -45
                }} 
                alt='Sina at the Vessel in Hudson Yards, New York City'
            />
        </div>
    )
}

export default HomePic