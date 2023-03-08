function buttonClick(elem) {
    elem.value = 'Promo: new888';
}


// wallet change script
const currencySelector = document.getElementById("currency");
const item1 = document.getElementById("price1");
const item2 = document.getElementById("price2");
const item3 = document.getElementById("price3");
const item4 = document.getElementById("price4");
const item5 = document.getElementById("price5");
const item6 = document.getElementById("price6");
const item7 = document.getElementById("price7");
const item8 = document.getElementById("price8");
const item9 = document.getElementById("price9");
const item10 = document.getElementById("price10");
const item11 = document.getElementById("price11");
const item12 = document.getElementById("price12");


// сохраняем выбранную валюту в localStorage
function handleCurrencyChange() {
  const selectedCurrency = currencySelector.value;
  localStorage.setItem('selectedCurrency', selectedCurrency);

  if (selectedCurrency === "USD") {
    item1.innerHTML = 5 + "$";
    item2.innerHTML = 1 + "$";
    item3.innerHTML = 1.6 + "$";
    item4.innerHTML = 2.4 + "$";
    item5.innerHTML = 3.4 + "$";
    item6.innerHTML = 4 + "$";
    item7.innerHTML = 0.8 + "$";
    item8.innerHTML = 4.6 + "$";
    item9.innerHTML = 4.8 + "$";
    item10.innerHTML = 1.4 + "$";
    item11.innerHTML = 5.4 + "$";
    item12.innerHTML = 1.2 + "$";
  } else if (selectedCurrency === "RUB") {
    item1.innerHTML = (5*75).toFixed(2) + "₽";
    item2.innerHTML = (1*75).toFixed(2) + "₽";
    item3.innerHTML = (1.6*75).toFixed(2) + "₽";
    item4.innerHTML = (2.4*75).toFixed(2) + "₽";
    item5.innerHTML = (3.4*75).toFixed(2) + "₽";
    item6.innerHTML = (4*75).toFixed(2) + "₽";
    item7.innerHTML = (0.8*75).toFixed(2) + "₽";
    item8.innerHTML = (4.6*75).toFixed(2) + "₽";
    item9.innerHTML = (4.8*75).toFixed(2) + "₽";
    item10.innerHTML = (1.4*75).toFixed(2) + "₽";
    item11.innerHTML = (5.4*75).toFixed(2) + "₽";
    item12.innerHTML = (1.2*75).toFixed(2) + "₽";
  } else if (selectedCurrency === "EUR") {
    item1.innerHTML = (5*0.94).toFixed(2) + "€";
    item2.innerHTML = (1*0.94).toFixed(2) + "€";
    item3.innerHTML = (1.6*0.94).toFixed(2) + "€";
    item4.innerHTML = (2.4*0.94).toFixed(2) + "€";
    item5.innerHTML = (3.4*0.94).toFixed(2) + "€";
    item6.innerHTML = (4*0.94).toFixed(2) + "€";
    item7.innerHTML = (0.8*0.94).toFixed(2) + "€";
    item8.innerHTML = (4.6*0.94).toFixed(2) + "€";
    item9.innerHTML = (4.8*0.94).toFixed(2) + "€";
    item10.innerHTML = (1.4*0.94).toFixed(2) + "€";
    item11.innerHTML = (5.4*0.94).toFixed(2) + "€";
    item12.innerHTML = (1.2*0.94).toFixed(2) + "€";
  } else if (selectedCurrency === "JPY") {
    item1.innerHTML = (5*137.82).toFixed(2) + "¥";
    item2.innerHTML = (1*137.82).toFixed(2) + "¥";
    item3.innerHTML = (1.6*137.82).toFixed(2) + "¥";
    item4.innerHTML = (2.4*137.82).toFixed(2) + "¥";
    item5.innerHTML = (3.4*137.82).toFixed(2) + "¥";
    item6.innerHTML = (4*137.82).toFixed(2) + "¥";
    item7.innerHTML = (0.8*137.82).toFixed(2) + "¥";
    item8.innerHTML = (4.6*137.82).toFixed(2) + "¥";
    item9.innerHTML = (4.8*137.82).toFixed(2) + "¥";
    item10.innerHTML = (1.4*137.82).toFixed(2) + "¥";
    item11.innerHTML = (5.4*137.82).toFixed(2) + "¥";
    item12.innerHTML = (1.2*137.82).toFixed(2) + "¥";
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


