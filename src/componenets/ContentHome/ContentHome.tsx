import { ContainerContHome } from "./styles.conthome";
import { DownloadSimple } from "phosphor-react";
import { ContentSecond } from "../ContentSecond/ContentSecond";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const urlCurriculum = "https://drive.google.com/u/0/uc?id=1q7TO8JRZE1D7WAepW0NoqbvnXIw4U7ba&export=download";

export function ContentHome(){

    const [download, setDownload] = useState('');
    const navigate = useNavigate();

    function downloadCurriculum(){
        setDownload(urlCurriculum);

        setTimeout(() => {
            setDownload('');
        }, 5000); 

    }

    function handleMeusProjetos(){
        navigate("/portfolio");
    }


    return(
        <>
        <ContainerContHome>
            <div className="titulo_apresentacao " data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
                <div>
                    <h2>Eai, beleza? eu sou o</h2>
                    <h1>Nicolas Jerônimo</h1>
                </div>
                <p>Desenvolvedor Front End</p>
                <div className="container_botoes">
                    {/* <Link to={"/portfolio"} style={{textDecoration:'none'}}> */}
                        <label className="btn_projetos" onClick={handleMeusProjetos}>Meus projetos</label>
                    {/* </Link> */}
                    <div className="container_download_cv">
                        <button onClick={downloadCurriculum}>
                            Download CV <DownloadSimple size={20}/>
                        </button>
                        {download && (
                            <iframe src={download}
                            style={{display: 'none'}}></iframe>
                        )} 
                    </div>
                </div>

                

            </div>

        </ContainerContHome>
        <ContentSecond />
        </>
    )
}