const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Pokemon {
  constructor(name, pokeType, hp, attack, defense, rarity = "common") {
    this.name = name;
    this.type = pokeType;
    this.maxHp = hp;
    this.currentHp = hp;
    this.attack = attack;
    this.defense = defense;
    this.rarity = rarity;
  }

  isAlive() {
    return this.currentHp > 0;
  }

  takeDamage(damage) {
    this.currentHp = Math.max(0, this.currentHp - damage);
  }

  heal(amount) {
    this.currentHp = Math.min(this.maxHp, this.currentHp + amount);
  }

  viewStats() {
    console.log(`Name: ${this.name}`);
    console.log(`Type: ${this.type}`);
    console.log(`HP: ${this.currentHp}/${this.maxHp}`);
    console.log(`Attack: ${this.attack}`);
    console.log(`Defense: ${this.defense}`);
    console.log(`Rarity: ${this.rarity}`);
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.pokemon = [];
    this.items = { 'Potion': 5, 'Poke Ball': 100 };
  }

  addPokemon(pokemon) {
    this.pokemon.push(pokemon);
  }

  useItem(item, pokemon) {
    if (item === 'Potion' && this.items[item] > 0) {
      pokemon.heal(20);
      this.items[item] -= 1;
      console.log(`Used Potion on ${pokemon.name}. ${pokemon.name} now has ${pokemon.currentHp} HP.`);
    } else if (item === 'Poke Ball' && this.items[item] > 0) {
      this.items[item] -= 1;
      return this.tryCapture(pokemon);
    } else {
      console.log(`No ${item} left!`);
    }
  }

  tryCapture(wildPokemon) {
    const captureChance = Math.random();
    const captureRate = wildPokemon.rarity === "legendary" ? 0.1 : 0.3; // Adjusted capture rate for common Pokémon
    if (captureChance <= captureRate) {
      this.addPokemon(wildPokemon);
      console.log(`Captured ${wildPokemon.name}!`);
      return true;
    } else {
      console.log(`Failed to capture ${wildPokemon.name}.`);
      return false;
    }
  }

  choosePokemon(callback) {
    console.log("Choose a Pokemon:");
    this.pokemon.forEach((pokemon, index) => {
      console.log(`${index}: ${pokemon.name} (HP: ${pokemon.currentHp}/${pokemon.maxHp})`);
    });

    rl.question("Enter the number of the Pokemon: ", (choice) => {
      choice = parseInt(choice);
      if (choice >= 0 && choice < this.pokemon.length) {
        callback(this.pokemon[choice]);
      } else {
        console.log("Invalid choice. Defaulting to first Pokemon.");
        callback(this.pokemon[0]);
      }
    });
  }
}

function combat(player, wildPokemon, callback) {
  player.choosePokemon((activePokemon) => {
    console.log(`A wild ${wildPokemon.name} appeared!`);

    function battle() {
      if (!activePokemon.isAlive()) {
        console.log(`${activePokemon.name} fainted!`);
        callback(false);
        return;
      }
      if (!wildPokemon.isAlive()) {
        console.log(`${wildPokemon.name} fainted! Battle over.`);
        callback(true);
        return;
      }

      console.log(`\n${activePokemon.name} (HP: ${activePokemon.currentHp}) vs ${wildPokemon.name} (HP: ${wildPokemon.currentHp})`);
      rl.question("Choose action: (A)ttack, (I)tem, (S)wap, (V)iew Stats: ", (action) => {
        action = action.toLowerCase();

        if (action === 'a') {
          const damage = Math.max(1, activePokemon.attack - wildPokemon.defense);
          wildPokemon.takeDamage(damage);
          console.log(`${activePokemon.name} attacked ${wildPokemon.name} for ${damage} damage.`);
        } else if (action === 'i') {
          rl.question("Choose item: (P)otion, (B)all: ", (item) => {
            item = item.toLowerCase();
            if (item === 'p') {
              player.useItem('Potion', activePokemon);
            } else if (item === 'b') {
              if (player.useItem('Poke Ball', wildPokemon)) {
                callback(true);
                return;
              }
            }
            battle();
          });
          return;
        } else if (action === 's') {
          player.choosePokemon((newPokemon) => {
            activePokemon = newPokemon;
            console.log(`Swapped to ${activePokemon.name}.`);
            battle();
          });
          return;
        } else if (action === 'v') {
          activePokemon.viewStats();
          battle();
          return;
        }

        if (wildPokemon.isAlive()) {
          const wildDamage = Math.max(1, wildPokemon.attack - activePokemon.defense);
          activePokemon.takeDamage(wildDamage);
          console.log(`${wildPokemon.name} attacked ${activePokemon.name} for ${wildDamage} damage.`);
        }
        battle();
      });
    }
    battle();
  });
}

function randomEncounter() {
  const pokemonList = [
    new Pokemon("Charmander", "Fire", 39, 52, 43, "common"),
    new Pokemon("Bulbasaur", "Grass", 45, 49, 49, "common"),
    new Pokemon("Squirtle", "Water", 44, 48, 65, "common"),
    new Pokemon("Mewtwo", "Psychic", 106, 110, 90, "legendary")
  ];
  return pokemonList[Math.floor(Math.random() * pokemonList.length)];
}

// Example usage
const player = new Player("Ash");
const pikachu = new Pokemon("Pikachu", "Electric", 35, 55, 40, "common");
const jigglypuff = new Pokemon("Jigglypuff", "Fairy", 35, 55, 40, "common");
player.addPokemon(pikachu);
player.addPokemon(jigglypuff);

function gameLoop() {
  const wildPokemon = randomEncounter();
  combat(player, wildPokemon, (continueGame) => {
    rl.question("Continue with another encounter? (y/n): ", (answer) => {
      if (answer.toLowerCase() === 'y') {
        gameLoop();
      } else {
        rl.close();
      }
    });
  });
}

gameLoop();
