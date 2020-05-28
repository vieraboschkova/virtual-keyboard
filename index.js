/* CREATE MAIN ELEMENTS */

const heading = document.createElement('h1');
heading.className = 'main-heading';
heading.innerText = 'VIRTUAL KEYBOARD';

const languageHeading = document.createElement('h3');
languageHeading.className = 'language-heading';
languageHeading.innerText = 'EN';

const languageSwitch = document.createElement('button');
languageSwitch.id = 'language-switch';
languageSwitch.className = 'description';
languageSwitch.innerText = 'click HERE or press v+k to switch languages EN / PT (BR)';

const clearButton = document.createElement('button');
clearButton.className = 'description';
clearButton.innerText = 'click HERE to clear the text area';

const page = document.createElement('div');
page.className = 'main-container';
const textArea = document.createElement('textarea');
textArea.className = 'text-area';
textArea.name = 'textarea';
/* textArea.innerText = ''; */
const keyboardDiv = document.createElement('div');
keyboardDiv.className = 'keyboard-container';
keyboardDiv.status = 'en-lowercase-none';

page.appendChild(heading);
page.appendChild(languageHeading);
page.appendChild(languageSwitch);
page.appendChild(clearButton);
page.appendChild(textArea);
page.appendChild(keyboardDiv);
document.body.appendChild(page);

/* special keys
const specialKeys = ['Backspace', 'Tab', 'CapsLock', 'Enter',
'Shift', 'Control', 'Alt', 'AltGraph'];
*/
/* keyboard EN */
const keyboardKeysEnR1 = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const keyboardKeysEnR2 = [
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'];
const keyboardKeysEnR3 = [
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
const keyboardKeysEnR4 = [
  'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '↑', 'Shift'];
const keyboardKeysEnR5 = [
  'Control', 'Win', 'Alt', 'Space', 'AltGraph', 'Control', '←', '↓', '→'];

/* CapsLock keyboard en */

const keyboardKeysEnR1CapsLock = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const keyboardKeysEnR2CapsLock = [
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete'];
const keyboardKeysEnR3CapsLock = [
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'];
const keyboardKeysEnR4CapsLock = [
  'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '↑', 'Shift'];
const keyboardKeysEnR5CapsLock = [
  'Control', 'Win', 'Alt', 'Space', 'AltGraph', 'Control', '←', '↓', '→'];

/* Shift keyboard en */

const keyboardKeysEnR1Shift = [
  '~', '!', '#', '$', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
const keyboardKeysEnR2Shift = [
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete'];
const keyboardKeysEnR3Shift = [
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'];
const keyboardKeysEnR4Shift = [
  'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift'];
const keyboardKeysEnR5Shift = [
  'Control', 'Win', 'Alt', 'Space', 'AltGraph', 'Control', '←', '↓', '→'];

/* altgr EN ¡ ² ³ ¤ € ¼ ½ ¾ ‘ ’ ¥ ×
 ä å é ® þ ü ú í ó ö « »
  á ß ð           ø ¶ ´ ¬
   æ   ©     ñ µ ç   ¿ */

const keyboardKeysEnR1AltGr = [
  '', '¡', '²', '³', '¤', '€', '¼', '½', '¾', '‘', '’', '¥', '×', 'Backspace'];
const keyboardKeysEnR2AltGr = [
  'Tab', 'ä', 'å', 'é', '®', 'þ', 'ü', 'ú', 'í', 'ó', 'ö', '«', '»', '¬', 'Delete'];
const keyboardKeysEnR3AltGr = [
  'CapsLock', 'á', 'ß', 'ð', '', '', '', '', '', 'ø', '¶', '´', 'Enter'];
const keyboardKeysEnR4AltGr = [
  'Shift', '\\', 'æ', '', '©', '', '', 'ñ', 'µ', 'ç', '', '¿', '↑', 'Shift'];
const keyboardKeysEnR5AltGr = [
  'Control', 'Win', 'Alt', 'Space', 'AltGraph', 'Control', '←', '↓', '→'];

/* keyboard PT */
const keyboardKeysPTR1 = [
  '\'', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const keyboardKeysPTR2 = [
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '´', '[', ']', 'Delete'];
const keyboardKeysPTR3 = [
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', '~', 'Enter'];
const keyboardKeysPTR4 = [
  'Shift', '\'', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', ';', '↑', 'Shift'];
const keyboardKeysPTR5 = [
  'Control', 'Win', 'Alt', 'Space', 'AltGraph', 'Control', '←', '↓', '→'];

/* CapsLock keyboard pt */
const keyboardKeysPTR1CapsLock = [
  '\'', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const keyboardKeysPTR2CapsLock = [
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '´', '[', ']', 'Delete'];
const keyboardKeysPTR3CapsLock = [
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç', '~', 'Enter'];
const keyboardKeysPTR4CapsLock = [
  'Shift', '\'', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', ';', '↑', 'Shift'];
const keyboardKeysPTR5CapsLock = [
  'Control', 'Win', 'Alt', 'Space', 'AltGraph', 'Control', '←', '↓', '→'];

/* pt Shift!@#$%¨&*()_+}`{<>: */

const keyboardKeysPTR1Shift = [
  '"', '!', '@', '#', '$', '%', '¨', '&', '*', '(', ')', '_', '+', 'Backspace'];
const keyboardKeysPTR2Shift = [
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '`', '{', '}', 'Delete'];
const keyboardKeysPTR3Shift = [
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç', '^', 'Enter'];
const keyboardKeysPTR4Shift = [
  'Shift', '\'', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', ':', '↑', 'Shift'];
const keyboardKeysPTR5Shift = [
  'Control', 'Win', 'Alt', 'Space', 'AltGraph', 'Control', '←', '↓', '→'];

/* alt pt ¹²³£¢¬     § º/?°ª₢ */

const keyboardKeysPTR1Alt = [
  '', '¹', '²', '³', '£', '¢', '¬', '', '', '', '', '§', 'º', 'Backspace'];
const keyboardKeysPTR2Alt = [
  'Tab', '/', '?', '°', '', '', '', '', '', '', '', '', '', 'ª', 'Delete'];
const keyboardKeysPTR3Alt = [
  'CapsLock', '', '', '', '', '', '', '', '', '', '', '', 'Enter'];
const keyboardKeysPTR4Alt = [
  'Shift', '', '', '₢', '', '', '', '', '', '', '', '', '↑', 'Shift'];
const keyboardKeysPTR5Alt = [
  'Control', 'Win', 'Alt', 'Space', 'AltGraph', 'Control', '←', '↓', '→'];


/* keyboard keycodes */

let currentRow1 = [];
let currentRow2 = [];
let currentRow3 = [];
let currentRow4 = [];
let currentRow5 = [];

/* print function */
function updateCurrent(r1, r2, r3, r4, r5) {
  currentRow1 = r1;
  currentRow2 = r2;
  currentRow3 = r3;
  currentRow4 = r4;
  currentRow5 = r5;
  /* console.log(`${currentRow1}\n ${currentRow2}\n ${currentRow3}\n
  ${currentRow4}\n ${currentRow5}`); */
}

function virtualKeys() {
  /* console.log(`virtual prints ${this.innerText}`); */
  switch (this.innerText) {
    case 'Backspace':
      textArea.value = textArea.value.substring(0, textArea.value.length - 1);
      textArea.focus();
      break;
    case 'CapsLock':
      break;
    case 'Delete':

      break;
    case 'Enter':
      textArea.value += '\n';
      textArea.focus();
      break;
    case 'Tab':
      textArea.value += '\t';
      textArea.focus();
      break;
    case 'Shift':

      break;
    case 'AltGraph':
      /* event.AltGraph = true; */
      break;
    case 'Control':
      /* event.ControlKey = true; */
      break;
    case 'Win':
      break;
    case 'Alt':
      /* event.altKey = true; */
      break;
    case 'Space':
      textArea.value += ' ';
      textArea.focus();
      break;
    default:
      textArea.value += this.innerText;
      textArea.focus();
  }
}

/* create rows */

const rowLengths = [keyboardKeysEnR1.length, keyboardKeysEnR2.length, keyboardKeysEnR3.length,
  keyboardKeysEnR4.length, keyboardKeysEnR5.length];

function createKeyboardRows() {
  for (let i = 0; i < 5; i += 1) {
    const keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard-row';
    keyboardDiv.appendChild(keyboardRow);
    for (let j = 0; j < rowLengths[i]; j += 1) {
      const key = document.createElement('button');
      key.setAttribute('type', 'button');
      key.classList.add('keyboard-key');
      keyboardRow.appendChild(key);
      key.addEventListener('click', virtualKeys);
    }
    if (i === 0) {
      keyboardRow.lastChild.classList.add('keyboard-key-big');
      keyboardRow.lastChild.id = 'backspace';
    }
    if (i === 1) {
      keyboardRow.firstChild.classList.add('keyboard-key-big');
      keyboardRow.firstChild.id = 'tab';
      keyboardRow.lastChild.classList.add('keyboard-key-big');
      keyboardRow.lastChild.id = 'delete';
    }
    if (i === 2) {
      keyboardRow.firstChild.classList.add('keyboard-key-big');
      keyboardRow.firstChild.id = 'caps';
      keyboardRow.lastChild.classList.add('keyboard-key-big');
      keyboardRow.lastChild.id = 'Enter';
    }
    if (i === 3) {
      keyboardRow.firstChild.classList.add('keyboard-key-big');
      keyboardRow.firstChild.classList.add('shift');
      keyboardRow.firstChild.id = 'shift-l';
      keyboardRow.lastChild.classList.add('keyboard-key-arrows');
      keyboardRow.lastChild.classList.add('shift');
      keyboardRow.lastChild.id = 'shift-r';
    }
    if (i === 4) {
      const bottomRow = keyboardRow.childNodes;
      bottomRow[3].classList.add('keyboard-key-extra-big');
      bottomRow[3].id = 'space';
      bottomRow[0].classList.add('control');
      bottomRow[1].id = 'win';
      bottomRow[2].classList.add('alt');
      bottomRow[2].id = 'alt-l';
      bottomRow[4].classList.add('alt');
      bottomRow[4].id = 'alt-r';
      bottomRow[5].classList.add('control');
    }
  }
}

const rows = keyboardDiv.childNodes;

function fillRows(r1, r2, r3, r4, r5) {
  const row1Buttons = rows[0].childNodes;
  const row2Buttons = rows[1].childNodes;
  const row3Buttons = rows[2].childNodes;
  const row4Buttons = rows[3].childNodes;
  const row5Buttons = rows[4].childNodes;
  for (let i = 0; i < r1.length; i += 1) {
    row1Buttons[i].innerText = r1[i];
  }
  for (let i = 0; i < r2.length; i += 1) {
    row2Buttons[i].innerText = r2[i];
  }
  for (let i = 0; i < r3.length; i += 1) {
    row3Buttons[i].innerText = r3[i];
  }
  for (let i = 0; i < r4.length; i += 1) {
    row4Buttons[i].innerText = r4[i];
  }
  for (let i = 0; i < r5.length; i += 1) {
    row5Buttons[i].innerText = r5[i];
  }
  updateCurrent(r1, r2, r3, r4, r5);
}

/* fill rows - start creating - reload */

createKeyboardRows();
function startKeyboards() {
  fillRows(keyboardKeysEnR1, keyboardKeysEnR2,
    keyboardKeysEnR3, keyboardKeysEnR4, keyboardKeysEnR5);
  sessionStorage.languageHeading = 'EN';
  languageHeading.innerText = 'EN';
}

if (!sessionStorage.getItem('languageHeading')) {
  startKeyboards();
  /* console.log(sessionStorage); */
} else {
  const lang = sessionStorage.getItem('languageHeading');
  if (lang === 'EN') {
    fillRows(keyboardKeysEnR1, keyboardKeysEnR2,
      keyboardKeysEnR3, keyboardKeysEnR4, keyboardKeysEnR5);
    /* console.log(sessionStorage); */
  } else if (lang === 'PT') {
    languageHeading.innerText = 'PT';
    fillRows(keyboardKeysPTR1, keyboardKeysPTR2,
      keyboardKeysPTR3, keyboardKeysPTR4, keyboardKeysPTR5);
    /* console.log(sessionStorage); */
  }
}

textArea.focus();

/* add events */

const caps = document.getElementById('caps');
const altR = document.getElementById('alt-r');
const shifts = document.getElementsByClassName('shift');

/* change language */


function changeLanguage() {
  if (languageHeading.innerText === 'EN') {
    languageHeading.innerText = 'PT';
    sessionStorage.languageHeading = 'PT';
    /* console.log(sessionStorage); */
    fillRows(keyboardKeysPTR1, keyboardKeysPTR2,
      keyboardKeysPTR3, keyboardKeysPTR4, keyboardKeysPTR5);
    if (caps.classList.contains('button-on')) {
      caps.classList.remove('button-on');
    }
  } else {
    languageHeading.innerText = 'EN';
    sessionStorage.languageHeading = 'EN';
    /* console.log(sessionStorage); */
    fillRows(keyboardKeysEnR1, keyboardKeysEnR2,
      keyboardKeysEnR3, keyboardKeysEnR4, keyboardKeysEnR5);
    if (caps.classList.contains('button-on')) {
      caps.classList.remove('button-on');
    }
  }
}

const keysPressed = {};

document.addEventListener('keydown', (event) => {
  keysPressed[event.key] = true;
  /* console.log(event.key, keysPressed); */
  if (keysPressed.v && event.key === 'k') {
    changeLanguage();
  }
});

document.addEventListener('keyup', (event) => {
  delete keysPressed[event.key];
});

languageSwitch.addEventListener('click', changeLanguage);

/* clear button */

clearButton.addEventListener('click', () => {
  textArea.value = '';
  textArea.focus();
});

/* CapsLock */
function deactivate(button) {
  if (button.classList.contains('button-on')) {
    button.classList.remove('button-on');
    /*  console.log(`${button} not active`); */
  }
}

function deactivateCaps() {
  deactivate(caps);
}

function deactivateShiftL() {
  deactivate(shifts[0]);
}

function deactivateShiftR() {
  deactivate(shifts[1]);
}

function deactivateAltG() {
  deactivate(altR);
}

function capsing() {
  deactivateShiftL();
  deactivateShiftR();
  deactivateAltG();
  /* console.log('CapsLocking'); */
  if (languageHeading.innerText === 'EN') {
    if (keyboardDiv.status !== 'en-caps') {
      keyboardDiv.status = 'en-caps';
      fillRows(keyboardKeysEnR1CapsLock, keyboardKeysEnR2CapsLock,
        keyboardKeysEnR3CapsLock, keyboardKeysEnR4CapsLock,
        keyboardKeysEnR5CapsLock);
    } else if (keyboardDiv.status === 'en-caps') {
      keyboardDiv.status = 'en-none';
      fillRows(keyboardKeysEnR1, keyboardKeysEnR2, keyboardKeysEnR3,
        keyboardKeysEnR4, keyboardKeysEnR5);
    } /* else {
      keyboardDiv.status = 'en-lowercase-none';
      fillRows(keyboardKeysEnR1, keyboardKeysEnR2, keyboardKeysEnR3,
        keyboardKeysEnR4, keyboardKeysEnR5);
    } */
  } else if (languageHeading.innerText === 'PT') {
    if (keyboardDiv.status !== 'pt-caps') {
      keyboardDiv.status = 'pt-caps';
      fillRows(keyboardKeysPTR1CapsLock, keyboardKeysPTR2CapsLock,
        keyboardKeysPTR3CapsLock, keyboardKeysPTR4CapsLock, keyboardKeysPTR5CapsLock);
    } else {
      keyboardDiv.status = 'pt-none';
      fillRows(keyboardKeysPTR1, keyboardKeysPTR2, keyboardKeysPTR3,
        keyboardKeysPTR4, keyboardKeysPTR5);
    } /* else {
      keyboardDiv.status = 'pt-none';
      fillRows(keyboardKeysPTR1, keyboardKeysPTR2, keyboardKeysPTR3,
        keyboardKeysPTR4, keyboardKeysPTR5);
    } */
  }
  textArea.focus();
}

function capsActiveToggle() {
  if (caps.classList) {
    caps.classList.toggle('button-on');
    /* console.log('active/not active'); */
  }
}

caps.addEventListener('click', capsing);

caps.addEventListener('click', capsActiveToggle);

/* alt */


altR.addEventListener('click', () => {
  deactivateShiftL();
  deactivateShiftR();
  deactivateCaps();
  /* console.log('alting'); */
  if (languageHeading.innerText === 'EN') {
    if (keyboardDiv.status !== 'en-alt') {
      keyboardDiv.status = 'en-alt';
      fillRows(keyboardKeysEnR1AltGr, keyboardKeysEnR2AltGr,
        keyboardKeysEnR3AltGr, keyboardKeysEnR4AltGr, keyboardKeysEnR5AltGr);
    } else {
      keyboardDiv.status = 'en-none';
      fillRows(keyboardKeysEnR1, keyboardKeysEnR2, keyboardKeysEnR3,
        keyboardKeysEnR4, keyboardKeysEnR5);
    }
  } else if (keyboardDiv.status !== 'pt-alt') {
    keyboardDiv.status = 'pt-alt';
    fillRows(keyboardKeysPTR1Alt, keyboardKeysPTR2Alt,
      keyboardKeysPTR3Alt, keyboardKeysPTR4Alt, keyboardKeysPTR5Alt);
  } else {
    keyboardDiv.status = 'pt-none';
    fillRows(keyboardKeysPTR1, keyboardKeysPTR2, keyboardKeysPTR3,
      keyboardKeysPTR4, keyboardKeysPTR5);
  }
  textArea.focus();
});

altR.addEventListener('click', () => {
  if (altR.classList) {
    altR.classList.toggle('button-on');
    /* console.log('active/not active'); */
  }
});


/* shift */

function shifting() {
  deactivateCaps();
  deactivateAltG();
  /* console.log('shifting'); */
  if (languageHeading.innerText === 'EN') {
    if (keyboardDiv.status !== 'en-shift') {
      keyboardDiv.status = 'en-shift';
      fillRows(keyboardKeysEnR1Shift, keyboardKeysEnR2Shift,
        keyboardKeysEnR3Shift, keyboardKeysEnR4Shift, keyboardKeysEnR5Shift);
    } else {
      keyboardDiv.status = 'en-none';
      fillRows(keyboardKeysEnR1, keyboardKeysEnR2,
        keyboardKeysEnR3, keyboardKeysEnR4, keyboardKeysEnR5);
    }
  } else if (keyboardDiv.status !== 'pt-shift') {
    keyboardDiv.status = 'pt-shift';
    fillRows(keyboardKeysPTR1Shift, keyboardKeysPTR2Shift,
      keyboardKeysPTR3Shift, keyboardKeysPTR4Shift, keyboardKeysPTR5Shift);
  } else {
    keyboardDiv.status = 'pt-none';
    fillRows(keyboardKeysPTR1, keyboardKeysPTR2,
      keyboardKeysPTR3, keyboardKeysPTR4, keyboardKeysPTR5);
  }
  textArea.focus();
}


for (let i = 0; i < 2; i += 1) {
  const currentShift = shifts[i];
  currentShift.addEventListener('click', shifting);
}

function shiftActive() {
  if (shifts[0].classList) {
    /* console.log('shift active'); */
    shifts[0].classList.toggle('button-on');
  }
  if (shifts[1].classList) {
    /* console.log('shift active'); */
    shifts[1].classList.toggle('button-on');
  }
}

for (let i = 0; i < 2; i += 1) {
  const currentShift = shifts[i];
  currentShift.addEventListener('click', shiftActive);
}

/* del */

const del = document.getElementById('delete');

del.addEventListener('click', () => {
  const cursorPosition = textArea.selectionStart;
  const left = textArea.value.slice(0, cursorPosition);
  const right = textArea.value.slice(cursorPosition);
  /* console.log(left, right); */
  textArea.value = left.concat(right.slice(1));
  textArea.selectionStart = cursorPosition;
  textArea.focus();
});

/* Control TODO */


/* win  TODO */


/* alt-l  TODO */


/* highlight keyboard input */

function highlightKeyboard(event) {
  let buttonIndex = 0;
  const row1Buttons = rows[0].childNodes;
  const row2Buttons = rows[1].childNodes;
  const row3Buttons = rows[2].childNodes;
  const row4Buttons = rows[3].childNodes;
  const row5Buttons = rows[4].childNodes;

  if (event.key === 'Control') {
    /* console.log('it was ctrl'); */
    if (event.code === 'ControlRight') {
      row5Buttons[5].classList.toggle('button-on');
    } else { row5Buttons[0].classList.toggle('button-on'); }
  } else if (event.key === 'Delete') {
    /* console.log('it was del'); */
    row2Buttons[14].classList.toggle('button-on');
  } else if (event.key === 'Alt') {
    /* console.log('it was alt l'); */
    row5Buttons[2].classList.toggle('button-on');
  } else if (event.key === ' ') {
    /* console.log('it was space'); */
    row5Buttons[3].classList.toggle('button-on');
  } else if (event.key === 'AltGraph') {
    /* console.log('it was altGraph'); */
    row5Buttons[4].classList.toggle('button-on');
  } else if (event.key === 'ArrowUp') {
    /* console.log('it was arrowup'); */
    row4Buttons[12].classList.toggle('button-on');
  } else if (event.key === 'ArrowLeft') {
    /* console.log('it was arrowl'); */
    row5Buttons[6].classList.toggle('button-on');
  } else if (event.key === 'ArrowDown') {
    /* console.log('it was arrowd'); */
    row5Buttons[7].classList.toggle('button-on');
  } else if (event.key === 'ArrowRight') {
    /* console.log('it was arrowr'); */
    row5Buttons[8].classList.toggle('button-on');
  } else if (event.key === 'Shift') {
    /* console.log('it was shift'); */
    shifting();
    shiftActive();
  } else if (event.key === 'CapsLock') {
    /* console.log('it was caps'); */
    capsing();
    capsActiveToggle();
  } else if (event.key === 'Enter') {
    /* console.log('it was enter'); */
    row3Buttons[12].classList.toggle('button-on');
  } else if (currentRow1.includes(event.key)) {
    /* console.log(`real keyboard prints in row 1 ${event.key}`); */
    buttonIndex = currentRow1.indexOf(event.key);
    /* console.log(`this is index ${buttonIndex}`); */
    row1Buttons[buttonIndex].classList.toggle('button-on');
  } else if (currentRow2.includes(event.key) || currentRow2.includes(event.key.toLowerCase())) {
    /* console.log(`real keyboard prints in row 2 ${event.key}`); */
    buttonIndex = currentRow2.indexOf(event.key.toLowerCase());
    /* console.log(`this is index ${buttonIndex}`); */
    row2Buttons[buttonIndex].classList.toggle('button-on');
  } else if (currentRow3.includes(event.key) || currentRow3.includes(event.key.toLowerCase())) {
    /* console.log(`real keyboard prints in row 3 ${event.key}`); */
    buttonIndex = currentRow3.indexOf(event.key.toLowerCase());
    /* console.log(`this is index ${buttonIndex}`); */
    row3Buttons[buttonIndex].classList.toggle('button-on');
  } else if (currentRow4.includes(event.key) || currentRow4.includes(event.key.toLowerCase())) {
    /* console.log(`real keyboard prints in row 4 ${event.key}`); */
    buttonIndex = currentRow4.indexOf(event.key.toLowerCase());
    /* console.log(`this is index ${buttonIndex}`); */
    row4Buttons[buttonIndex].classList.toggle('button-on');
  } else if (currentRow5.includes('Win')) {
    /* console.log('it was win'); */
    row5Buttons[1].classList.toggle('button-on');
  }
}

function keyboardOff(event) {
  let buttonIndex = 0;
  const row1Buttons = rows[0].childNodes;
  const row2Buttons = rows[1].childNodes;
  const row3Buttons = rows[2].childNodes;
  const row4Buttons = rows[3].childNodes;
  const row5Buttons = rows[4].childNodes;

  if (event.key === 'Control') {
    /* console.log('it was ctrl'); */
    if (event.code === 'ControlRight') {
      row5Buttons[5].classList.toggle('button-on');
    } else { row5Buttons[0].classList.toggle('button-on'); }
  } else if (event.key === 'Delete') {
    /* console.log('it was del'); */
    row2Buttons[14].classList.toggle('button-on');
  } else if (event.key === 'Alt') {
    /* console.log('it was alt l'); */
    row5Buttons[2].classList.toggle('button-on');
  } else if (event.key === ' ') {
    /* console.log('it was space'); */
    row5Buttons[3].classList.toggle('button-on');
  } else if (event.key === 'AltGraph') {
    /* console.log('it was altGraph'); */
    /* row5Buttons[4].classList.toggle('button-on'); */
  } else if (event.key === 'ArrowUp') {
    /* console.log('it was arrowup'); */
    row4Buttons[12].classList.toggle('button-on');
  } else if (event.key === 'ArrowLeft') {
    /* console.log('it was arrowl'); */
    row5Buttons[6].classList.toggle('button-on');
  } else if (event.key === 'ArrowDown') {
    /* console.log('it was arrowd'); */
    row5Buttons[7].classList.toggle('button-on');
  } else if (event.key === 'ArrowRight') {
    /* console.log('it was arrowr'); */
    row5Buttons[8].classList.toggle('button-on');
  } else if (event.key === 'Shift') {
    /* console.log('it was shift'); */
    /* if (event.code === 'ShiftLeft') {
      row4Buttons[0].classList.toggle('button-on');
    } else { row4Buttons[13].classList.toggle('button-on'); } */
  } else if (event.key === 'CapsLock') {
    /* console.log('it was caps'); */
    /* capsing();
    capsActiveToggle(); */
  } else if (event.key === 'Enter') {
    /* console.log('it was enter'); */
    row3Buttons[12].classList.toggle('button-on');
  } else if (currentRow1.includes(event.key)) {
    /* console.log(`real keyboard prints in row 1 ${event.key}`); */
    buttonIndex = currentRow1.indexOf(event.key);
    /* console.log(`this is index ${buttonIndex}`); */
    row1Buttons[buttonIndex].classList.toggle('button-on');
  } else if (currentRow2.includes(event.key) || currentRow2.includes(event.key.toLowerCase())) {
    /* console.log(`real keyboard prints in row 2 ${event.key}`); */
    buttonIndex = currentRow2.indexOf(event.key.toLowerCase());
    /* console.log(`this is index ${buttonIndex}`); */
    row2Buttons[buttonIndex].classList.toggle('button-on');
  } else if (currentRow3.includes(event.key) || currentRow3.includes(event.key.toLowerCase())) {
    /* console.log(`real keyboard prints in row 3 ${event.key}`); */
    buttonIndex = currentRow3.indexOf(event.key.toLowerCase());
    /* console.log(`this is index ${buttonIndex}`); */
    row3Buttons[buttonIndex].classList.toggle('button-on');
  } else if (currentRow4.includes(event.key) || currentRow4.includes(event.key.toLowerCase())) {
    /* console.log(`real keyboard prints in row 4 ${event.key}`); */
    buttonIndex = currentRow4.indexOf(event.key.toLowerCase());
    /* console.log(`this is index ${buttonIndex}`); */
    row4Buttons[buttonIndex].classList.toggle('button-on');
  } else if (currentRow5.includes('Win')) {
    /* console.log('it was win'); */
    row5Buttons[1].classList.toggle('button-on');
  }
}

document.addEventListener('keydown', highlightKeyboard);
document.addEventListener('keyup', keyboardOff);
