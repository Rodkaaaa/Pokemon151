import { Container, Image, Text } from '@nextui-org/react'
import React from 'react'

type Props = {}

export const NoFavorite = (props: Props) => {
    return (
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 100px)',
            alignContent: 'center',
            justifyConten: 'center',
            alignSelf: 'center'
        }}>
            <Text h1>No hay favoritos</Text>
            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
                width={250}
                height={250}
                alt=''
                css={{ opacity: 0.6 }}>
            </Image>
        </Container>
    )
}