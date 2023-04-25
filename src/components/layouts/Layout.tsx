import {Navbar} from '../ui'
import Head from "next/head"

type Props = {
    children: JSX.Element,
    titulo: string
}

const Layout = ({ children, titulo }: Props) => {
    return (
        <>
            <Head>
                <title>{titulo}</title>
                <meta name="author" content="Frederick Cid" />
                <meta name="description" content={`Información sobre el pokemon xxxxxx ${ titulo }`} />
                <meta name="keywords" content={`${titulo}, pokemon, pokedex `} />
            </Head>

             <Navbar/>

            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;