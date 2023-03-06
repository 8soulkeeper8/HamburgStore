function buttonClick(elem) {
    elem.value = 'Promo: new888';
}


// wallet change script
const currencySelector = document.getElementById("currency");
const item1 = document.getElementById("salecard1");
const item2 = document.getElementById("salecard2");
const item3 = document.getElementById("salecard3");
const item4 = document.getElementById("salecard4");

// сохраняем выбранную валюту в localStorage
function handleCurrencyChange() {
  const selectedCurrency = currencySelector.value;
  localStorage.setItem('selectedCurrency', selectedCurrency);

  if (selectedCurrency === "USD") {
    item1.innerHTML = '15$';
    item2.innerHTML = '13$';
    item3.innerHTML = '9$';
    item4.innerHTML = '25$';
  } else if (selectedCurrency === "RUB") {
    item1.innerHTML = 'Double Drive Burger <p><del>754 ₽</del> 641 ₽</p>';
    item2.innerHTML = 'Chicago Classic <p><del>528 ₽</del> 377 ₽</p>';
    item3.innerHTML = 'Hawaii Royal <p><del>339 ₽</del> 226 ₽</p>';
    item4.innerHTML = '222';
  } else if (selectedCurrency === "EUR") {
    item1.innerHTML = 'Double Drive Burger <p><del>9,4 €</del> 8 €</p>';
    item2.innerHTML = 'Chicago Classic <p><del>6.6 €</del> 4,7 €</p>';
    item3.innerHTML = 'Hawaii Royal <p><del>4.2 €</del> 2,8 €</p>';
    item4.innerHTML = '222';
  } else if (selectedCurrency === "JPY") {
    item1.innerHTML = 'Double Drive Burger <p><del>1358¥</del> 1154 ¥</p>';
    item2.innerHTML = 'Chicago Classic <p><del>951 ¥</del> 679 ¥</p>';
    item3.innerHTML = 'Hawaii Royal <p><del>611 ¥</del> 407 ¥</p>';
    item4.innerHTML = '222';
  }
}

currencySelector.addEventListener("change", handleCurrencyChange);

// загружаем выбранную валюту из localStorage
document.addEventListener('DOMContentLoaded', function() {
  const selectedCurrency = localStorage.getItem('selectedCurrency');
  if (selectedCurrency !== null) {
    currencySelector.value = selectedCurrency;
    handleCurrencyChange();
  }
});


