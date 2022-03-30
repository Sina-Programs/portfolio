import { Button } from "@mantine/core"
import { Icon } from "tabler-icons-react"

interface Props {
    icon: Icon,
    text: string
}

const NavMenu = (props: Props) => {
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
            height: 80,
            marginBottom: 18,
            marginTop: 5,
            fontWeight: 300,
            fontFamily: 'Roboto, sans-serif'
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

export default NavMenu