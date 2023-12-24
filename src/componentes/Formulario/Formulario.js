import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa"
import { Botao } from "../Botao/Botao"
import { useState } from 'react'

export const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'

    ]   

    const [nome, setNome] = useState('Pedro Igor Ferreira Amorim')
    const [cargo, setCargo] = useState('Dev Trainee')
    const [imagem, setImagem] = useState('http...')
    const [time, setTime] = useState(times[0])

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa
                    obrigatorio={true}
                    itens={times} 
                    label="Time"
                    valor={time}
                    aoAlterado={valor => setTime(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}