import { ContainerModalRepositorio, ContainerPortfolio } from "./style.portfolio";

import closeImg from '../../Assets/vector.svg';


import { GithubLogo, Sliders } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../Axios/apiGithub";
import Modal from 'react-modal';

import dateformat from "dateformat";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

//REACT ICONS///

import {IoCreate, IoAlertCircleSharp } from 'react-icons/io5';
import {FiLink} from 'react-icons/fi';
import {IoIosRocket} from 'react-icons/io';
import {BsGithub} from 'react-icons/bs';
import {TbWorld} from 'react-icons/tb';
import {BiCodeAlt} from 'react-icons/bi';
import {MdOutlineUpdate} from 'react-icons/md';
import { ImageDescription } from "./ImageDescription";

/////////////////
Modal.setAppElement('#root');

export interface repositories{
    id: number,
    name: string,
    description: string,
    node_id: string,
    created_at: string,
    updated_at: string,
    pushed_at: string,
    homepage: string,
    language: string,
    html_url: string,
    topics:[
        string
    ]
}

export function Portfolio(){

    const [repositories, setRepositories] = useState<repositories[]>([]);
    const [repositoriesFilter, setRepositoriesFilter] = useState<repositories[]>([]);
    const [repositorio, setRepositorio] = useState<repositories[]>([]);
    const [nameRepo, setNameRepo] = useState('');
    const [modalPortfolioOpen, setModalPortfolioOpen] = useState(false);
    const [video, setVideo] = useState("_W_Qtlg7UhQ");

    useEffect(() =>{
        const resp = api.get('/users/njeronimo1/repos').then(
            (res) => {setRepositories(res.data)}
        )
    }, []);

    useEffect(() =>{
        const repositorioFilter = 
        repositories.filter(m => m.node_id == 'R_kgDOHfEI5w' 
        || m.node_id == 'R_kgDOIMx6nA'
        || m.node_id == 'R_kgDOH5Zx2Q'
        || m.node_id == 'R_kgDOIMvjtQ'
        || m.node_id == 'R_kgDOHkMhxw'
        || m.node_id == 'R_kgDOIV9kDw'
        );
        
        if(repositorioFilter)setRepositoriesFilter(repositorioFilter);
       
         console.log(repositories);
    }, [repositories]);

    function ModalActivation(name:string, node_id:string){
        if(name){
            const entity = repositories.filter(m => m.node_id == node_id);

            setRepositorio(entity);
            setNameRepo(entity[0].name);
            setModalPortfolioOpen(true);            
        }
    }

    function onCloseModalPortfolio(){
        setModalPortfolioOpen(false);
    }

    return(
        <ContainerPortfolio>
            <header>
                <h2>Não deixe de analisar o código dos projetos em meu <a target="_blank" href="https://github.com/njeronimo1">GitHub
                <GithubLogo size={25} weight="bold" /></a></h2>
            </header>
            <main>
                <header>
                    <p>👋 Essa página está sendo consumida diretamente da API do GitHub, clique em um <b>card</b> para visualizar detalhes e um vídeo detalhado de apresentação do projeto 😎</p>
                </header>
                <div className="container_blocos" data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center">
                    {repositoriesFilter.map(repo =>{
                        return(
                            
                            <div key={repo.node_id} 
                            onClick={()=>{ ModalActivation(repo.name, repo.node_id) }}
                            className="style_card">
                                <div className={
                                 repo.name == "AmigosDoReiReact" ?
                                 "container_content_card style_content_card_1" : 

                                 repo.name == "dtmoney" ?
                                 "container_content_card style_content_card_2" : 

                                 repo.name == "PlataformaEventosOnline" ?
                                 "container_content_card style_content_card_3" :

                                 repo.name == "redesocial-swif" ?
                                 "container_content_card style_content_card_4" :

                                 repo.name == "ToDo-List-React-CRUD" ?
                                 "container_content_card style_content_card_5" : 
                                 
                                 repo.name == "BuscadorCEP_NoliFretes" ?
                                 "container_content_card style_content_card_6" : "container_content_card"
                                 }>
                                    <h2>{repo.name || <Skeleton />}</h2>
                                    <footer>
                                        <p>{repo.description || <Skeleton />}</p>
                                    </footer>
                                </div>
                            </div>
                            )
                        })
                    } 
                </div>
            </main>

            <Modal 
            isOpen={modalPortfolioOpen} 
            onRequestClose={onCloseModalPortfolio}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">

                <ContainerModalRepositorio>
                    <button 
                    type="button" 
                    onClick={onCloseModalPortfolio} 
                    className="react-modal-close">
                        <img src={closeImg} alt="Close" />
                    </button>
                    <div className="container_modal_portfolio">
                        <div className="videos_apresentacao_projeto">
                            <h4> Imagem sobre o projeto</h4>
                            <ImageDescription name={nameRepo} />
                        </div>
                        <div className="container_global_descricao_modal_portfolio">
                            {/* <h2>Descrição</h2> */}
                            <div className="container_descricao_modal_portfolio">
                                <p>{
                                    repositorio.map(repo =>{
                                        return(
                                            <div key={repo.id} className="descricao_modal_portfolio">
                                                <h2>{repo.name}</h2>
                                                <p>{repo.description}</p>
                                                <div className="datas">
                                                    <div className="datas_description">
                                                        <p><IoCreate        size={25}/> <span><b>Criado em:</b> {dateformat(repo.created_at, "dd/mm/yy HH:MM")}h</span></p>
                                                        <p><MdOutlineUpdate size={25}/> <span><b>Atualizado em:</b> {dateformat(repo.updated_at, "dd/mm/yy HH:MM")}h</span></p>
                                                        <p><IoIosRocket     size={25}/> <span><b>Públicado em:</b> {dateformat(repo.pushed_at, "dd/mm/yy HH:MM")}h</span></p>
                                                    </div>
                                                    <div className="datas_description">
                                                        <p><BsGithub        size={25}/> <span><b>Link repositório:</b><a href={repo.html_url} target="_blank">Clique <FiLink/></a></span></p>
                                                        <p><TbWorld         size={25}/> <span><b>Link projeto:</b>    <a href={repo.homepage }  target="_blank">Clique <FiLink/></a> </span></p>
                                                        <p><BiCodeAlt       size={25}/> <span><b>Principal linguagem:</b>  {repo.language}</span></p>
                                                    </div>
                                                </div>
                                                <div className="container_ferramentas_utilizadas">
                                                    <p className="title_ferramentas_utilizadas">
                                                        <IoAlertCircleSharp size={23}/> Este projeto foi construido utilizando:
                                                    </p>

                                                    <p className="container_topic_ferramentas_utilizadas">
                                                        {
                                                        repo.topics.map(topic =>{
                                                            return(
                                                                <p className="topicos_ferramentas_utilizadas">
                                                                    {topic == 'reactjs' ? '🌐' : topic == 'firebase' ? '⚙️'
                                                                    : topic == 'styled-components' ? '💅' : 
                                                                    topic == 'typescript' ? '🕹️' : 
                                                                    topic == 'nodejs' ? '⚡' : '🚀'} {  topic}
                                                                </p>
                                                            )
                                                        })
                                                    }
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                })}</p>
                            </div>
                        </div>
                    </div>
                        
                </ContainerModalRepositorio>
            
            </Modal>
        </ContainerPortfolio>
    )
}