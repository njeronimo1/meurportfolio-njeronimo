import styled from 'styled-components'

export const ContainerContentSecond = styled.div`

    width: 100%;
    padding: 2%;
    margin-top: 4.5rem;
    margin-bottom: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${props => props.theme['white-primary']};

    .container_content_second{
        display: flex;
        max-width: 1350px;
        margin-top: 3rem;
        img{
            width: 80%;
        }

        @media screen and (max-width: 500px) {
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;

            img{
                display: none;
            }
        }
    }

    .container_img{
        padding-right: 1rem;
        /* border-right: 0.2rem solid ${props => props.theme['blue-primary']}; */
    }

    .container_description_linhatempo{
        padding: 1%;
        width: 50%;
        
        label{

            padding-right: 0.3rem;
            color: ${props => props.theme['blue-primary']};
        }

        h4{
            margin: 1rem 0rem;
               
        }

        a{
            color: ${props => props.theme['white-primary']};
            text-decoration: none;
            font-weight: bold;
        }

        p{
            font-size: 0.8rem;
            padding-bottom: 1rem;
            line-height: 1.3rem;
            letter-spacing: 0.03rem;
        }

        span{
            color: greenyellow;
        }


        @media screen and (max-width: 500px) {
            width: 100%;
        }
        
    }

    
    

`