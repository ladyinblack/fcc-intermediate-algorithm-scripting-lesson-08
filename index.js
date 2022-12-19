// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>DNA Pairing</h1>`;

/**
 * Pairs of DNA stands consist of nucleobase pairs.  Base pairs are represented by the characters `AT` and `CG`, which form building blocks of the DNA double helix.
 *
 * The DNA strand is missing the pairing element.  Write a function to match the missing base pairs for the provided DNA strand.  For each character in the providing string, find the base pair character.  Return the results as a 2d array.
 *
 * For example, for the input GCG, return [["G", "C"], ["C", "G"], ["G", "C"]].
 *
 * The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 *
 */

function pairElement(str) {
  let newStr = str.split('');
  let dnaStr = [];
  for (let i = 0; i < newStr.length; i++) {
    switch (newStr[i]) {
      case 'A':
        dnaStr.push(new Array(newStr[i], 'T'));
        break;
      case 'T':
        dnaStr.push(new Array(newStr[i], 'A'));
        break;
      case 'C':
        dnaStr.push(new Array(newStr[i], 'G'));
        break;
      case 'G':
        dnaStr.push(new Array(newStr[i], 'C'));
        break;
    }
  }
  return dnaStr;
}

console.log(pairElement('GCG'));
console.log(pairElement('ATCGA'));
console.log(pairElement('TTGAG'));
console.log(pairElement('CTCTA'));
