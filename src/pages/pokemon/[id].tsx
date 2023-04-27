import { useState } from 'react'
import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router';

import confetti from 'canvas-confetti';

import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import { Layout } from '../../components/layouts'
import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';
import { localFavorites } from '@/utils';


interface Props {
  pokemon: Pokemon
}

const PokemonPage = ({ pokemon }: Props) => {

  const router = useRouter();

  const [isInFavorite, setIsInFavorite] = useState(localFavorites.existInFavorites(pokemon.id))

  /* console.log(pokemon.sprites) */

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorite(!isInFavorite)

    if (isInFavorite) {

      return (
        <>
          {confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
              x: 1,
              y: 0
            }
          })}
        </>
      )
    }
  }






  return (
    <Layout titulo={`Listado Pokemon #${pokemon.id} - ${pokemon.name}`}>
      <Grid.Container css={{
        marginTop: '5px'
      }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || 'no_image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}>
              </Card.Image>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button
                color='gradient'
                ghost={!isInFavorite}
                onPress={onToggleFavorite}
                key={pokemon.id}
              >
                {
                  isInFavorite ? 'En Favoritos' : 'Agregar a Favoritos'
                }
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display='flex' direction='row' gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
};


//imprime por conolsa del servidor
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151: string[] = [...Array(151)].map((value, index) => `${index + 1}`);
  
  return {
    paths: pokemon151.map((id) => ({
      params: { id }
    }))
    ,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

  return {
    props: {
      pokemon: data
    }
  }
}


export default PokemonPage