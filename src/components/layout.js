import React from 'react';
import Helmet from 'react-helmet';
import {Global, css} from '@emotion/react';
import Header from './header';

const Layout = (props) => {
  return (
    <>
        <Global 
            styles={css`
                /* :root {
                    --gris: #3d3d3d;
                    --gris2: #6f6f6f;
                    --gris3: #e1e1e1;
                    --naranja: #da552f;
                } */

                html {
                    font-size: 62.5%;
                    box-sizing: border-box;
                }

                *, *:before, *:after {
                    box-sizing: inherit;
                }

                body {
                    font-size: 1.8rem;
                    line-height: 1.5;
                    margin: 0;
                    font-family: 'PT Sans', sans-serif;
                }

                h1, h2, h3 {
                    margin: 0;
                    line-height: 1.5;
                }

                h1, h2 {
                    font-family: 'Roboto Slab', serif;
                }

                h1 {
                    font-family: 'PT Sans', sans-serif;
                }

                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
            `}
        />

            {/* =================================== */}

        <Helmet>
            <title>Gatsby Hotel</title>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
            <link rel="preconnect" href="https://fonts.gstatic.com" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Helmet>

        <Header />

        {props.children}
    </>
  )
}
export default Layout
