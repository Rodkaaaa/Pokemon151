
import Link from 'next/link';
import { SmallPokemon } from '../../interfaces/index';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { pokeApi } from '@/api';
import { useRouter } from 'next/router';

type Props = {
    pokemon: SmallPokemon

}

const PokemonCard = ({ pokemon }: Props) => {
    /* console.log(pokeApi.defaults) */
    const router = useRouter()

    const onClick = () => {
      router.push(`/pokemon/${pokemon.id}`)
    }
    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
            <Card 
                isHoverable 
                isPressable 
                variant="bordered"
                onClick = {onClick}>
                 
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={pokemon.img}
                        width="100%"
                        height={140}
                    />
                    <Card.Footer>
                        <Row justify='space-between' align='center'>
                            <Text b size={25} transform='capitalize'>
                                {pokemon.name}
                            </Text>
                            <Text color='gray' size={20}>
                                #{pokemon.id}
                            </Text>
                        </Row>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Grid>
    )
}

export default PokemonCard;