import { Card, Grid } from '@nextui-org/react'
import router from 'next/router'
import React from 'react'

type Props = {
    favoritePokemonsID: number[]
}

const onClick = (idPokemon: number) => {
    router.push(`/pokemon/${idPokemon}`)
}


export const FavoritePokemonCard = ({favoritePokemonsID}:Props) => {
    return (
        <>
            <Grid.Container gap={2} direction='row' justify='flex-start'>
                {
                    favoritePokemonsID.map((id: number) => (
                        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                            <Card isHoverable isPressable onClick={ () => onClick(id)} css={{ padding: 10 }}>
                                <Card.Image
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                    width={'100%'}
                                    height={140}
                                >
                                </Card.Image>

                            </Card>
                        </Grid>
                    ))
                }
            </Grid.Container>
        </>
    )
}
