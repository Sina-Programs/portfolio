import { Button } from "@mantine/core"
import { Icon } from "tabler-icons-react"
import { UrlWithStringQuery } from "url"

interface Props {
    icon: Icon,
    text: string
}

const NavMenu = (props: Props) => {
  return (
    <Button fullWidth leftIcon={<props.icon size={24}/>} size='xl' radius='md' variant="outline" styles={(theme) => ({
        root: {
            fontSize: 20,
            height: 80,
            marginBottom: 15 
        },

        leftIcon: {
          marginRight: 18,
        },
      })}>{props.text}</Button>
  )
}

export default NavMenu