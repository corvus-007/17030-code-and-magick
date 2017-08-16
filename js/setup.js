'use strict';

var setupDialog = document.querySelector('.setup');
setupDialog.classList.remove('hidden');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var similarListElement = setupDialog.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var i = null;
var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var WIZARD_COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var WIZARD_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomRange = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

var createArrayWizards = function (countWizards) {
  var arr = [];
  var wizardObject = null;
  var wizardName = null;
  var wizardSurname = null;
  var wizardCoatColor = null;
  var wizardEyesColor = null;

  for (i = 0; i < countWizards; i++) {
    wizardObject = {};
    wizardName = WIZARD_NAMES[getRandomRange(0, WIZARD_NAMES.length - 1)];
    wizardSurname = WIZARD_SURNAMES[getRandomRange(0, WIZARD_SURNAMES.length - 1)];
    wizardCoatColor = WIZARD_COAT_COLORS[getRandomRange(0, WIZARD_COAT_COLORS.length - 1)];
    wizardEyesColor = WIZARD_EYES_COLORS[getRandomRange(0, WIZARD_EYES_COLORS.length - 1)];

    wizardObject.name = wizardName + ' ' + wizardSurname;
    wizardObject.coatColor = wizardCoatColor;
    wizardObject.eyesColor = wizardEyesColor;

    arr.push(wizardObject);
  }

  return arr;
};

var wizards = createArrayWizards(4);

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
