import styled from "styled-components";

export const ContainerHome = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 20px;
    margin-bottom: 20px;

@media screen and (max-width: 1400px) {
display: grid;
grid-template-columns: repeat(4, 1fr);
margin-top: 20px;
margin-bottom: 20px;


@media screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;
    margin-bottom: 20px;



@media screen and (max-width: 858px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
    margin-bottom: 20px;


@media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 20px;
    margin-bottom: 20px;

}
}
}
}

`
export const ContainerPagina = styled.div`
display: flex;
justify-content: center;
width: 100%;
padding-bottom: 10px;
`