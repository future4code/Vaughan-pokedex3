import styled from "styled-components";

export const ContainerHome = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 20px;
    margin-bottom: 20px;

@media screen and (max-width: 912px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;
    margin-bottom: 20px;

@media screen and (max-width: 820px) {
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
`