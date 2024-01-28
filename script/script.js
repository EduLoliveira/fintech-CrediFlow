let gastos = '5200,00';
const escutoCLICK = document.getElementById('eyesClick');
const moneyAccount = document.getElementById('moneyCount');


escutoCLICK.addEventListener('click', () => {
    if (moneyAccount.classList.contains('moneyAccount')) {
        escutoCLICK.innerHTML = '<i class="fa-solid fa-eye eyes"></i>';
        moneyAccount.innerHTML = `<span class="moneyAccount--active">${gastos}</span>`;
        moneyAccount.classList.remove('moneyAccount');
        moneyAccount.classList.add('moneyAccount--active'); 
    } else {
        escutoCLICK.innerHTML = '<i class="fa-solid fa-eye-slash eyes"></i>';
        moneyAccount.innerHTML = '';
        moneyAccount.classList.add('moneyAccount');
        moneyAccount.classList.remove('moneyAccount--active');
    }
});
