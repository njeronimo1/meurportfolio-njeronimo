import styled from 'styled-components';

export const ContainerContact = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    form{
        width: 35%;
        box-shadow: var(--box-shadow);
        border-radius: 3px;
        background-color: ${props => props.theme['white-primary']};
        padding: 2rem;

        header{
            width: 100%;
            text-align: center;

            h2{
                color: ${props => props.theme['blue-primary']};
                font-weight: 800;
                font-size: 1.4rem;
            }

            margin-bottom: 1rem;

        }

        @media screen and (max-width: 768px) {
            width: 100%;
            margin: 4%;
        }
        main{
            .container_inputs{
                display: flex;
                flex-direction: column;

                label{
                    margin: 1rem 0rem 0rem 0rem;
                }

                textarea, input{
                    margin: 0.5rem 0rem 0rem 0rem;
                    background: ${props => props.theme['cinza-claro']};
                    border: none;
                    padding: 0.5rem;
                    border-radius: 0.2rem;
                    font-size: 0.875rem;
                }

                textarea{
                    padding: 1rem;
                    height: 15rem;
                    width: 100%;
                    resize: none
                }
            }
        }

        button{
            width: 100%;
            padding: 0.5rem;
            color: white;
            background-color: ${props => props.theme['blue-primary']};
            margin: 1rem 0rem 0rem 0rem;
            border: none;
            cursor: pointer;

            &:hover{
                opacity: 0.8;
            }

            &:active{
                outline: none;
            }
        }

    }

`