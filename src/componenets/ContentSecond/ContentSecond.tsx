import { ContainerContentSecond } from "./StyleContentSecond";

import { PushPin, RocketLaunch } from "phosphor-react";


export function ContentSecond(){
    return(
        <ContainerContentSecond>
            <h1 data-aos="fade-up">Minha trajetória</h1>
            <div className="container_content_second" data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
                <div className="container_description_linhatempo">
                    <h4>2021</h4>
                    
                    <p><label><PushPin size={15} weight="fill"/></label>
                        <b>Agosto:</b> Construi meu primeiro <a href="https://portfolio-njeronimo.netlify.app/">portfólio</a> utilizando HTML, CSS e JavaScript e assim consegui meu primeiro emprego 
                    como Desenvolvedor Front End Júnior na Lupeon.</p>
                    
                    <p><label><PushPin size={15} weight="fill"/></label>
                        <b>Julho:</b> Já estava construindo layouts completos utilizando HTML e CSS e então comecei o curso de JavaScript Puro. 
                    Aprendendo assim a controlar o DOM, eventos, manipular arrays e objetos.</p>
                    <p><label><PushPin size={15} weight="fill"/></label>
                        <b>Fevereiro:</b> Me interessei bastante em desenvolvimento de Softwares e não me contentei apenas com a faculdade. 
                    Fiz a compra do curso Front End Completo da Danki Code e comecei meus estudos na área do desenvolvimento web.</p>
                    <p><label><PushPin size={15} weight="fill"/></label>
                        <b>Janeiro:</b> Início do curso Análise e desenvolvimento de sistemas no Mackenzie.</p>
                        
                </div>   

                

                <div className="container_description_linhatempo">
                    <h4>2023 </h4>
                    <p><b>Atualmente:</b> Desenvolvedor Front End atuando na construção e manutenção de aplicativos web
                    utilizando ReactJs, TypeScript, JavaScript, Styled-components e aprendendo cada vez mais as técnologias mais usadas pelo mercado. <span><RocketLaunch size={16} /></span></p>
                    <p>
                    <p><label><PushPin size={15} weight="fill"/></label>
                        <b>Setembro: </b> 
                         Iniciei a construção de uma plataforma EAD em um projeto a parte para a empresa em que trabalhava, feito em vite, com template Reactjs/Typescript e utilizando Styled-components para estilização, construi toda a autenticação de login com ContextApi e refresh token,
                         também construi um DashBoard com recharts e telas de cadastro, listagem e edição de dados para: Cursos, aulas, provas... além de telas com relatórios para acompanhamento de evolução entre cursos. 
                    </p>    
                        <label><PushPin size={15} weight="fill" /></label>
                        <b>Julho:</b> Comecei a construir aplicações para agregar ainda mais meus conhecimentos e montar este portfólio para <span><b>você</b></span>, aplicações como:<br />
                    <a href="https://amigosdorei.netlify.app/">Amigos do Rei</a>, que criei um CRUD para cadastro, listagem e edição/exclusão de um membro no clube de desbravadores, utilizei ReactJs com TypeScript, Styled-components, Axios para envio e consumo das informações, ContextApi para montar uma estrutura completa de Login com o Google utilizando o Firebase e persistindo as informações do usuário no LocalStorage do navegador.</p>
                    
                    <p><label><PushPin size={15} weight="fill"/></label>
                        <b>Maio:</b>  Para evoluir meus conhecimentos em React, comecei a estudar o Ignite da <a href="https://www.rocketseat.com.br/">Rocketseat</a> pela trilha de ReactJs, aprendendo assim algumas das técnologias mais atuais do mercado como:
                    ReactJs com Vite e TypeScript, StyledComponents (Css in Js), Hooks do React como ContextApi, useState, useEffects, useHistory, ferramentas/bibliotecas como<br/> 
                    react-router-dom, axios para consumo de API's, phosphor-icons e swiper. 
                    </p>

                    <p><label><PushPin size={15} weight="fill"/></label>
                    <b>Fevereiro:</b> Construi o layout inteiro de uma nova aplicação em ReactJs e comecei a realizar manutenções, apliquei a troca de temas com personalização para cada cliente, atualmente com 3 temas diferentes neste único projeto, também realizei manutenções para renderizar comprovantes em formato base64 e visualização de NFes em PDF.</p>
                    
                    <p><label><PushPin size={15} weight="fill"/></label>
                        <b>Janeiro:</b> Estava trabalhando com HTML, CSS e JavaScript, .NET C# MVC todos os dias, também comecei a aprender banco de dados utilizando SQL Server, fazendo consultas,
                    analisando procedures para realizar ajustes e também começando a aprender sobre a estrura de um CRUD no banco de dados.</p>
                    </div> 
                    
                {/* <div className="container_img">
                    <img src={perfil} alt="Nicolas Jerônimo" />
                </div> */}
            </div>
        </ContainerContentSecond>
    )
}