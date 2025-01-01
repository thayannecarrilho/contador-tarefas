import { useState } from "react";
import Tarefa from './components/Tarefa'
import {Container, Title, Text, Total, ContainerTarefas1, ContainerTarefas2, Button, InputWrapper, Input} from './styles'

function App() {
  // Estado para armazenar as tarefas
  const [tarefa, setTarefa] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  // Função para adicionar tarefas
  const adicionarTarefa = () => {
    if (novaTarefa.trim() === '') return; // Não permite tarefa vazia
    const novaTarefaObjeto = { id: Date.now(), nome: novaTarefa }; // Cria uma nova tarefa
    setTarefa([...tarefa, novaTarefaObjeto]); // Atualiza a lista de tarefas
    setNovaTarefa(''); // Limpa o campo de entrada
  };

  // Função para remover tarefas
  const removerTarefa = (id) => {
    const tarefasFiltradas = tarefa.filter((tarefa) => tarefa.id !== id);
    setTarefa(tarefasFiltradas); // Atualiza lista após remoção
  };

  return (
    <Container>
      <ContainerTarefas1>
        <Title>Contador de Tarefas</Title>
        <Total>Total de tarefas: {tarefa.length}</Total>
        <InputWrapper>
        <Input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Adicione uma nova tarefa"
        />
        <Button onClick={adicionarTarefa}>Adicionar</Button>
      </InputWrapper>
      </ContainerTarefas1>    

      <ContainerTarefas2>
        
        {tarefa.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            id={tarefa.id}
            nome={tarefa.nome}
            removerTarefa={removerTarefa}
          />
        ))}
      </ContainerTarefas2>
    </Container>
  );
}

export default App;
