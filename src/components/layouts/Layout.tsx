import { useRouter } from 'next/router'
import { Navbar } from '../ui'
import Head from "next/head"

type Props = {
    children?: JSX.Element | JSX.Element[],
    titulo: string
}


const origin = (typeof window === 'undefined') ?'' : window.location.origin

const Layout = ({ children, titulo }: Props) => {



    return (
        <>
            <Head>
                <title>{titulo}</title>
                <meta name="author" content="Frederick Cid" />
                <meta name="description" content={`Información sobre el pokemon xxxxxx ${titulo}`} />
                <meta name="keywords" content={`${titulo}, pokemon, pokedex `} />
                <meta property="og:title" content={`Información sobre: ${titulo}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${titulo}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />

            </Head>

            <Navbar />

            <main>
                {children}
            </main>
        </>
    )
}

export { Layout };