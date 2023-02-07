import {createGlobalStyle} from 'styled-components';

import  body_escuro  from '../Assets/body_escuro.png';
import  body_white  from '../Assets/body_white.png';

export const GlobalStyle = createGlobalStyle`

    :root{
        --box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    
    body{
        transition: 0.3s all;
        background-color: ${(props) => props.theme['black-primary']};
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    .theme_switcher{
        position: fixed;
        right: 2rem;
        bottom: 2rem;
    }

    .body_image{
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        transition: 1s all;
    }

    ////////STYLE MODAL///////////////

    .react-modal-overlay{
        background:rgba(0,0,0, 0.5);
        position:fixed;
        top:0;
        bottom:0;
        right:0;
        left:0;

        display:flex;
        align-items:center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 1600px;
        background: ${props => props.theme['black-primary']};
        padding: 2rem;
        margin: 2%;
        position: relative;
        border-radius:0.25rem;

        overflow-y: auto;
    }

    .react-modal-close{
        position:absolute;
        right:1.5rem;
        top: 1.5rem;
        border:0;
        background:transparent;

        transition:filter 0.2s;
        cursor: pointer;

        &:hover{
            filter:brightness(0.8);
        }
    }
    

`