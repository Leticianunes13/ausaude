let indexEditando = -1;
const formcadastro = document.getElementById('formCadastroPet');
const listaPetsRender = document.querySelector('.grid-cards');

function renderizarPets() {
    listaPetsRender.innerHTML = '';

    const meusPets = lerPets();

    meusPets.forEach(function (pet, index) {
        const cardHTML = `
            <div class="card-interativo fade-in d-flex flex-column h-100">
                <img src="${pet.img}" alt="Fotografia de ${pet.name}" class="img-fluid" style="height: 200px; object-fit: cover; border-top-left-radius: 20px; border-top-right-radius: 20px;">
                
                <div class="p-4 d-flex flex-column flex-grow-1">
                    <h3 class="h5 fw-bold mb-3" style="color: var(--cor-primaria);">${pet.name}</h3>
                    
                    <p class="mb-1 text-muted"><strong>Espécie:</strong> ${pet.species}</p>
                    <p class="mb-1 text-muted"><strong>Raça:</strong> ${pet.breed}</p>
                    <p class="mb-1 text-muted"><strong>Cor:</strong> ${pet.color}</p>
                    <p class="mb-1 text-muted"><strong>Ano:</strong> ${pet.year}</p>
                    <p class="mb-3 text-muted"><strong>Gênero:</strong> ${pet.gender}</p>
                    
                    <div class="mt-auto pt-3 border-top d-flex gap-2">
                        <button class="btn btn-outline-primary btn-sm border-0 flex-grow-1" onclick="prepararEdicao(${index})">
                            <i class="bi bi-pencil-fill"></i> Editar
                        </button>
                        <button class="btn btn-outline-danger btn-sm border-0 flex-grow-1" onclick="apagarPet(${index})">
                            <i class="bi bi-trash-fill"></i> Apagar
                        </button>
                    </div>
                </div>
            </div>
        `;
        listaPetsRender.insertAdjacentHTML('beforeend', cardHTML);
    });
}

formcadastro.addEventListener('submit', function (e) {
    e.preventDefault();

    const petSpecies = document.getElementById('pet-species').value;

    // Define a imagem estática consoante a espécie
    const petImgPlaceholder = petSpecies === 'Gato'
        ? 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400&auto=format&fit=crop'
        : 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=400&auto=format&fit=crop';

    const petDados = {
        name: document.getElementById('pet-name').value,
        species: petSpecies,
        breed: document.getElementById('pet-breed').value,
        color: document.getElementById('pet-color').value,
        year: document.getElementById('pet-year').value,
        gender: document.getElementById('pet-gender').value,
        img: petImgPlaceholder
    };

    if (indexEditando === -1) {
        criarPet(petDados);
    } else {
        atualizarPet(indexEditando, petDados);

        indexEditando = -1;
        document.querySelector('#formCadastroPet button[type="submit"]').textContent = "Cadastrar Pet";
    }


    formcadastro.reset();
    renderizarPets();
});


window.prepararEdicao = function (index) {
    const meusPets = lerPets();
    const pet = meusPets[index];

    document.getElementById('pet-name').value = pet.name;
    document.getElementById('pet-species').value = pet.species;
    document.getElementById('pet-breed').value = pet.breed;
    document.getElementById('pet-color').value = pet.color;
    document.getElementById('pet-year').value = pet.year;
    document.getElementById('pet-gender').value = pet.gender;

    indexEditando = index;

    document.querySelector('#formCadastroPet button[type="submit"]').textContent = "Guardar Alterações";

    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.apagarPet = function (index) {
    if (confirm("Tem a certeza que deseja apagar o registo deste pet?")) {
        deletarPet(index);
        renderizarPets();
    }
};

renderizarPets();