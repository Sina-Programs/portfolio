import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  Grid,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import ColorSchemeToggle from './Buttons/color-scheme-toggle';

export default function Shell() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  
  return (
    <AppShell
      fixed
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          color: theme.colorScheme == "dark" ? "whitesmoke" : "black"
        },
      }}

      navbar={
        <Navbar p="md" hiddenBreakpoint={5000} hidden={!opened} width={{ sm: 200, lg: 300 }} sx={{color: theme.colorScheme == "dark" ? "whitesmoke" : "black"}}>
          <Text>Application navbar</Text>
        </Navbar>
      }
      navbarOffsetBreakpoint={opened ? "sm" : 5000}

      footer={
        <Footer height={60} p="md" sx={{color: theme.colorScheme == "dark" ? "whitesmoke" : "black"}}>
          Application footer
        </Footer>
      }

      header={
        <Header height={60} p="md" sx={{color: theme.colorScheme == "dark" ? "whitesmoke" : "black"}}>
          <Grid justify="space-between">
            <Grid.Col span={3} style={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </Grid.Col>
            <Grid.Col span={3} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <Text>Sina</Text>
            </Grid.Col>
            <Grid.Col span={3} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
              <ColorSchemeToggle />
            </Grid.Col>
          </Grid>
        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}