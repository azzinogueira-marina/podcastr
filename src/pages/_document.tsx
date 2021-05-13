import Document, { Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" /> 
                
                    <link rel='shortcut icon' href='/favicon.png' type='image/png' />
                </Head>
                <body>
                    <Main /> 
                    <NextScript />
                </body>
            </Html>
        )
    }
}

// Main: onde fica a aplicação
// NextScript: scripts que o Next precisa injetar dentro da aplicação para que ela funcione
// Head: onde colocamos todo o resto, como as fontes (que não foram colocadas no _app.tsx pois lá tudo é recarregado a cada troca de páginas)