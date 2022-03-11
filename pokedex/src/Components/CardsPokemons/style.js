import styled from "styled-components";
import pokebola from "../../Assets/pokebola.png"


export const ContainerCard = styled.div`

.main {
  display: flex;
  align-items: center;
  justify-content: center;


.pokedex {
  display: flex;
  gap: 30px;
  padding: 30px 0;
}

.ul {
  list-style-type: none;
}

.cartao-pokemon {
  box-shadow: #6b727a 0px 7px 29px 0px;
  border-radius: 10px;


 .cartao-topo {
  background-color: #fcc719;
  padding: 10px 40px 0;
  border-radius: 10px;
}

 .none {
  margin-bottom: 5px;
}

 .tipo {
  font-size: 12px;
  background-color: white;
  opacity: 0.7;
  border-radius: 10px;
  padding: 2px 10px;
}

 .detalhes {
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

 .cartao-imagem {
  height: 150px;
  width: 200px;
  
  .imagem {
  position: relative;
  height: 150px;
  padding-left: 40px;
}
}


 .cartao-informacoes {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 80px 30px 20px;
  margin-top: -50px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

 .cartao-informacoes h3 {
  font-size: 20px;
  margin-bottom: 15px;
  border-bottom: 1px solid #242424;
}

 .cartao-informacoes .status {
  padding: 0 10px;
  width: 180px;
}

 .cartao-informacoes .status ul {
  padding: 0 0 5px;
  margin-bottom: 5px;
  font-size: 15px;
}

 .cartao-informacoes .status li {
  padding: 0 0 5px;
  border-bottom: 1px solid #6b727a;
}
 .buttons{
  	 gap: 10px;

   .btn{
     background-color: transparent;
     cursor: pointer;
     border: 1px solid #cad1d9;
     border-radius: 5px;
     padding: 5px;
   }
 }
}
}
`

