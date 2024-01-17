import { useState, useEffect } from "react"
import "./TelaReativa.css"

const TelaReativa = () => {


    const frases = [
        "Sempre com interesse em me atualizar e buscar novos conhecimentos",
        "Disposto a criar conexões e aprender com as mesmas",
        "Disposto a ensinar e colaborar com o crescimento da equipe",
        "Trabalho em equipe e facilidade de se adapitar a novos ambientes",
      
        // Adicione quantas frases você desejar
    ];

    const [fraseAtual, setFraseAtual] = useState('');

    useEffect(() => {
        let index = 0;

        // Função para atualizar a frase a cada 500 milissegundos
        const atualizarFrase = () => {
            setFraseAtual(frases[index]);
            index = (index + 1) % frases.length; // Circula pelo array de frases
        };
        

        // Agendar a execução da função inicialmente e a cada 500 milissegundos
        const intervalId = setInterval(atualizarFrase, 2100, );

        // Limpando o intervalo se o componente for desmontado
        return () => clearInterval(intervalId);
    }, [frases]); // Dependência adicionada para que o efeito seja recriado se o array de frases mudar

    return (
        <div>
            <header className="textContent">
                <h1 id="title-Ola">Ola sou Rafael  Desenvolvedor Front-end </h1>
                <img src="./public/my img.png" alt="minha-foto" />
            </header>
            <hr id="linha" />
            <ol className="menu-option">
                <li id="menu-li01" >Projetos</li>

                <li id="menu-li02" >Formação</li>

                <li id="menu-li03" >Contato</li>
            </ol>
            <div className="container-img">

            </div>
            <div className="container"></div>
            <footer className="footer-menu">
                <p id="text-footer">{fraseAtual}</p>
            </footer>

        </div>
    )
}
export default TelaReativa