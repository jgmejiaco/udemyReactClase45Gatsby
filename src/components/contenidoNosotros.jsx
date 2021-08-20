import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';

const Contenido = styled.main`
     padding-top: 4rem;
     max-width: 1200px;
     width: 95%;
     margin: 0 auto;

     p {
         line-height: 2;
         margin-top: 2rem;
     }

     @media (min-width: 768px) {
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         column-gap: 3rem;
     }
`;


const ContenidoNosotros = () => {

    const resultado = useStaticQuery(graphql`
        query {
            allDatoCmsPagina( filter: { slug: { eq: "inicio" } } ) {
                nodes {
                    titulo
                    contenido
                    imagen {
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0];

    return (
        <>
            <h2 css={css`
                margin-top: 4rem;
                text-align: center;
                font-size: 4rem;
            `}>{titulo}</h2>
            
            <Contenido>
                <p>{contenido}</p>
                <GatsbyImage image={imagen.gatsbyImageData} alt="Nosotros" />
            </Contenido>

        </>
    )
}

export default ContenidoNosotros
