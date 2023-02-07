import styled from 'styled-components';

export const ContainerNavigate = styled.nav`

    background: rgba(13, 17, 23, 0.4);
    width: max-content;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    bottom: 2rem;
    gap: 0.8rem;
    display: flex;
    border-radius: 3rem;
    backdrop-filter: blur(15px);

    a{
        background-color: transparent;
        padding: 0.9rem;
        border-radius: 50%;
        display: flex;
        color: ${props => props.theme['white-primary']};
        font-size: 1.1rem;
        transition: 0.3s ease-in-out;

        &:hover{
            background: rgba(0,0,0,0.3);
            color: #ccc;
        }
        
        
    }

    .active{
            background: ${props => props.theme['blue-primary']};
            
        }
    
`