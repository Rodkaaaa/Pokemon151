import React from 'react'
import { NoFavorite } from '../ui'
import Router, { useRouter } from 'next/router'
import { FavoritePokemonCard } from './FavoritePokemonCard'

type Props = {
    favoritePokemonsID: number[],
}

const FavoritePokemons = ({ favoritePokemonsID }: Props) => {
    const router = useRouter()


    return (
        <>
            {
                favoritePokemonsID.length === 0
                    ? (<NoFavorite />)
                    : (
                        <FavoritePokemonCard favoritePokemonsID={favoritePokemonsID} />
                    )
            }
        </>
    )
}

export default FavoritePokemons