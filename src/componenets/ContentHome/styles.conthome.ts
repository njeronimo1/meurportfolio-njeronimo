import image from '../../Assets/css3.png';

import styled from 'styled-components';

export const ContainerContHome = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1350px;
    height: 80vh;
    margin: 0 auto;

    .titulo_apresentacao{
        width:55%;
        padding-left: 2%;
        position: relative;
        bottom: 1.5rem;
        color: ${props => props.theme['white-primary']};

        h2{
            font-weight: 400;
            padding-bottom: 0.4rem;
            font-size: 1.1rem;
            text-align: center;
            color: ${props => props.theme['white-primary']};
        }

        h1{
            font-size: 2.5rem;
            text-align: center;
        }

        p{
            padding-top: 0.6rem;
            text-align: center;
            font-weight: 400;
            color: ${props => props.theme['gray']};
        }

        .container_botoes{
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;
            gap: 1rem;

            label{
                width:25%;
            }
            button{
                width: 100%;
            }
        }

        @media screen and (max-width: 500px){
            .container_botoes{
                display: flex;
                flex-direction: column;
                label{
                    width: 100%;
                }
            }
        }

        .container_stacks{
            
            display: flex;
            align-items: center;
            justify-content: left;
            
            img{
                width: 1.7rem;
                margin-top: 1rem;
                margin-right: 0.5rem;
            }
        }
        
        .btn_projetos{
            background-color: ${props => props.theme['blue-primary']};
            padding: 0.7rem 1rem;
            border-radius: 6px;
            margin-top: 1rem;
            border: none;
            width: 35%;
            cursor: pointer;

            display: flex;
            justify-content: space-around;
            color: ${props => props.theme['white']};
            border: 0.13rem solid ${props => props.theme['blue-primary']};

            &:hover{
                opacity: 0.7;
            }

            &:active{
                opacity: 1;
            }
        }

        button{
            background-color: transparent;
            padding: 0.7rem 1rem;
            border-radius: 6px;
            margin-top: 1rem;
            border: 0.13rem solid ${props => props.theme['blue-primary']};
            width: 35%;
            cursor: pointer;

            display: flex;
            justify-content: space-around;
            color: ${props => props.theme['blue-primary']};
            font-weight: 600;
            transition: 0.2s ease-in-out;

            &:hover{
                /* opacity: 0.7; */
                background-color: ${props => props.theme['blue-primary']};
                color: ${props => props.theme['white']};
            }

            &:active{
                opacity: 1;
            }
        }
        
    }

    .perfilimg{
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
    
        img{
            width: 70%;
            /* height: 45rem; */
            border-radius: 2rem;
            box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        }
        
    }

    .scroll{
        position: absolute;
        right: 1rem;
    }
`

export const ContainerContent2 = styled.div`

    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    label{
        position: absolute;
        border: none;
        color: #075FE4;
        background-color: transparent;
        cursor: pointer;
        transition: 0.2s all;

        &:hover{
            opacity: 0.8;
        }
    }
`
