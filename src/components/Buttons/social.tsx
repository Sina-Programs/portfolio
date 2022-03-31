import { ActionIcon } from '@mantine/core'
import { Icon } from 'tabler-icons-react'

type SocialProps = {
    icon: Icon
    color: string
    size: string
}

const socialButton = (props: SocialProps) => {
    return (
    <ActionIcon variant='filled' color={props.color} size='xl' radius='xl'>
        {<props.icon size={props.size}/>}
    </ActionIcon>
    )
}

export default socialButton