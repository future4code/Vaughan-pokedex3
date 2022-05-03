import React from 'react'
import {ErroImg, Botao, ContainerErro} from './Styled'
import Erro from '../../Assets/2.png'
import { irParaHome } from '../../Routes/Coordenadas'
import { useNavigate } from 'react-router-dom'

function PaginaDetalhes() {
    const navigate = useNavigate()

    return (
        <ContainerErro>
            <ErroImg src={Erro} alt="Imagem página de erro!"/>
            <Botao onClick={() => irParaHome(navigate)}>IR PARA HOME 🏠</Botao>
        </ContainerErro>
    )
}

export default PaginaDetalhes