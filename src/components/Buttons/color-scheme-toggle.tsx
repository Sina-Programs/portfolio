import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';

let ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant={dark ? "outline" : "filled"}
      color={dark ? 'yellow' : 'indigo'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      size='md'
    >
      {dark ? <Sun size={21} /> : <MoonStars size={21} />}
    </ActionIcon>
  );
}

export default ColorSchemeToggle