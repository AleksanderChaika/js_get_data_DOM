'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((el) => {
  const num = Number(el.textContent.replace(/,/g, ''));

  return isNaN(num) ? 0 : num;
});

const total = populations.reduce((sum, num) => sum + num, 0);
const average = total / populations.length;

const formatter = new Intl.NumberFormat('en-US');

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = formatter.format(total);
averageSpan.textContent = formatter.format(average);
