import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';


const TextoInicio = styled.div`
     padding-top: 4rem;
     max-width: 1200px;
     width: 95%;
     margin: 0 auto;

     p {
         line-height: 2;
     }

     @media (min-width: 768px) {
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         column-gap: 100px;
     }
`;

const ContenidoInicio = () => {
    const informacion = useStaticQuery(graphql `
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

    console.log(informacion.allDatoCmsPagina.nodes[0]);

    const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0];

    return (
        <>
            <h2 css={css`
                text-align: center;
                font-size: 4rem;
                margin-top: 4rem;
            `}>{titulo}</h2>

            <TextoInicio>
                <p>{contenido}</p>
                <GatsbyImage image={imagen.gatsbyImageData} alt="inicio" />
            </TextoInicio>

        </>
    )
}

export default ContenidoInicio
