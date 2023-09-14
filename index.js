// question 1

const regexpGolf = (testStrings, regexes) => {
  console.log(regexes[0]);

  // Test each regular expression against test strings
  for (let i = 0; i < regexes.length; i++) {
    const regex = regexes[i];
    console.log(`Testing regex ${i + 1}: ${regex}`);

    //   perform operation on each test string to find their match
    for (const testString of testStrings) {
      const match = regex.test(testString);
      console.log(`  "${testString}" => ${match}`);
    }
  }
};
// Define test strings
const testStrings = [
  "I have a car and a cat.",
  "The pop music is playing.",
  "The ferry is crossing the river.",
  "The delicious cake is marvelous.",
  "This is a test, to check for whitespace.",
  "The elephant is a large animal.",
  "Example of a word without the letter E.",
];
// Define regular expressions for each case

const regexes = [
  /ca[rt]/, // Matches 'cat' or 'car'
  /pr?op/, // Matches 'prop' or 'pop'
  /ferr(et|y|ari)/, // Matches 'ferret', 'ferry', or 'ferrari'
  /\b\w+ious\b/, // Matches words ending with 'ious'
  /\s[.,;:]/, // Matches whitespace followed by a punctuation character
  /\b\w{7,}\b/, // Matches words with 7 or more letters
  /\b[^eE\s]+\b/, // Matches words that do not contain the letter 'e' or 'E'
];

regexpGolf(testStrings, regexes);

// question 2
const quotingStyle = (sentence) => {
  // declare single to double
  const singleToDoubleQuotePattern = /'([^']+)'/g;
  const singleToDoubleQuoteReplacement = '"$1"';

  // declare double to single
  const doubleToSingleQuotePattern = /(\w)"(\w)/g;
  const doubleToSingleQuoteReplacement = "$1'$2";

  // convert single quote to double quotes
  let updatedStory = sentence.replace(
    singleToDoubleQuotePattern,
    singleToDoubleQuoteReplacement
  );

  // convert double contracted words  to single quote
  updatedStory = updatedStory.replace(
    doubleToSingleQuotePattern,
    doubleToSingleQuoteReplacement
  );

  //   const updatedStory = story
  //     .replace(/'([^']+)'/g, '"$1"')
  //     .replace(/(\w)"(\w)/g, "$1'$2");
  console.log(updatedStory);
};

// string to be formated

const story = `He said, 'I can't believe it!' She replied, 'You're right.'`;
// quotingStyle(story);

const newString = `Maryam said, 'I'm in love with babangida!' Aisha replied, 'She's right!.'`;
// quotingStyle(newString);

// Question 3

const validNumber = (input) => {
  const regexPattern = /^[-+]?(\d+\.\d*|\.\d+|\d+)([eE][-+]?\d+)?$/;

  let message = "";
  // Use the test method to check if the input matches the pattern
  const outPut = regexPattern.test(input);
  if (outPut) {
    // string concantenation method
    // message = input + "This is a Valid Input";
    message = `${input} Is a Valid input`;
  } else {
    message = `${input} Is an invalid input`;
  }
  return message;
};

// Test cases
// console.log(validNumber("-5")); // true
// console.log(validNumber("+3.14")); // true
// console.log(validNumber("0.5")); // true
// console.log(validNumber("5.")); // true
// console.log(validNumber("1e-3")); // true
// console.log(validNumber("1E10")); // true
// console.log(validNumber(".5")); // true
// console.log(validNumber(".")); // false (lone dot)
// console.log(validNumber("abc")); // false (not a valid number)
