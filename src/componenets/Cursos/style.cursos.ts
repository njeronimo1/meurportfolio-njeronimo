import styled from 'styled-components';

export const ContainerCursos = styled.div`
    width: 100%;

    header{
        background-color: ${props => props.theme['blue-primary']};
        padding: 2rem;
        color: white;
        text-align: center;

        h2{
            font-size: 1.3rem;
        }
    }

    main{
        width: 100%;
        padding: 1rem 1rem 10rem 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .box_main{
            width: 90%;
            padding: 2rem;
            background-color: #0d1117;
            box-shadow: var(--box-shadow);
            border-radius: 6px;
            margin: 1rem;
            display: flex;

            .box_curso{
                width: 25%;
                display: flex;
                flex-direction: column;
                border-radius: 8px;
                justify-content: center;
                align-items: center;
                position: relative;
                
                background: ${props => props.theme['cor_1']};
                /* linear-gradient(15deg, ${props => props.theme['cor_1']}
                ,${props => props.theme['cor_2']},
                ${props => props.theme['cor_3']},
                ${props => props.theme['cor_4']},
                ${props => props.theme['cor_5']}); */
                /* background-size: 100% 200%; */
                animation: colors_ 10s infinite;
                
                img{
                    width: 50%;
                }

                @media screen and (max-width:500px){
                    display: none;
                    width: 100%;
                }
                
            }

            @keyframes colors_{
                0%{
                    background-position: 10% 100%;
                }

                50%{
                    background-position: 100% 50%;
                }

                100%{
                    background-position: 50% 100%;
                }
            }

            .box_desc_curso{
                margin-left: 1rem;
                width: 70%;

                h4{
                    font-weight: 600;
                    font-size: 1.8rem;
                    text-align: center;
                    padding-bottom: 0.5rem;
                    color: ${props => props.theme['cinza-claro']};
                }

                p{
                    color: ${props => props.theme['gray']};
                    padding: 1rem 0rem;
                    font-weight: 300;
                    line-height: 1.6rem;
                }

                .ferramentas_aprendidas{
                    display: flex;
                    width: 100%;

                    .container_stacks{
                        width: 100%;
                    }

                    p{
                        color: #2296f9;
                        font-weight: 600;
                    }

                    img{
                        width: 1.4rem;
                    }

                    .container_spans,
                    .container_spans_{
                        display: flex;
                        gap: 1rem;

                        span{
                            display: flex;
                            align-items: center;
                            gap: 0.4rem;
                            color: ${props => props.theme['white']};
                        }

                        @media screen and (max-width: 500px) {
                            gap: 0.5rem;
                            flex-wrap: wrap;
                        }
                    }

                    .container_spans_{
                        flex-direction: column;
                        gap: 0.4rem;
                    }
                    @media screen and (max-width:500px){
                        display: flex;
                    flex-direction: column;    
                    }
                    
                }

                @media screen and (max-width:500px){
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }
            }
        }
    }
`