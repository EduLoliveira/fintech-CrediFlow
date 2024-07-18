let click = document.querySelector('#click');

function showMoney() {
    let gastos = '5200,00';
    const moneyCount = document.querySelector('#moneyCount');
    moneyCount.classList.toggle('moneyAccount--active');
    if (moneyCount.classList.contains('moneyAccount--active')) {
        click.innerHTML = `<i class="fa-solid fa-eye eyes"></i>`;
        moneyCount.innerHTML = `<span>${gastos}</span>`;
        moneyCount.classList.remove('moneyAccount');
   } else { 
        click.innerHTML = `<i class="fa-solid fa-eye-slash eyes"></i>`;
        moneyCount.innerHTML = '';
        moneyCount.classList.add('moneyAccount');
    }
}   

// Supondo que o observer já esteja definido em algum lugar do seu código
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            setTimeout(() => {
                entry.target.classList.remove('hidden');
            }, 2000); // Remove a classe 'hidden' após 2 segundos
        } else {
            entry.target.classList.add('hidden');
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.sucessedChange');
function activingAllPage() {
    hiddenElements.forEach((el) => observer.observe(el));
}
activingAllPage();

function href() {
    window.location.href = 'formLogin.html';
}


// Função para mostrar ou esconder o conteúdo de refeição
const conteudoVR = document.getElementById('conteudoRefeicao');
const inputVR = document.getElementById('beneficioRef');
function showElement() {
    conteudoVR.style.display = inputVR.checked ? 'block' : 'none';
}


// Função para gerenciar elementos de transporte
const inputVT = document.getElementById('beneficioTrans');
const containerVT = document.getElementById('conteudoTransporte');

function gerenciarElemento() {
    if (inputVT.checked) {
        // Se estiver selecionado, cria um novo elemento <p> e adiciona ao container
        const novoElemento = document.createElement('small');
        novoElemento.textContent = 'Quantas conduções ate o local de serviço são gastas!?';
        novoElemento.classList.add('conteudoTexto');

        const novoInput = document.createElement('input');
        novoInput.type = 'number';
        novoInput.id = 'valueInputVT';
        novoInput.classList.add('conteudoInput');
        
        containerVT.appendChild(novoElemento);
        containerVT.appendChild(novoInput);
    } else {
        // Se não estiver selecionado, remove todos os elementos filhos do container
        while (containerVT.firstChild) {
            containerVT.removeChild(containerVT.firstChild);
        }
    }
}



function submitForm(){
    const valueVT = document.getElementById('valueInputVT').value;
    const valueVR = document.getElementById('contentInput').value;
    const valueSalario = document.getElementById('salario').value;
    console.log(valueSalario, valueVR, valueVT)
}