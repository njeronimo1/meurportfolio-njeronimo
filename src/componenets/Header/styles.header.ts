

import styled from 'styled-components';

export const ContainerHeader = styled.div`

    width: 100%;
    color: ${props => props.theme['white-primary']};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0rem 3rem;

    .title_header{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        label{
            color: ${props => props.theme['blue-primary']};
        }

        h2{
            width: 5rem;
            height: 5rem;
            background-size: cover;
        }
    }

    .links_header{
        a{
            padding: 0rem 1rem;
            text-decoration: none;
            color: ${props => props.theme['white-primary']};
            transition: 0.1s all;
            font-weight: 400;
            padding-bottom: 0.5rem;

            &:hover{
                border-bottom: 0.15rem solid ${props => props.theme['blue-primary']};
            }
        }
    }

    .container_download_cv{
            button{
                background: ${props => props.theme['blue-primary']};
                border-radius: 8px;
                border: none;
                padding: 0.8rem;
                color: ${props => props.theme['white']};
                transition: 0.1s all;
                display: flex;
                align-items: center;
                font-weight: 500;
                gap: 0.3rem;

                &:hover{
                cursor: pointer;
                /* background-color: ${props => props.theme['white-primary']}; */
                opacity: 0.9;

                &:active{
                    opacity: 1;
                }
            }
        }
        
    }
`