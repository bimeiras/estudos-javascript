( () => {
    
    const createTask = (event) => {
    
    event.preventDefault()
    
    //Elemento <ul></ul>
    const list = document.querySelector('[data-list]');
    
    //Elemento <input />
    const input = document.querySelector('[data-form-input]');
     
    //Armazena o conteúdo do input em uma variável:
    const inputContent = input.value;

    //Criação do elemento <li class="task"></li> a partir da variável newTask
    const newTask = document.createElement('li');
    newTask.classList.add('task');

    //Conteúdo a ser inserido na <li></li>
    const newTaskContent = `<p class="content">${inputContent}</p>`;
    newTask.innerHTML = newTaskContent;
    newTask.appendChild(CheckButton());
    newTask.appendChild(DeleteButton());

    
    //Os elementos criados (<li><p></p></li>) serão incluídos como "filhos" do <ul></ul>
    list.appendChild(newTask);

    input.value= "";
}

const addButton = document.querySelector('[data-form-button]');

addButton.addEventListener('click', createTask);

const CheckButton = () => {
    //Criação do <button class='check-button'>Concluir</button>
    const checkButton = document.createElement('button');
    checkButton.innerText = 'concluir';
    checkButton.classList.add('check-button');

    //O elemento criado chamará uma função quando for acionado
    checkButton.addEventListener('click', checkTask);

    //Retorna o botão para poder ser acessado na outra função
    return checkButton
}

const DeleteButton = () => {

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'deletar';
    deleteButton.addEventListener('click', deleteTask);

    return deleteButton;
}

const checkTask = (event) => {
    //Identificação do elemento que foi clicado
    const checkButton = event.target;

    //Seleciona o <li></li> "pai" do button
    const doneTask = checkButton.parentElement;

    //Adiciona/remove classe 'done' (booleano true/false)
    doneTask.classList.toggle('done')
}

const deleteTask = (event) => {
    const deleteButton = event.target;

    const deletedTask = deleteButton.parentElement;

    deletedTask.remove();
}
})();