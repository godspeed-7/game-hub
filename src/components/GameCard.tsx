import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Game } from '../hooks/useGames';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
