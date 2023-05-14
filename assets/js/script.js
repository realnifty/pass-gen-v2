const PWInput = document.querySelector('#password');
const UpperCheck = document.querySelector('#uppercase');
const LowerCheck = document.querySelector('#lowercase');
const NumCheck = document.querySelector('#numbers');
const SymbolCheck = document.querySelector('#symbols');
const PWLength = document.querySelector('#passlength');
const PWLengthValue = document.querySelector('#pass-value');
const GenerateBtn = document.querySelector('#genpass');

const UppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const Numbers = '0123456789';
const Symbols = '!@#$%^&*()_+=-';

function setCharacterCount() {
  const characterCount = PWInput.value.length;
  PWLength.textContent = characterCount;
  console.log(characterCount);
  return characterCount;
};


PWInput.addEventListener('input', setCharacterCount);
PWLengthValue.addEventListener('change', setSliderCharacterCount);
