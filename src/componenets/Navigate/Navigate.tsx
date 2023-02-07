import { Link } from "react-router-dom";
import { ContainerNavigate } from "./style.navigate";

import {AiOutlineHome } from 'react-icons/ai';
import {MdComputer} from 'react-icons/md';
import {BiBookBookmark, BiMessageSquareDetail} from 'react-icons/bi';
import { useEffect, useState } from "react";

export function Navigate(){

    const[active, setActive] = useState('');

    // useEffect(() =>{
    //     var url = window.location.href;

    //     if(url.includes('portfolio')){
    //         setActive('/portfolio');
    //         return;
    //     }

    //     if(url.includes('cursos')){
    //         setActive('/cursos');
    //         return;
    //     }

    //     if(url.includes('contato')){
    //         setActive('/contato');
    //         return;
    //     }
        
    // }, [window.location.href]);

    return(
        <ContainerNavigate>
            <Link to={'/'} 
            className={window.location.href === "https://portfolio-njeronimo.vercel.app" || window.location.href === "https://portfolio-njeronimo.vercel.app/" ? "active" : ""}
            onClick={()=> setActive("")}>                
                <AiOutlineHome size={20} />
            </Link>

            <Link to={'/portfolio'}
            className={window.location.href.includes("/portfolio") ? "active" : ""}
            onClick={()=> setActive("/portfolio")}>                
                <MdComputer size={20}/>
            </Link>
            <Link to={'/cursos'}
            className={window.location.href.includes("/cursos") ? "active" : ""}
            onClick={()=> setActive("/cursos")}>
                <BiBookBookmark size={20}/>
            </Link>
            <Link to={'/contato'}
            className={window.location.href.includes("/contato")  ? "active" : ""}
            onClick={()=> setActive("/contato")}>
                <BiMessageSquareDetail size={20}/>
            </Link>
        </ContainerNavigate>
    )
}