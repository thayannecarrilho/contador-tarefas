import { TarefaContainer, TarefaNome, RemoverButton } from './styles';

function Tarefa(props) {
    return (
        <TarefaContainer>
            <TarefaNome>{props.nome}</TarefaNome>
            <RemoverButton onClick={() => props.removerTarefa(props.id)}>Remover</RemoverButton>
        </TarefaContainer>
    );
}

export default Tarefa;
