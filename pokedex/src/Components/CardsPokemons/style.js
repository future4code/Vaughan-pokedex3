import styled, { css } from "styled-components";

export const RESOLVE_STYLE = {
  normal: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(117,82,92,1) 0%, rgba(202,152,166,1) 40%, rgba(255,217,228,1) 100%);
  `,
  fire: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(171,31,36,1) 0%, rgba(253,75,90,1) 40%, rgba(255,184,190,1) 100%);
  `,
  water: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(21,82,225,1) 0%, rgba(133,168,251,1) 40%, rgba(202,218,255,1) 100%);
`,
  grass: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(20,123,61,1) 0%, rgba(39,203,80,1) 40%, rgba(193,255,209,1) 100%);
  `,
  flying: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(74,103,125,1) 0%, rgba(148,178,199,1) 40%, rgba(220,241,255,1) 100%);
 `,
  fighting: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(153,64,37,1) 0%, rgba(239,98,57,1) 40%, rgba(255,197,180,1) 100%);
`,
  poison: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(94,45,137,1) 0%, rgba(155,105,218,1) 40%, rgba(233,215,255,1) 100%);
`,
  electric: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(226,227,43,1) 0%, rgba(250,250,114,1) 40%, rgba(255,255,192,1) 100%);
`,
  ground: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(110,73,31,1) 0%, rgba(168,112,45,1) 40%, rgba(255,221,180,1) 100%);
`,
  rock: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(72,25,11,1) 0%, rgba(139,62,34,1) 40%, rgba(255,230,220,1) 100%);
`,
  psychic: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(165,42,108,1) 0%, rgba(247,29,146,1) 40%, rgba(255,209,234,1) 100%);
`,
  ice: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(134,210,245,1) 0%, rgba(216,240,250,1) 40%, rgba(255,255,255,1) 100%);
`,
  bug: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(28,75,39,1) 0%, rgba(60,153,80,1) 40%, rgba(194,255,207,1) 100%);
`,
  ghost: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(51,51,107,1) 0%, rgba(144,103,145,1) 40%, rgba(254,205,255,1) 100%);
`,
  steel: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(96,117,110,1) 0%, rgba(67,189,148,1) 40%, rgba(201,255,237,1) 100%);
`,
  dragon: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(42,95,103,1) 0%, rgba(98,202,217,1) 40%, rgba(199,248,255,1) 100%);
`,
  dark: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(4,7,7,1) 0%, rgba(89,89,120,1) 40%, rgba(212,212,255,1) 100%);
`,
  fairy: css`
  color: #fff;
  background: linear-gradient(90deg, rgba(150,26,69,1) 0%, rgba(233,19,104,1) 40%, rgba(255,197,220,1) 100%);
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
  gap: 30px;
  padding: 30px 0;
  &:hover{
    animation: pokemon-up .3s;
  }
}

.ul {
  list-style-type: none;
}

.cartao-pokemon {
  box-shadow: #6b727a 0px 7px 29px 0px;
  border-radius: 10px;


 .cartao-topo {
  ${props => RESOLVE_STYLE[props.background]}
  padding: 10px 40px 0;
  border-radius: 10px;
}

 .none {
  margin-bottom: 5px;
}

 .tipo {
  ${props => RESOLVE_STYLE[props.background]}
  font-size: 12px;
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
  height: 110px;
  padding-left: 50px;
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

 .buttons{
  	 gap: 10px;
    .pokebola{
      &:hover{
        color: #000;
      }
    }
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

