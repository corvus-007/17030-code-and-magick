'use strict';

var setupDialog = document.querySelector('.setup');
setupDialog.classList.remove('hidden');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var similarListElement = setupDialog.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var i = null;

var wizards = [{
  name: 'Кристоф Вальц',
  coatColor: 'rgb(101, 137, 164)',
  eyesColor: 'black'
}, {
  name: 'Люпита Топольницкая',
  coatColor: 'rgb(241, 43, 107)',
  eyesColor: 'red'
}, {
  name: 'Вашингтон Ирвинг',
  coatColor: 'rgb(146, 100, 161)',
  eyesColor: 'blue'
}, {
  name: 'Иван да Марья',
  coatColor: 'rgb(215, 210, 55)',
  eyesColor: 'green'
}];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

for (i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
