## ALTERNATE SOLUTIONS

### Solution 1
```js
function pairElement(str) {
  // Function to match each character with the base pair
  const matchWithBasePair = function(char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };

  // Find pair for every character in the string
  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    pairs.push(matchWithBasePair(str[i]));
  }

  return pairs;
}

// test here
pairElement("GCG");
```

### Code Explanation
- Inside of the `matchWithBasePair` function, a switch is used to cover all possible characters.  Using if statements is another option.
- Create an empty array and use the `matchWithBasePair` function to push the right values to the array and return them.


### REFERNCE LINKS
- [Switch Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)



### Solution 2
```js
function pairElement(str) {
  // create object for pair lookup
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // map character to array of character and matching pair
  return str
    .split("")
    .map(x => [x, pairs[x]]);
}

// test here
pairElement("GCG");
```

### Code Explanation
- First define an object with all pair possibilities, this allows us to easily find by key or value.
- Split `str` into a characters array so we cna use each letter to find its pair.
- Use the map function to map each character in the array of individual characters to an array with the character and its matching pair, creating a 2D array.

### REFERENCE LINKS
- [`Array.prototype.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

