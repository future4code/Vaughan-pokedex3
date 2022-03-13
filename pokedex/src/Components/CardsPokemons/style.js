import styled, { css } from "styled-components";

export const RESOLVE_STYLE = {
  normal: css`
  color: black;
  background: linear-gradient(90deg, rgba(189,162,170,1) 40%, rgba(227,208,213,1) 100%);
  `,
  fire: css`
  color: black;
  background: linear-gradient(90deg, rgba(255,97,102,1) 40%, rgba(255,190,193,1) 100%);
  `,
  water: css`
  color: black;
  background: linear-gradient(90deg, rgba(60,118,255,1) 40%, rgba(175,199,255,1) 100%);
`,
  grass: css`
  color: black;
  background: linear-gradient(90deg, rgba(58,255,108,1) 40%, rgba(162,255,186,1) 100%);
  `,
  flying: css`
  color: black;
  background: linear-gradient(90deg, rgba(155,186,208,1) 40%, rgba(213,237,255,1) 100%);
 `,
  fighting: css`
  color: black;
  background: linear-gradient(90deg, rgba(255,135,100,1) 40%, rgba(255,203,188,1) 100%);
`,
  poison: css`
  color: black;
  background: linear-gradient(90deg, rgba(203,162,255,1) 40%, rgba(234,217,255,1) 100%);
`,
  electric: css`
  color: black;
  background: linear-gradient(90deg, rgba(250,250,114,1) 40%, rgba(255,255,183,1) 100%);
`,
  ground: css`
  color: black;
  background: linear-gradient(90deg, rgba(166,129,85,1) 40%, rgba(255,226,192,1) 100%);
`,
  rock: css`
  color: black;
  background: linear-gradient(90deg, rgba(113,69,55,1) 40%, rgba(215,165,149,1) 100%);
`,
  psychic: css`
  color: black;
  background: linear-gradient(90deg, rgba(255,125,195,1) 40%, rgba(255,197,228,1) 100%);
`,
  ice: css`
  color: black;
  background: linear-gradient(90deg, rgba(134,210,245,1) 40%, rgba(214,242,255,1) 100%);
`,
  bug: css`
  color: black;
  background: linear-gradient(90deg, rgba(126,255,154,1) 40%, rgba(194,255,207,1) 100%);
`,
  ghost: css`
  color: black;
  background: linear-gradient(90deg, rgba(211,139,213,1) 40%, rgba(254,208,255,1) 100%);
`,
  steel: css`
  color: black;
  background: linear-gradient(90deg, rgba(95,219,178,1) 40%, rgba(198,255,236,1) 100%);
`,
  dragon: css`
  color: black;
  background: linear-gradient(90deg, rgba(98,202,217,1) 40%, rgba(185,246,255,1) 100%);
`,
  dark: css`
  color: black;
  background: linear-gradient(90deg, rgba(106,106,126,1) 40%, rgba(216,216,222,1) 100%);
`,
  fairy: css`
  color: black;
  background: linear-gradient(90deg, rgba(255,75,147,1) 40%, rgba(255,197,228,1) 100%);
`,
}

export const ContainerCard = styled.div`
@keyframes pokemon-up {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-.4rem);
  }
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;

.pokedex {
  display: flex;
  padding: 10px 0;
  &:hover{
    animation: pokemon-up .5s;
  }
}

.cartao-pokemon {
  box-shadow: #d0d3d7 0px 5px 10px 0px;
  border-radius: 10px;


 .cartao-topo {
  ${props => RESOLVE_STYLE[props.background]}
  padding: 0px 40px 0;
  border-radius: 10px;
}
 .none {
  margin-bottom: 5px;
}

 .tipo {
  ${props => RESOLVE_STYLE[props.background]}
  font-weight: 700;
  font-size: 13px;
  border: 1px solid #484848;
  opacity: 0.7;
  border-radius: 10px;
  padding: 2px 8px;
}

 .detalhes {
   font-size: 14px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

 .cartao-imagem {
  height: 150px;
  width: 200px;
  
  .imagem {
  position: relative;
  height: 110px;
  padding-left: 50px;
  cursor: pointer;
}
}

 .cartao-informacoes {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 50px 30px 20px;
  margin-top: -60px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

 .buttons{
     display: flex;
     align-items: center;
  	 gap: 5px;
    .pokebola{
    }
   .btn{
     background-color: transparent;
     cursor: pointer;
     border: 1px solid #cad1d9;
     border-radius: 5px;
     padding: 5px;
     display: flex;
     align-items: center;
     &:hover{
        background-color: #e0fdfe;
        color: #000;
      }
   }
 }
}
}
`

