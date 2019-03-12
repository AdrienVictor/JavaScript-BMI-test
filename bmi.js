const bmi = [
  {
    text: 'Calculate your BMI. Remember that this result is only indicative!',
    src: './assets/default.jpg'
  },
  {
    text: 'Normal weight: BMI is 18.5 to 24.9',
    src: './assets/normal.jpg',
    color: 'green'
  },
  {
    text: 'Underweight: BMI is less than 18.5',
    src: './assets/underweight.jpg',
    color: 'yellow'
  },
  {
    text: 'Overweight: BMI is 25 to 29.9',
    src: './assets/overweight.jpg',
    color: 'purple'
  },
  {
    text: 'Obese: BMI is 30 or more',
    src: './assets/obese.jpg',
    color: 'rgba(255,0,0,0.5)'
  }
];
const bmiTest = document.querySelector('.bmi-test');
const mass = document.querySelector('.mass');
const height = document.querySelector('.height');
const bmiInputs = document.querySelector('.bmi-inputs');
const values = document.querySelector('.values');
const infoText = bmi
  .slice(1)
  .map(item => `<li style='color:${item.color}'>${item.text}</li>`)
  .join('');
values.innerHTML = `<ul>${infoText}</ul>`;

let image = document.querySelector('.image');
let result = document.querySelector('.result');
defautProfile();

function defautProfile() {
  result.style.background = 'rgb(255, 255, 240)';
  result.textContent = bmi[0].text;
}
function normalWeight() {
  image.setAttribute('src', bmi[1].src);
  result.style.background = 'green';
  result.textContent = `Your BMI is: ${bmiResult}. ${bmi[1].text}`;
}
function underweight() {
  image.setAttribute('src', bmi[2].src);
  result.style.background = 'yellow';
  result.textContent = `Your BMI is: ${bmiResult}. ${bmi[2].text}`;
}
function overweight() {
  image.setAttribute('src', bmi[3].src);
  result.style.background = 'purple';
  result.textContent = `Your BMI is: ${bmiResult}. ${bmi[3].text}`;
}
function obese() {
  image.setAttribute('src', bmi[4].src);
  result.style.background = 'rgba(255,0,0,0.5)';
  result.textContent = `Your BMI is: ${bmiResult}. ${bmi[4].text}`;
}

bmiInputs.addEventListener('submit', function() {
  event.preventDefault();
  bmiResult = (mass.value / (height.value * height.value)).toFixed(2);
  console.log(typeof height.value);

  switch (true) {
    case mass.value === 0 || height.value === 0:
      result.textContent =
        'make sure you provide your weight in kg and your height in meter';
      break;
    case bmiResult < 18.5:
      underweight();
      break;
    case bmiResult >= 18.5 && bmiResult <= 24.9:
      normalWeight();
      break;
    case bmiResult >= 25 && bmiResult <= 29.9:
      overweight();
      break;
    case bmiResult >= 30:
      obese();
      break;
    default:
      result.textContent =
        'Please provide your weight in kg and your height in meter';
      break;
  }
});
