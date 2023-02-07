import { ContainerHeader } from "./styles.header";

import logo_escuro from '../../Assets/logodefault.png';
import logo_white from '../../Assets/logolight.png';
import { Link } from "react-router-dom";

interface HeaderProps{
    theme: boolean;
}



export function Header({theme}:HeaderProps){

    
    return(
        <ContainerHeader>
            <div className="title_header"> 
                <Link to={'/'}>
                <h2 style={{backgroundImage:`url(${ theme == true ? logo_escuro : logo_white})`}}></h2>
                </Link>
            </div>
            <div className="links_header">
                <Link to={'/portfolio'}>                
                    Portfólio
                </Link>
                <Link to={'/tecnologias'}>
                    Tecnologias
                </Link>
                <Link to={'/cursos'}>
                    Cursos
                </Link>
                <Link to={'experiencia'}>
                    Contato
                </Link>
            </div>
            {/* <div className="container_download_cv">
                <button onClick={downloadCurriculum}>
                    Download CV <DownloadSimple size={20}/>
                </button>
                {download && (
                    <iframe src={download}
                    style={{display: 'none'}}></iframe>
                )} 
            </div> */}
        </ContainerHeader>
    )
}