
const formulario = document.getElementById("form-tarefas");
const entrada = document.getElementById("entrada-tarefa");
const lista = document.getElementById("lista-tarefas");

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();

  const texto = entrada.value.trim();

  if (texto === "") {
    return;
  }

  const tarefa = document.createElement("li");
  const descricao = document.createElement("span");
  const concluir = document.createElement("button");
  const excluir = document.createElement("button");

  descricao.textContent = texto;
  concluir.textContent = "Concluir";
  excluir.textContent = "Excluir";

  concluir.addEventListener("click", function() {
    descricao.classList.toggle("concluida");
  });

  excluir.addEventListener("click", function() {
    tarefa.remove();
  });

  tarefa.appendChild(descricao);
  tarefa.appendChild(concluir);
  tarefa.appendChild(excluir);

  lista.appendChild(tarefa);

  entrada.value = "";
  entrada.focus();
});
  
