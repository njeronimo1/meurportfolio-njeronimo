import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { ContainerContact } from "./Style.contact";
import emailjs from '@emailjs/browser';

export function Contact(){

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[assunto, setAssunto] = useState('');
    const[content, setContent] = useState('');

    function sendEmail(e:FormEvent)
    {
        e.preventDefault();
        if(name == "" || email == "" || assunto == "" || content == ""){
            return toast.error('Preencha os campos');
        }

        const templateParams ={
            from_name: name,
            message: assunto + '|' +content,
            email: email
        }

        emailjs.send('service_twjnraw', 'template_fxeq8ly',
        templateParams, 'xuUYielbkSuJa3POq').then( (response) => {
            console.log("Email enviado", response.status, response.text);
            
        }, (err) => {
            console.log(err);
        });

        toast.success('Email enviado com sucesso, aguarde o retorno em breve pelo email fornecido no formulário, obrigado 😉')

        setName("");
        setEmail("");
        setAssunto("");
        setContent("");
    }
    return(
        <ContainerContact>
            <form onSubmit={sendEmail}>
                <header>
                    <h2>Entre em contato comigo!</h2>
                </header>
                <main>
                    <div className="container_inputs">
                        <label htmlFor="">Digite seu nome</label>
                        <input type="text" 
                        placeholder="Digite aqui..."
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="container_inputs">
                        <label htmlFor="">Digite seu email</label>
                        <input type="email" 
                        placeholder="Digite aqui..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="container_inputs">
                        <label htmlFor="">Sobre qual assunto se trata?</label>
                        <input type="text"
                        placeholder="Digite aqui..."
                        value={assunto}
                        onChange={(e) => setAssunto(e.target.value)} />
                    </div>
                    <div className="container_inputs">
                        <label htmlFor="">Detalhe mais o seu interesse</label>
                        <textarea placeholder="Digite aqui..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)} ></textarea>
                    </div>
                </main>
                <button type="submit">Enviar</button>
            </form>
        </ContainerContact>
    )
}