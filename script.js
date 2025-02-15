const form = document.querySelector('form');
const rates = document.querySelector('.rates');
const ratingPage = document.querySelector('.rating-page');
const thankMessagePage = document.querySelector('.thank-message-page');
const selectedRate = document.querySelector('.selected-rate>span');



const removeSelected = (e) => {
  for (const rate of rates.children) {
    rate.classList.remove('selected');
  }
  e.target.classList.add('selected');
};


for (const rate of rates.children) {
  rate.addEventListener('click', removeSelected);
};

const switchPages = () => {
  if (rates.querySelector('.selected')) {
    if (ratingPage.classList.contains('hidden')) {
      ratingPage.classList.remove('hidden');
      thankMessagePage.classList.add('hidden');
    } else {
      ratingPage.classList.add('hidden');
      thankMessagePage.classList.remove('hidden');
    }
  }
};


form.addEventListener('submit', (e) => {
  e.preventDefault();
  switchPages();
  const selectedRateInput = rates.querySelector('.selected');
  selectedRate.textContent = selectedRateInput.value;
  selectedRateInput.classList.remove('selected');
});