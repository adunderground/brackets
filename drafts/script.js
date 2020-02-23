const headline = document.querySelector('h1');
const resultBox = document.querySelector('#resultBox');
const backdrop = document.querySelector('#backdrop');
const text = document.querySelector('h2');
const input = document.querySelector('textarea');

// regex for including any of the following : `{, }, (, ), [, ]`
const regex = /{|}|\(|\)|\[|\]/;

let isMatchingBrackets = function(string) {
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
    }
    //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
    else if (string[i] === ')' || string[i] === '}' || string[i] === ']') {
      let last = stack.pop();

      //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
      if (string[i] !== map[last]) {
        return false;
      }
    }
  }
  // By the completion of the for loop after checking all the brackets of the string, at the end, if the stack is not empty then fail
  if (stack.length !== 0) {
    return false;
  }
  return true;
};

input.addEventListener('keyup', e => {
  event.stopPropagation();

  if (input.value) {
    if (!regex.test(input.value)) {
      headline.innerText = `No brakets🤔`;

      resultBox.classList.remove('pass');
      resultBox.classList.remove('fail');
      input.classList.remove('pass');
      input.classList.remove('fail');

      resultBox.classList.add('neutral');
    } else if (isMatchingBrackets(input.value)) {
      headline.innerText = 'PASS 😃';

      input.classList.remove('fail');
      resultBox.classList.remove('fail');
      input.classList.remove('neutral');
      resultBox.classList.remove('neutral');

      input.classList.add('pass');
      resultBox.classList.add('pass');
    } else {
      headline.innerText = 'FAIL 😞';

      input.classList.remove('neutral');
      resultBox.classList.remove('neutral');

      input.classList.remove('pass');
      resultBox.classList.remove('pass');

      input.classList.add('fail');
      resultBox.classList.add('fail');
    }
  }
});

document.querySelectorAll('.example').forEach(element => {
  element.addEventListener('click', () => {
    if (!navigator.clipboard) {
      console.log(`navigator.clipboard is undefined`);
      return;
    }
    navigator.clipboard.writeText(element.textContent);
  });
});

resultBox.addEventListener('click', () => {
  alert(`You can paste any javascript code snippet into a text-area input,
and be notified whether or not the code has matching parenthesis. 
Or just paste in some brackets! `);
});


console.log(`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`);
console.log(`MMMMMMMMMWNX WMMMMMMMMMMMMWXX  MMMMMMMMM`);
console.log(`MMMMMMW0o:'.,OMMMMMMMMMMMMO,.':o0WMMMMMM`);
console.log(`MMMMMXo.   .:0MMMMMMMMMMMM0:.   .oNMMMMM`);
console.log(`MMMMWd.  .lKWMMMMMMMMMMMMMMWKl.  .dWMMMM`);
console.log(`MMMMX:   ,KMMMMMMMMMMMMMMMMMMK,   :NMMMM`);
console.log(`MMMMX;   ;XMMMMMMMMMMMMMMMMMMX;   ;XMMMM`);
console.log(`MMMM0'   cNMMMMMMMMMMMMMMMMMMNc   '0MMMM`);
console.log(`MNOd;   .kWMMMMMMMMMMMMMMMMMMWk.   ;dONM`);
console.log(`M0,    .dWMMMMMMMMMMMMMMMMMMMMWd.    ,0M`);
console.log(`MXd;.   ;0MMMMMMMMMMMMMMMMMMMM0;   .;dXM`);
console.log(`MMMWk.   lNMMMMMMMMMMMMMMMMMMNl   .kWMMM`);
console.log(`MMMMK,   ;XMMMMMMMMMMMMMMMMMMX;   ;KMMMM`);
console.log(`MMMMX;   ;KMMMMMMMMMMMMMMMMMMK;   ;XMMMM`);
console.log(`MMMMNl   .kWMMMMMMMMMMMMMMMMWk.   lWMMMM`);
console.log(`MMMMMK;   .:dXMMMMMMMMMMMMXd:.   ;KMMMMM`);
console.log(`MMMMMMXo,.  .kMMMMMMMMMMMMk.  .,dXMMMMMM`);
console.log(`MMMMMMMMNKOx MMMMMMMMMMMMXkx  NMMMMMMMM`);
console.log(`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM AD'20 MM`);
console.log(`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`);

//BACKDROP + MODAL
// const toggleBackdrop = () => {
//   backdrop.classList.toggle('visible');
// };

// resultBox.addEventListener('click', () => {
//   toggleBackdrop();
// });

// backdrop.addEventListener('click', () => {
//   toggleBackdrop();
// });

// document.body.addEventListener('keypress', () => {
//   backdrop.classList.remove('visible');
// });
