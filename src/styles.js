import Background  from './assets/background.jpg';
import { styled, createGlobalStyle } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    font-family: "Pacifico", serif;
    background-image: url(${Background});
    background-size: 100%;
    padding: 0 20px;
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: #333;
    text-align: center;
`;

export const Text = styled.p`
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    max-width: 600px;
    text-align: center;
    margin-bottom: 20px;
`;

export const Total = styled.h3`
    font-size: 1.5rem;
    color: #d81974;
    font-weight: bold;
`;

export const ContainerTarefas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    font-family: "Pacifico", serif;
    background-color: #d81974;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #790c3c;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    align-items: center;
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 1rem;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ddd;
    outline: none;
    transition: border-color 0.3s;
    font-family: "Pacifico", serif;
    margin-bottom: 10px;

    &:focus {
        border-color: #790c3c;
    }

    &::placeholder {
        color: #bbb;
    }
`;
