const headline = document.querySelector('h1');
const resultBox = document.querySelector('#resultBox');
const backdrop = document.querySelector('#backdrop');
const text = document.querySelector('h2');
const input = document.querySelector('textarea');

// regex for including any of the following : `{, }, (, ), [, ]`
const regex = /{|}|\(|\)|\[|\]/;

//matchBrackets logic
const matchBrackets = function(string) {
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (let i = 0; i < string.length; i++) {
    // If character is an opening brace add it to a stack
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      stack.push(string[i]);
    } else if (string[i] === ')' || string[i] === '}' || string[i] === ']') {
      let lastCh = stack.pop();
      if (string[i] !== map[lastCh]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}; //big O(n) <- linear to the size of the passed string

//textbox event listener
input.addEventListener('keyup', e => {
  event.stopPropagation();
  //if the string the input is empty
  if (input.value.length === 0) {
    headline.innerText = `Text goes here`;

    input.className = '';
    resultBox.classList.add('neutral');

  // if there are no parentheses
  } else if (input.value) {
    if (!regex.test(input.value)) {
      headline.innerText = `No brakets🤔`;

      resultBox.className = '';
      input.className = '';

      resultBox.classList.add('neutral');
    //if parentheses pass the test
    } else if (matchBrackets(input.value)) {
      headline.innerText = 'PASS 😃';

      input.className = '';
      resultBox.className = '';

      input.classList.add('pass');
      resultBox.classList.add('pass');
    // if parentheses fail
    } else {
      headline.innerText = 'FAIL 😞';

      input.className = '';
      resultBox.className = '';

      input.classList.add('fail');
      resultBox.classList.add('fail');
    }
  }
});

//cliboard api for examples
document.querySelectorAll('.example').forEach(element => {
  element.addEventListener('click', () => {
    if (!navigator.clipboard) {
      console.log(`navigator.clipboard is undefined`);
      return;
    }
    navigator.clipboard.writeText(element.textContent.trim(''));
  });
});

//infobar
resultBox.addEventListener('click', () => {
  alert(`You can paste any javascript code snippet into a text-area input,
and be notified whether or not the code has matching parenthesis. 

Or just type in some brackets and have fun! `);
});


//ascii art
console.log(`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`);
console.log(`MMMMMMMMMWNX WMMMMMMMMMMMMWXX  MMMMMMMMM`);
console.log(`MMMMMMW0o:'.,OMMMMMMMMMMMMO,.':o0WMMMMMM`);
console.log(`MMMMMXo.   .:0MMMMMMMMMMMM0:.   .oNMMMMM`);
console.log(`MMMMWd.  .lKWMMMMMMMMMMMMMMWKl.  .dWMMMM`);
console.log(`MMMMX:   ,KMMMMMMMMMMMMMMMMMMK,   :NMMMM`);
console.log(`MMMMX;   ;XMMMMMMMMMMMMMMMMMMX;   ;XMMMM`);
console.log(`MMMM0'   cNMMMMMMMMMMMMMMMMMMNc   '0MMMM`);
console.log(`MNOd;   .kWMMMM BRACKETS MMMMWk.   ;dONM`);
console.log(`M0,    .dWMMMMMMMMMMMMMMMMMMMMWd.    ,0M`);
console.log(`MXd;.   ;0MMMMMMMMMMMMMMMMMMMM0;   .;dXM`);
console.log(`MMMWk.   lNMMMMMMMMMMMMMMMMMMNl   .kWMMM`);
console.log(`MMMMK,   ;XMMMMMMMMMMMMMMMMMMX;   ;KMMMM`);
console.log(`MMMMX;   ;KMMMMMMMMMMMMMMMMMMK;   ;XMMMM`);
console.log(`MMMMNl   .kWMMMMMMMMMMMMMMMMWk.   lWMMMM`);
console.log(`MMMMMK;   .:dXMMMMMMMMMMMMXd:.   ;KMMMMM`);
console.log(`MMMMMMXo,.  .kMMMMMMMMMMMMk.  .,dXMMMMMM`);
console.log(`MMMMMMMMNKOx MMMMMMMMMMMMXkx  NMMMMMMMMM`);
console.log(`MMMMMMMMMMMMMMMMMMMMMMMMMM by   AD'20 MM`);
console.log(`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`);
