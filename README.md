# fcc-intermediate-algorithm-scripting-lesson-08

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-v4r6jn)

## PROBLEM EXPLANATION
- You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs.  Keep in mind that the provided strand should be first always.
- Another way to interpret the problem: there are four potential characters that exist in DNA: "A", "T", "G", and "C".  "A" and "T" are always paired together, and "G" and "C" are always paired together.

This problem presents you with an input, e.g. "ATCGA".  Each of those five characters are missing their pairs.

E.g. the first character "A" needs to be paired with "T" to give the array element ["A", "T"].

The second character "T" needs to be paired with "A" to give the array element ["T", "A"].

The number of elements in the final output equals the number of characters in the input.

This problem does not invole rearranging the input into different combinations or permutations.

### REFERENCE LINKS
- [`Array.push()`](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
- [`String.split()`](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)

## HINTS
### Hint 1
- There are two pairs of values, A-T and C-G.

### Hint 2
- A switch would be a natural option here, because each character in the string has 4 possible values.

### Hint 3
- The result must be an array of arrays.

