import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {

  const { theme } = useTheme()
  /* console.log(theme) */

  return (

    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      background: theme?.colors?.gray400.value
    }}>
      <NextLink href="/" style={{ display: 'flex', flexDirection: 'row' }}>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
          alt='icono app'
          width={70}
          height={70}
        />
        <Text color='white' h2>P</Text>
        <Text color='white' h3>okemom</Text>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favoritos/" style={{marginRight: '20px'}}>
        <Text color='white'>Favoritos</Text>
      </NextLink>

    </div>
  )
}

export { Navbar };