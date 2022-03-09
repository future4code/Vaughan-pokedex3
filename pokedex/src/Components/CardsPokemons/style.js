import styled from "styled-components";
import Pokebola from "../../Assets/pokebola.png"
import fogo from "../../Assets/fogo.png"

export const ContainerCard = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const EstiloCard = styled.div`
width: 22rem;
height: 60vh;

border: 1px solid #000;
margin: 20px;
.pokenome{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-image: url(${fogo});
background-position: top center;
    object-fit: cover;
    height: 72%;
    width: 100%;
    img{
        width: 170px;
    }
}
.detalhes{
    
}
`

