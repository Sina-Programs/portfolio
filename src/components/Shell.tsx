import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Text,
  Grid,
  Burger,
  useMantineTheme,
  Transition
} from '@mantine/core';
import { Home, User, Terminal2, Brush, MessageCircle, Icon } from 'tabler-icons-react'
import ColorSchemeToggle from './Buttons/color-scheme-toggle';
import NavOption from "./Buttons/nav-option"
import HomePage from "./Pages/Home"

interface Content {
  icon: Icon,
  text: string
}


export default function Shell() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const buttonContent: Content[] = [{icon: Home, text: 'Home'}, {icon: User, text: 'About Me'}, {icon: Terminal2, text: 'Projects'}, {icon: Brush, text: 'Interests'}, {icon: MessageCircle, text: 'Contact'}];
  
  return (
    <AppShell
      fixed
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          color: theme.colorScheme === "dark" ? "whitesmoke" : "black"
        },
      }}

      header={
        <Header height={60} p="md" sx={{color: theme.colorScheme === "dark" ? "whitesmoke" : "black"}}>
          <Grid justify="space-between">
            <Grid.Col span={3} style={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
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
      }

      navbarOffsetBreakpoint={opened ? "sm" : 5000}
      navbar={
        <Transition mounted={opened} transition={window.innerWidth > theme.breakpoints.sm ? 'slide-right' : 'pop'} duration={500} timingFunction="ease">
          {(styles) => (
            <Navbar p="md" hiddenBreakpoint={5000} hidden={!opened} width={{ sm: 300 }} style={styles}>
                {buttonContent.map((content: Content) => {
                  return <NavOption icon={content.icon} text={content.text}></NavOption>
                })}
            </Navbar>
          )}
        </Transition>
      }
    >
      <HomePage />
    </AppShell>
  );
}