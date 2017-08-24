'use strict';

(function () {
  var init = function () {
    var WIZARD_MOCK_DATA = {
      names: [
        'Иван',
        'Хуан Себастьян',
        'Мария',
        'Кристоф',
        'Виктор',
        'Юлия',
        'Люпита',
        'Вашингтон'
      ],
      surnames: [
        'да Марья',
        'Верон',
        'Мирабелла',
        'Вальц',
        'Онопко',
        'Топольницкая',
        'Нионго',
        'Ирвинг'
      ],
      coatColors: [
        'rgb(101, 137, 164)',
        'rgb(241, 43, 107)',
        'rgb(146, 100, 161)',
        'rgb(56, 159, 117)',
        'rgb(215, 210, 55)',
        'rgb(0, 0, 0)'
      ],
      eyesColors: [
        'black',
        'red',
        'blue',
        'yellow',
        'green'
      ],
      fireballColors: [
        '#ee4830',
        '#30a8ee',
        '#5ce6c0',
        '#e848d5',
        '#e6e848'
      ]
    };
    var WIZARDS_COUNT = 4;
    var KEYCODES = {
      enter: 13,
      esc: 27
    };
    var setupDialog = document.querySelector('.setup');
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = setupDialog.querySelector('.setup-close');
    var setupForm = setupDialog.querySelector('.setup-wizard-form');
    var inputUserName = setupDialog.querySelector('.setup-user-name');
    var inputCoatColor = setupDialog.querySelector('[name="coat-color"]');
    var inputEyesColor = setupDialog.querySelector('[name="eyes-color"]');
    var inputFireballColor = setupDialog.querySelector('[name="fireball-color"]');
    var similarListElement = setupDialog.querySelector('.setup-similar-list');
    var wizards = createWizardsArray(WIZARD_MOCK_DATA, WIZARDS_COUNT);

    var onSetupDialogEscPress = function (event) {
      if (event.keyCode === KEYCODES.esc) {
        closeSetupDialog();
      }
    };

    var openSetupDialog = function () {
      setupDialog.classList.remove('hidden');
      document.addEventListener('keydown', onSetupDialogEscPress);
    };

    var closeSetupDialog = function () {
      setupDialog.classList.add('hidden');
      document.removeEventListener('keydown', onSetupDialogEscPress);
    };

    setupOpen.addEventListener('click', function () {
      openSetupDialog();
    });

    setupOpen.addEventListener('keydown', function (event) {
      if (event.keyCode === KEYCODES.enter) {
        openSetupDialog();
      }
    });

    setupClose.addEventListener('click', function () {
      closeSetupDialog();
    });

    setupClose.addEventListener('keydown', function (event) {
      if (event.keyCode === KEYCODES.enter) {
        closeSetupDialog();
      }
    });

    inputUserName.addEventListener('keydown', function (event) {
      if (event.keyCode === KEYCODES.esc) {
        event.stopPropagation();
      }
    });

    setupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      closeSetupDialog();
    });

    setupDialog.addEventListener('click', function (event) {
      var element = event.target;

      if (element.classList.contains('wizard-coat')) {
        inputCoatColor.value = getRandomItem(WIZARD_MOCK_DATA.coatColors);
        element.style.fill = inputCoatColor.value;
      } else if (element.classList.contains('wizard-eyes')) {
        inputEyesColor.value = getRandomItem(WIZARD_MOCK_DATA.eyesColors);
        element.style.fill = inputEyesColor.value;
      } else if (element.classList.contains('setup-fireball')) {
        inputFireballColor.value = getRandomItem(WIZARD_MOCK_DATA.fireballColors);
        element.parentElement.style.backgroundColor = inputFireballColor.value;
      }
    });

    similarListElement.appendChild(createWizards(wizards, WIZARDS_COUNT));
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
        name: getRandomItem(dataArray.names) + ' ' + getRandomItem(dataArray.surnames),
        coatColor: getRandomItem(dataArray.coatColors),
        eyesColor: getRandomItem(dataArray.eyesColors)
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
