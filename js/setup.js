'use strict';

(function () {
  var init = function () {
    var WIZARD_MOCK_DATA = {
      NAMES: [
        'Иван',
        'Хуан Себастьян',
        'Мария',
        'Кристоф',
        'Виктор',
        'Юлия',
        'Люпита',
        'Вашингтон'
      ],
      SURNAMES: [
        'да Марья',
        'Верон',
        'Мирабелла',
        'Вальц',
        'Онопко',
        'Топольницкая',
        'Нионго',
        'Ирвинг'
      ],
      COAT_COLORS: [
        'rgb(101, 137, 164)',
        'rgb(241, 43, 107)',
        'rgb(146, 100, 161)',
        'rgb(56, 159, 117)',
        'rgb(215, 210, 55)',
        'rgb(0, 0, 0)'
      ],
      EYES_COLORS: [
        'black',
        'red',
        'blue',
        'yellow',
        'green'
      ]
    };
    var WIZARDS_COUNT = 4;
    var setupDialog = document.querySelector('.setup');
    var similarListElement = setupDialog.querySelector('.setup-similar-list');
    var wizards = createWizardsArray(WIZARD_MOCK_DATA, WIZARDS_COUNT);

    setupDialog.classList.remove('hidden');
    similarListElement.appendChild(createWizards(wizards, WIZARDS_COUNT));
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var getRandomFromRange = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  var getRandomItem = function (array) {
    return array[getRandomFromRange(0, array.length - 1)];
  };

  var createWizardsArray = function (dataArray, wizardsCount) {
    var arr = [];

    for (var i = 0; i < wizardsCount; i++) {
      arr.push({
        name: getRandomItem(dataArray.NAMES) + ' ' + getRandomItem(dataArray.SURNAMES),
        coatColor: getRandomItem(dataArray.COAT_COLORS),
        eyesColor: getRandomItem(dataArray.EYES_COLORS)
      });
    }

    return arr;
  };

  var createWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var createWizards = function (wizardsArray, wizardsCount) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizardsCount; i++) {
      fragment.appendChild(createWizard(wizardsArray[i]));
    }

    return fragment;
  };

  init();
})();
