import styled from "styled-components";

export const ContainerHome = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
display: grid;
grid-template-columns: repeat(1, 1fr);
}

@media screen and (min-device-width : 481px) and (max-device-width : 1000px) {
display: grid;
grid-template-columns: repeat(1, 1fr);
}

@media screen and (min-device-width : 1200px) {
display: grid;
grid-template-columns: repeat(4, 1fr);   
}
`