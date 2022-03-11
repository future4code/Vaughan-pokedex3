import styled from "styled-components";

export const PageContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  overflow-y: scroll;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`
export const PokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
  justify-content: space-between;
  background-color: aquamarine;
  border: 1px solid lightgray;
  width: 80%;
  border-radius: 5px;
  box-shadow: 0px 4px 10px lightgray;
  overflow: hidden;
  img {
    height: 300px;
    position: relative;
    margin-bottom: -50px;
    margin-top: -50px;
  }
`
export const DetalhesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  width: 100%;
  background-color: white;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`
export const TiposContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`
export const Tipo = styled.div`
  font-size: 18px;
  background-color: white;
  opacity: 0.7;
  border-radius: 15px;
  padding: 2px 10px;
`
export const DetalhesHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .index {
    margin: 15px;
    border: 1px solid gray;
    background-color: white;
    padding: 3px;
    border-radius: 10px;
    font-weight: 500;
    opacity: 60%;
    box-shadow: 0px 1px 4px gray;
  }
`
export const StatusContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-top: 50px;
  h3 {
    width: 100%;
    color: gray;
    border-bottom: 2px solid gray;
    margin-bottom: 10px;
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
  margin-top: 50px;
  width: 40%;
  h3 {
    color: gray;
    border-bottom: 2px solid gray;
    margin-bottom: 10px;
  }
  p {
    margin: 2px 10px;
    font-weight: 500;
    border-bottom: 1px solid whitesmoke;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin-top: 5px;
  }
`
