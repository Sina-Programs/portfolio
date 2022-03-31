import {
    Button
} from '@mantine/core'
import { CloudDownload } from 'tabler-icons-react'

type Props = {}

const resumeButton = (props: Props) => {
  return (
    <Button
        variant='gradient'
        gradient={{from: 'indigo', to: 'teal', deg: 60}}
        size='lg'
        radius='xl'
        component='a'
        href='../../Assets/Sina_Resume.pdf'
        download="Sina_Nikmaram_Resume.pdf"
        leftIcon={<CloudDownload size={20} />}
    >
        Resume
    </Button>
  )
}

export default resumeButton