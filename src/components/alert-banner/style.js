import styled from "styled-components/native";

const Container = styled.View`
    width: 80%;
    border: 1px solid black;
    border-radius: 12px;
    padding: 14px;
    border-color: blue;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

const Description = styled.Text`
    font-size: 16px;
    color: blue;
`

export { Container, Description }