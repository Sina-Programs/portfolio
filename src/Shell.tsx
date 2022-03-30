import { useState } from 'react';
import { AppShell, useMantineTheme, MantineTheme } from '@mantine/core';
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import HomePage from "./Pages/Home"


export default function Shell() {
  const theme: MantineTheme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  
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
        <Header opened={opened} setOpened={setOpened}/>
      }

      navbarOffsetBreakpoint={opened ? "sm" : 5000}
      navbar={
        <NavBar opened={opened}/>
      }
    >
      <HomePage />
    </AppShell>
  );
}