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