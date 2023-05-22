import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Game } from '../hooks/useGames';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
