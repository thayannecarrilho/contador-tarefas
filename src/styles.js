import Background1  from './assets/background1.jpg';
import Background2 from './assets/background2.jpg'
import { styled, createGlobalStyle } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Pacifico", serif;
    @media (max-width: 500px) {
        flex-direction: column; 
    }
`;



export const Title = styled.div`
    font-size: 2rem;
    color: #333;
    text-align: center;
`;

export const Text = styled.div`
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    max-width: 600px;
    text-align: center;
`;

export const Total = styled.p`
    font-size: 1.5rem;
    color: #d81974;
`;

export const ContainerTarefas1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;
    width: 100%;    
    height: 100%;
    background-size: 100%;
    background-image: url(${Background1});
`;
export const ContainerTarefas2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-image: url(${Background2});
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
