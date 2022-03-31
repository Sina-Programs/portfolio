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
        radius='xl'
        component='a'
        href='../../Assets/Sina_Resume.pdf'
        download="Sina_Nikmaram_Resume.pdf"
        leftIcon={<CloudDownload size={22} />}
        sx={{
          minHeight: 50,
          height: 50,
          minWidth: 175,
          width: 175,
          fontSize: 18
        }}
    >
        Resume
    </Button>
  )
}

export default resumeButton