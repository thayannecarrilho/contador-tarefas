import styled from 'styled-components';

export const TarefaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid #ddd;
`;

export const TarefaNome = styled.span`
    font-size: 1rem;
    color: #333;
    flex: 1;
`;

export const RemoverButton = styled.button`
    padding: 6px 12px;
    font-size: 1rem;
    color: #fff;
    font-family: "Pacifico", serif;
    background-color:#111;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 10px;
    
    &:hover {
        background-color: #6b6c74; 
    }

    &:focus {
        outline: none;
    }
    
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;
