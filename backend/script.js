let bancoDePets = JSON.parse(localStorage.getItem('meusPetsSalvos')) || [];

// Salva o Array no Local Storage
function salvarNoArray() {
    localStorage.setItem('meusPetsSalvos', JSON.stringify(bancoDePets));
}

// CREATE
function criarPet(novoPet) {
    bancoDePets.push(novoPet);
    salvarNoArray();
}

// READ
function lerPets() {
    return bancoDePets;
}

// UPDATE
function atualizarPet(index, petAtualizado) {
    bancoDePets[index] = petAtualizado;
    salvarNoArray();
}

// DELETE
function deletarPet(index) {
    bancoDePets.splice(index, 1);
    salvarNoArray();
}