const opcoespets = document.getElementById("vacina-pet");
const listaVacinasRender = document.getElementById('listaVacinasRender');
const formvacina = document.getElementById("formCadastroVacina");

const meusPetsCadastrados = lerPets();

opcoespets.innerHTML = '<option value="">Selecione o pet</option>';
meusPetsCadastrados.forEach(function (pet) {
    opcoespets.innerHTML += `<option value="${pet.name}">${pet.name}</option>`;
});


let vacinacao = JSON.parse(localStorage.getItem('minhasVacinasSalvas')) || [];

function renderizarVacinas() {
    listaVacinasRender.innerHTML = '';

    listaVacinasRender.innerHTML = `
        <div class="card-adicionar shadow-sm" data-bs-toggle="modal" data-bs-target="#modalVacina">
            <i class="bi bi-file-plus fs-1 text-primary mb-2"></i>
            <span class="fw-bold text-muted">Registar Nova Vacina</span>
        </div>
    `;

    vacinacao.forEach(function (vacina, index) {
        const cardHTML = `
            <div class="card p-3 shadow-sm card-interativo border-0" style="border-left: 5px solid var(--cor-secundaria) !important;">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h5 class="fw-bold text-dark mb-0">${vacina.vacinaName}</h5>
                    
                    <button class="btn btn-outline-danger btn-sm border-0" onclick="deletarVacina(${index})">
                        <i class="bi bi-trash-fill fs-5"></i>
                    </button>
                </div>
                <p class="text-muted mb-1"><i class="bi bi-calendar-event me-2"></i>Data: ${vacina.vacinaDate}</p>
                <p class="text-muted mb-0"><i class="bi bi-hearts text-danger me-2"></i>Pet: <strong>${vacina.petVacinado}</strong></p>
            </div>
        `;
        listaVacinasRender.insertAdjacentHTML('beforeend', cardHTML);
    });
}

formvacina.addEventListener("submit", function (e) {
    e.preventDefault();

    const novavacinacao = {
        vacinaName: document.getElementById("vacina-name").value,
        vacinaDate: document.getElementById("vacina-date").value,
        petVacinado: document.getElementById("vacina-pet").value
    };

    vacinacao.push(novavacinacao);
    localStorage.setItem('minhasVacinasSalvas', JSON.stringify(vacinacao));

    formvacina.reset();
    renderizarVacinas();

    const modalElement = document.getElementById('modalVacina');
    const modalInstancia = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    modalInstancia.hide();
});

window.deletarVacina = function (index) {
    if (confirm("Tem a certeza que deseja apagar o registo desta vacina?")) {
        vacinacao.splice(index, 1);
        localStorage.setItem('minhasVacinasSalvas', JSON.stringify(vacinacao));
        renderizarVacinas();
    }
};

renderizarVacinas();