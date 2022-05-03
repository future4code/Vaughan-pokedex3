import styled, { css } from "styled-components";
import { Box } from "@chakra-ui/react";

export const RESOLVE_STYLE = {
  normal: css`
  background: linear-gradient(90deg, rgba(189,162,170,1) 40%, rgba(227,208,213,1) 100%);
  `,
  fire: css`
  background: linear-gradient(90deg, rgba(255,97,102,1) 40%, rgba(255,190,193,1) 100%);
  `,
  water: css`
  background: linear-gradient(90deg, rgba(60,118,255,1) 40%, rgba(175,199,255,1) 100%);
`,
  grass: css`
  background: linear-gradient(90deg, rgba(58,255,108,1) 40%, rgba(162,255,186,1) 100%);
  `,
  flying: css`
  background: linear-gradient(90deg, rgba(155,186,208,1) 40%, rgba(213,237,255,1) 100%);
 `,
  fighting: css`
  background: linear-gradient(90deg, rgba(255,135,100,1) 40%, rgba(255,203,188,1) 100%);
`,
  poison: css`
  background: linear-gradient(90deg, rgba(203,162,255,1) 40%, rgba(234,217,255,1) 100%);
`,
  electric: css`
  background: linear-gradient(90deg, rgba(250,250,114,1) 40%, rgba(255,255,183,1) 100%);
`,
  ground: css`
  background: linear-gradient(90deg, rgba(166,129,85,1) 40%, rgba(255,226,192,1) 100%);
`,
  rock: css`
  background: linear-gradient(90deg, rgba(113,69,55,1) 40%, rgba(215,165,149,1) 100%);
`,
  psychic: css`
  background: linear-gradient(90deg, rgba(255,125,195,1) 40%, rgba(255,197,228,1) 100%);
`,
  ice: css`
  background: linear-gradient(90deg, rgba(134,210,245,1) 40%, rgba(214,242,255,1) 100%);
`,
  bug: css`
  background: linear-gradient(90deg, rgba(126,255,154,1) 40%, rgba(194,255,207,1) 100%);
`,
  ghost: css`
  background: linear-gradient(90deg, rgba(211,139,213,1) 40%, rgba(254,208,255,1) 100%);
`,
  steel: css`
  background: linear-gradient(90deg, rgba(95,219,178,1) 40%, rgba(198,255,236,1) 100%);
`,
  dragon: css`
  background: linear-gradient(90deg, rgba(98,202,217,1) 40%, rgba(185,246,255,1) 100%);
`,
  dark: css`
  background: linear-gradient(90deg, rgba(106,106,126,1) 40%, rgba(216,216,222,1) 100%);
`,
  fairy: css`
  background: linear-gradient(90deg, rgba(255,75,147,1) 40%, rgba(255,197,228,1) 100%);
`,
}

export const PageContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
@media screen and (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
@media screen and (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`
export const PokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
  justify-content: space-between;
  ${props => RESOLVE_STYLE[props.background]}
  border: 1px solid lightgray;
  width: 70%;
  border-radius: 10px;
  box-shadow: 0px 4px 10px lightgray;
  overflow: hidden;
  img {
    height: 270px;
    position: relative;
    margin-bottom: -80px;
    margin-top: -80px;
  }
@media screen and (max-width: 700px) {
    flex-direction: column;
    width: 90%;
    img {
      height: 190px;
    }
  }
`
export const AtaqueMovesContainer = styled.div`
  display: flex;
  gap: 100px;
  flex-direction: row;
  justify-content: space-between;
@media screen and (max-width: 700px) {
    flex-direction: column;
  }
`
export const DetalhesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #F4F4F4;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`
export const DetalhesHeader = styled.div`
  width: 100%;
  margin-right: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
@media screen and (max-width: 700px) {
    width: 90%;
    margin-top: 5px;
    padding-bottom: 50px;
}
`
export const TiposContainer = styled.div`
  font-weight: 700;
  width: 100%;
  display: flex;
  margin-bottom: 5px;
  margin-top: 25px;
  margin-left: 40px;
@media screen and (max-width: 700px) {
    margin-top: 15px;
  }
`
export const Tipo = styled.div`
 ${props => RESOLVE_STYLE[props.background]}
  font-weight: 700;
  font-size: 15px;
  border: 1px solid #484848;
  opacity: 0.7;
  border-radius: 10px;
  padding: 2px 8px;
@media screen and (max-width: 700px) {
  font-size: 15px;
}
`
export const Status = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
@media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 0;
}
`
export const StatusContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 10px;
  h1 {
    width: 100%;
    color: #1cb500;
    border-bottom: 2px solid black;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 0;
  }
  .sword {
    transform: rotate(180deg);
  }
  .statsContainer {
    display: flex;
    flex-direction: row;
    div {
      margin: 5px 10px;
      @media screen and (max-width: 856px) {
        margin: 0 10px;
        flex-direction: column;

    }
      p {
        display: flex;
        align-items: center;
        margin: 5px;
        b {
          margin: 0 3px;
        }
      }
    }
    @media screen and (max-width: 856px) {
      flex-direction: column;
    }
  }
`
export const MovesContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 40%;
  h1 {
    width: 100%;
    color: #1cb500;
    border-bottom: 2px solid black;
    margin-bottom: 10px;
  }
  p {
    margin: 2px 5px;
    font-weight: 500;
    border-bottom: 1px solid #D3D3D3;
  }
  @media screen and (max-width: 700px) {
    width: 75%;
    margin-top: 5px;
    padding-bottom: 20px;
  }
`
export const BoxMoves = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 7.5px;
`