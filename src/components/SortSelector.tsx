import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useplatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

interface Props {
  onSelectplatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function SortSelector({ onSelectplatform, selectedPlatform }: Props) {
  const { data, error } = useplatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectplatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
