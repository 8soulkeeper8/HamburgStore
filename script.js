function buttonClick(elem) {
    elem.value = 'new888';
}


// wallet change script
const currencySelector = document.getElementById("currency");
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");

// сохраняем выбранную валюту в localStorage
function handleCurrencyChange() {
  const selectedCurrency = currencySelector.value;
  localStorage.setItem('selectedCurrency', selectedCurrency);

  if (selectedCurrency === "USD") {
    item1.innerHTML = 'Double Drive Burger <p><del>10$</del> 8.50$</p>';
    item2.innerHTML = 'Chicago Classic <p><del>7$</del> 5$</p>';
    item3.innerHTML = 'Hawaii Royal <p><del>4.50$</del> 3$</p>';
  } else if (selectedCurrency === "RUB") {
    item1.innerHTML = 'Double Drive Burger <p><del>754 ₽</del> 641 ₽</p>';
    item2.innerHTML = 'Chicago Classic <p><del>528 ₽</del> 377 ₽</p>';
    item3.innerHTML = 'Hawaii Royal <p><del>339 ₽</del> 226 ₽</p>';
  } else if (selectedCurrency === "EUR") {
    item1.innerHTML = 'Double Drive Burger <p><del>9,4 €</del> 8 €</p>';
    item2.innerHTML = 'Chicago Classic <p><del>6.6 €</del> 4,7 €</p>';
    item3.innerHTML = 'Hawaii Royal <p><del>4.2 €</del> 2,8 €</p>';
  } else if (selectedCurrency === "JPY") {
    item1.innerHTML = 'Double Drive Burger <p><del>1358¥</del> 1154 ¥</p>';
    item2.innerHTML = 'Chicago Classic <p><del>951 ¥</del> 679 ¥</p>';
    item3.innerHTML = 'Hawaii Royal <p><del>611 ¥</del> 407 ¥</p>';
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
