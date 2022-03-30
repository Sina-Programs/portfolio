import { MantineTheme, Header, Grid, Burger, Text, useMantineTheme } from '@mantine/core'
import ColorSchemeToggle from './Buttons/color-scheme-toggle';

interface HeaderProps {
    opened: boolean,
    setOpened: Function
}

const HeaderBar = (props: HeaderProps) => {
    let theme: MantineTheme = useMantineTheme();

    return (
        <Header height={60} p="md" sx={{color: theme.colorScheme === "dark" ? "whitesmoke" : "black" }}>
            <Grid justify="space-between" align='center'>
                <Grid.Col span={3} style={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                    <Burger
                        opened={props.opened}
                        onClick={() => props.setOpened((o: boolean) => !o)}
                        size="md"
                        color={theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[8]}
                        mr="sm"
                        sx={{marginTop: -2}}
                    />
                    <Text
                        component="span"
                        align="center"
                        variant="gradient"
                        gradient={{ from: 'blue', to: theme.colors.green[8], deg: 45 }}
                        size="xl"
                        weight={theme.colorScheme === 'dark' ? 500 : 700}
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                        SinaPrograms.com
                    </Text>
                </Grid.Col>
                <Grid.Col span={3} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                    <ColorSchemeToggle />
                </Grid.Col>
            </Grid>
        </Header>
  )
}

export default HeaderBar