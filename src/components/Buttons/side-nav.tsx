import { Button } from "@mantine/core"
import { Icon } from "tabler-icons-react"

interface Props {
    icon: Icon,
    text: string
}

const NavOption = (props: Props) => {
  return (
    <Button 
      fullWidth
      leftIcon={<props.icon size={24}/>}
      size='xl'
      radius='md'
      variant="gradient"
      gradient={{ from: 'indigo', to: 'teal', deg: 60 }}
      styles={(theme) => ({
        root: {
            fontSize: 20,
            minHeight: 95,
            height: 95,
            fontWeight: 300,
            fontFamily: 'Roboto, sans-serif',
            margin: '10px 10px 0px 0px'
        },

        leftIcon: {
          marginRight: 18,
        }})
      }
    >
        {props.text}
    </Button>
  )
}

export default NavOption