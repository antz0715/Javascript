const readline = require('readline');

// Predefined word list (replacing the request to an external API)
const words = [
  'javascript', 'cookie', 'programming', 'hangman', 'computer', 'science'
];

// Function to get a random word from the list
function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

// Hangman states
const hangmanStates = [
  `
  Hangman
  ______
  |/   |
  |    
  |   
  |   
  |    
  |
  |_____
  `,
  `
  Hangman
  ______
  |/   |
  |   (_) 
  |   
  |   
  |    
  |
  |_____
  `,
  `
  Hangman
  ______
  |/   |
  |   (_)
  |    |
  |    
  |    
  |
  |_____
  `,
  `
  Hangman
  ______
  |/   |
  |   (_)
  |   \\|
  |    
  |    
  |
  |_____
  `,
  `
  Hangman
  ______
  |/   |
  |   (_)
  |   \\|/
  |    
  |    
  |
  |_____
  `,
  `
  Hangman
  ______
  |/   |
  |   (_)
  |   \\|/
  |    |
  |   / 
  |
  |_____
  `,
  `
  Hangman
  ______
  |/   |
  |   (_)
  |   \\|/
  |    |
  |   / \\
  |
  |_____
  `
];

// Initialize the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt the user and return a promise
const askQuestion = (query) => {
  return new Promise(resolve => rl.question(query, resolve));
};

// Main game function
async function playHangman() {
  const word = getRandomWord();
  let missing = '_'.repeat(word.length);
  let attempts = 0;
  const maxAttempts = hangmanStates.length - 1;
  const guessedLetters = new Set();

  console.log(hangmanStates[0]);

  while (attempts < maxAttempts && missing.includes('_')) {
    console.log(missing);
    const letter = (await askQuestion("Guess a letter: ")).toLowerCase();

    if (guessedLetters.has(letter)) {
      console.log("You already guessed that letter.");
      continue;
    }

    guessedLetters.add(letter);

    if (word.includes(letter)) {
      missing = [...word].map((char, index) => (char === letter ? letter : missing[index])).join('');
    } else {
      attempts += 1;
    }

    console.log(hangmanStates[attempts]);
  }

  if (!missing.includes('_')) {
    console.log("Congratulations, you won!");
  } else {
    console.log("You lost! The word was:", word);
  }

  console.log("Final word:", missing);
  rl.close();
}

// Start the game
playHangman();
