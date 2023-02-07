
/* Import de imagens */
import amigosdorei from '../../Assets/amigos_do_rei.png';
import dtmoney from '../../Assets/logo-dtmoney.svg';
import reactlogo from '../../Assets/reactlogo.png';
import swiflogo from '../../Assets/logoswif.png';
import logotodo from '../../Assets/logotodo.png';
import noli from '../../Assets/noli_roxo.jpg';


import styled from 'styled-components';


export const ContainerPortfolio = styled.div`

    width: 100%;
    padding: 0rem;
    transition: 0.2s all;

    header{
        width: 100%;
        padding: 2%;
        background-color: #0d1117;

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875rem;
        color: ${props => props.theme['blue-primary']};
        
        span{
            color: white;
        }

        a{
            text-decoration: none;
            color: antiquewhite;
        }

        @media screen and (max-width:500px){
            font-size: 0.5rem;
        }
    }

    main{
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 0rem 0rem 5rem 0rem;


        background: linear-gradient(15deg, ${props => props.theme['cor_1']}
            ,${props => props.theme['cor_2']},
            ${props => props.theme['cor_3']},
            ${props => props.theme['cor_4']},
            ${props => props.theme['cor_5']});
        background-size: 120% 200%;
        animation: colors 12s infinite;

        header{
            width: 100%;
            text-align: center;
            background-color: ${props => props.theme['blue-primary']};
            color: ${props => props.theme['white']};
        }
        
        .container_blocos{
            display: flex;
            flex-wrap: wrap;
            padding: 1rem;
            width: 100%;
            max-width: 1300px;
            margin: 0 auto;
            transition: 0.2s ease-in;

            @media screen and (max-width: 500px){
                display: flex;
                flex-direction: column;
                flex-wrap: inherit;
                padding: 1rem;
                width: 100%;
            }

            .style_card{
                margin: 2rem;
                border-radius: 0px;
                box-shadow: var(--box-shadow);
                width: 25%;
                height: 20rem;
                border: 0.25rem solid ${props => props.theme['blue-primary']};
                background-color: ${props => props.theme['white']};

                text-align: center;
                
                transition: 0.35s ease-in;
                cursor: pointer;

                &:hover{
                    scale: 1.03;
                }

                h2{
                    width: 100%;
                    font-size: 1.3rem;
                }

                @media screen and (max-width:500px){
                    width: 100%;
                    margin: 0rem 0rem 1rem 0rem;
                    
                }
            }
        }

        

        .container_content_card{
            width: 100%;
            display: flex;
            padding: 0.5rem;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;

            h2{
                color: ${props => props.theme['cinza-claro']};
            }

            footer{
                width: 100%;
                display: flex;
                justify-content: center;
                background-color: ${props => props.theme['black-primary-alternativo']};

                img{
                    width: 10%;
                }

                p{
                    color: ${props => props.theme['cinza-text']};
                    font-size: 0.75rem;
                    font-weight: 400;
                }

                
            }
        }

        .style_content_card_1{
            background: ${props => props.theme['black-primary-alternativo']};
            background-image: url(${amigosdorei});
            background-size: 50%;
            background-position: center;
            background-repeat: no-repeat;
        }

        .style_content_card_2{
            background: ${props => props.theme['black-primary-alternativo']};
            background-image: url(${dtmoney});
            background-size: 60%;
            background-position: center;
            background-repeat: no-repeat;
        }

        .style_content_card_3{
            background: ${props => props.theme['black-primary-alternativo']};
            background-image: url(${reactlogo});
            background-size: 35%;
            background-position: center;
            background-repeat: no-repeat;
        }

        .style_content_card_4{
            background: ${props => props.theme['black-primary-alternativo']};
            background-image: url(${swiflogo});
            background-size: 160%;
            background-position: center;
            background-repeat: no-repeat;
        }

        .style_content_card_5{
            background: ${props => props.theme['black-primary-alternativo']};
            background-image: url(${logotodo});
            background-size: 50%;
            background-position: center;
            background-repeat: no-repeat;
        }

        .style_content_card_6{
            background: ${props => props.theme['black-primary-alternativo']};
            background-image: url(${noli});
            background-size: 50%;
            background-position: center;
            background-repeat: no-repeat;
        }
    }

    @keyframes colors{
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

`

export const ContainerModalRepositorio = styled.div`
    width: 100%;
    max-height: 40rem;
    /* padding: 1rem; */

    .container_modal_portfolio{
        display: flex;
        width: 100%;
        justify-content: center;
        /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;         */
        padding: 1rem;
        /* align-items: center; */

        .videos_apresentacao_projeto{
            h4{
                text-align: center;
                font-weight: 500;
                padding:0rem 0rem 1rem 0rem;
                font-size: 1.5rem;
                color: ${props => props.theme['cinza-claro']};
            }
            /* padding: 1rem; */
            width: 60%;
            border-radius: 12px;
            img{
                width: 100%;
            }

            @media screen and (max-width:500px){
                width: 100%;
            }
        }

        .container_global_descricao_modal_portfolio{
            width: 40%;

            @media screen and (max-width:500px){
                width: 100%;
            }
        }

        .container_descricao_modal_portfolio{
                
            width: 100%;
            padding: 0rem 1rem;
            border-radius: 8px;
            margin: 1rem;

            @media screen and (max-width:500px){
                margin: 0;
                padding: 0;
            }

            .descricao_modal_portfolio{
                padding: 0rem 1rem;

                h2{
                    text-align: center;
                    margin-bottom: 1.5rem;
                    font-size: 1.5rem;
                    color: ${props => props.theme['cinza-claro']};
                }

                p{
                    color: ${props => props.theme['cinza-text']};
                    font-size: 0.875rem;
                    font-weight: 500;
                }

                .datas{
                    padding: 2rem 0rem 0rem 0rem;
                    font-weight: 300;
                    width: 100%;
                    
                    display:flex;

                    p{
                        color: ${props => props.theme['blue-primary']};
                        padding: 0.35rem 0rem;
                        display: flex;
                        align-items: center;

                        span{
                            color: ${props => props.theme['cinza-text']};
                            padding: 0rem 0.5rem;
                            font-weight: 400;
                            font-size: 0.875rem;
                        }
                    }

                    .datas_description{
                        width: 50%;

                        a{
                            text-decoration: none;
                            color: ${props => props.theme['blue-primary']};
                            font-weight: bold;
                            padding-left: 0.5rem;

                            &:hover{
                                opacity: 0.8;
                            }
                        }
                    }
                }
            }

            .container_ferramentas_utilizadas{
                margin: 2rem 0rem 0rem 0rem;

                .title_ferramentas_utilizadas{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.3rem;
                    color: #ef950e;
                    margin-bottom: 2rem;
                }

                .container_topic_ferramentas_utilizadas{
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: 1rem;
                }

                .topicos_ferramentas_utilizadas{
                    padding: 0.5rem 1rem;
                    color: ${props => props.theme['cinza-text']};
                }
            }
        }

        @media screen and (max-width:500px){
            flex-direction: column;
        }
        
    }

    

`