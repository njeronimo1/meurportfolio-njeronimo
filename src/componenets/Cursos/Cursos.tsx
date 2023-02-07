import { ContainerCursos } from "./style.cursos";

import ignite from '../../Assets/ignite.svg';
import danki_logo from '../../Assets/danki_logo.png';
import css3 from '../../Assets/css3.png';
import html5 from '../../Assets/html5.png';
import javascript from '../../Assets/javascript.png';
import react from '../../Assets/react.png';
import typescript from '../../Assets/typescript.png';

export function Cursos(){
    return(
        <ContainerCursos>
            <header>
                <h2>Aqui estão algumas de minhas qualificações 🚀</h2>
            </header>
            <main>
                <div className="box_main">
                    <div className="box_curso">
                        <img src={ignite} alt="" />
                        
                    </div>
                    <div className="box_desc_curso">
                        <h4>Trilha Ignite ReactJs - Rocketseat</h4>
                        <p>A trilha de React.js da Rocketseat abrange des dos principais conceitos do React até os mais avançados e atuais, nesta trilha eu aprendi criar Apps Web do 0 com create-react-app porém quando foi ensinado a crição de apps utilizando TypeScript, me apaixonei e hoje crio todos meus apps utilizando Vite com template TypeScript.
                            Aprendi a utilizar os Hooks poderosos do React como: useState, useEffect, useNavigate, useRef e também aprendi algumas ferramentas mais avançadas como ContextApi e react-router-dom, assim também se fez presente o uso do Axios para consumo de APIs do jeito certo com a maior parte dos Apps utilizando essa ferramenta para consumo e envio de informações do front end.
                            <br />Um exemplo de App web que construimos utilizando essas ferramentas é o <b>dtmoney</b> que está em meu portfólio. Com estes conhecimentos criei alguns apps como o <b>Amigos do Rei,</b> que foi criado utilizando Reactjs com template Typescript, ContextApi para criar uma autenticação de login completa junto ao firebase e um CRUD utilizando o localStorage dentro da àrea logada, neste app utilizei todos os Hooks que aprendi no Ignite e também algumas ferramentas que aprendi por fora, como bibliotécas, projeto se encontra na página do meu portfólio.
                        </p>

                        <div className="ferramentas_aprendidas">
                            <div className="container_stacks">
                                <p>Principais stacks aprendidas:</p>
                                <div className="container_spans">
                                    <span>React.js <img src={react} alt="" /></span>
                                    <span>TypeScript <img src={typescript} alt="" /></span>
                                    <span>Styled-components 💅
                                    </span>

                                </div>
                            </div>
                            <div className="container_stacks">
                                <p>Principais ferramentas aprendidas:</p>
                                <div className="container_spans_">
                                    <span>Hooks - ContextApi, useState, useEffect, useNavigate entre outros.</span>
                                    <span>Consumo de Api como Fetch e utilizando Axios.</span>
                                    <span>React-router-dom.</span>
                                    <span>Apps CRUD com React, TypeScript, LocalStorage, MirageJs, GraphQL.</span>
                                    <span>Conceitos de imutabilidade com React e Typescript.</span>
                                    <span>Componentização, LocalStorage, Figma. </span>
                                    <span>Deploy de apps React.js. </span>
                                </div>
                            </div>
                            <div className="">
                                {/* <img src={react} alt="" /> */}
                                {/* <img src={typescript} alt="" />
                                <img src={javascript} alt="" />
                                <img src={styledcomponents} alt="" />
                                <img src={css3} alt="" />
                                <img src={html5} alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box_main">
                    <div className="box_curso">
                        <img src={danki_logo} alt="" />
                    </div>
                    <div className="box_desc_curso">
                        <h4>Webmaster Front-End Completo - Danki Code</h4>
                        <p>
                        Neste curso aprendi a construir layouts diversos utilizando HTML5, CSS e JavaScript, foi meu inicio em toda a parte de design no front end e onde aprendi a maior parte do que sei hoje sobre dispor elementos na tela, neste curso aprendi conceitos como: HTML semântico, flexbox, design responsivo, animações, variáveis no CSS, requisições HTTP, manipulação do DOM com JavaScript, eventos e consumo de API utilizando Vanilla JavaScript.
                        </p>

                        <div className="ferramentas_aprendidas">
                            <div className="container_stacks">
                                <p>Principais stacks aprendidas:</p>
                                <div className="container_spans">
                                    <span>HTML5 <img src={html5} alt="" /></span>
                                    <span>CSS <img src={css3} alt="" /></span>
                                    <span>JavaScript <img src={javascript} alt="" /></span>

                                </div>
                            </div>
                            <div className="container_stacks">
                                <p>Principais ferramentas aprendidas:</p>
                                <div className="container_spans_">
                                    <span>HTML5 Semântico.</span>
                                    <span>Construção de layouts responsivos.</span>
                                    <span>Medias Queries.</span>
                                    <span>CSS - Flexbox, animações e variáveis.</span>
                                    <span>Manipular o DOM com JavaScript e eventos.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box_main">
                    <div className="box_curso">
                        <img src={danki_logo} alt="" />
                        
                    </div>
                    <div className="box_desc_curso">
                        <h4>JavaScript Puro - Danki Code</h4>
                        <p>
                        Este curso é focado em Vanilla Javascript, isto é, JavaScript puro, sendo assim eu aprendi muito da lógica de programação utilizando JS puro, alguns dos ensinamentos foram: Condicionais utilizando If, else, else if e switch case, estruturas de repetição como: For, ForEach e While. Também aprendemos a manipular o DOM utilizando JS para eventos, assim criamos alguns projetos simples como uma calculadora com layout manipulando os elementos em tela.
                        Também foi ensinado sobre requisições HTTP com JS puro e criamos um projeto consumindo a API Pokemon e injetando os dados no HTML para criação do App.

                        
                        </p>

                        <div className="ferramentas_aprendidas">
                            <div className="container_stacks">
                                <p>Principais stacks aprendidas:</p>
                                <div className="container_spans">
                                    <span>JavaScript <img src={javascript} alt="" /></span>
                                    <span>React.js <img src={react} alt="" /></span>

                                </div>
                            </div>
                            <div className="container_stacks">
                                <p>Principais ferramentas aprendidas:</p>
                                <div className="container_spans_">
                                    <span>Lógica de programação com JavaScript.</span>
                                    <span>Como implementar - If, for, forEach, arrays e objetos com JavaScript.</span>
                                    <span>Requisições HTTP com JavaScript.</span>
                                    <span>Eventos e manipulação do DOM.</span>
                                    <span>Principais conceitos do ReactJs.</span>
                                </div>
                            </div>
                            <div className="">
                                {/* <img src={react} alt="" /> */}
                                {/* <img src={typescript} alt="" />
                                <img src={javascript} alt="" />
                                <img src={styledcomponents} alt="" />
                                <img src={css3} alt="" />
                                <img src={html5} alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </ContainerCursos>
    )
}