import Document, {Html, Head, Main, NextScript} from 'next/document'
import { CssBaseline } from '@nextui-org/react';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
          ...initialProps,
          styles: <>{initialProps.styles}</>
        }
    }
    render(){
        return(
            <Html>
                <Head>
                {CssBaseline.flush()}
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700;800&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
                    <link rel="shortcut icon" href="/logozinha.png" type="image/png"/>
                    <meta name="description" content="Uma viagem completa para você conhecer os melhores lugares de Egito, Jordânia e Israel, venha para aterra prometida com a Shalom pacote de viagens!"></meta>
                    <meta name="keywords" content="Egito, Viagens, Jordânia, Israel, Terra prometida, Pacote de viagens, Pacote"></meta>
                    <meta name="author" content="Kauan Costa"></meta>
                </Head>
                <body>
                  <Main/>
                  <NextScript/>
                </body>
            </Html>
        );
    }
}