import styled from 'styled-components'

export const ErroImg = styled.img`
    width: 70%;
@media screen and (max-width: 700px) {
    padding: 100px;
    width: 100%;
  }
`
export const Botao = styled.button`
    background-color: transparent;
     cursor: pointer;
     font-size: 15px;
     border: 1px solid #28004B;
     border-radius: 5px;
     padding: 5px;
     height: 40px;
     width: 150px;
&:hover{
     background-color: #E1E1E1;
     color: #000;
}
`
export const ContainerErro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`  
