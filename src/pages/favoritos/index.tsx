import { Layout } from '../../components/layouts/';
import { localFavorites } from '@/utils'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { FavoritePokemons } from '@/components/pokemon';

type Props = {
}

const Favoritos = (pokemons: Props) => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons)
    }, [])

   /*  console.log(favoritePokemons) */

    return (
        <Layout titulo='Pokemon - Favoritos'>

            <FavoritePokemons favoritePokemonsID={favoritePokemons} />

        </Layout>
    )
}


export default Favoritos
