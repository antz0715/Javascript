// 1. Create an empty array to store favorite movies
let favoriteMovies = [];

// 2. Function to add a movie to the list
function addMovie(movie) {
  favoriteMovies.push(movie);
  console.log(`${movie} has been added to the list.`);
}

// 3. Function to display all movies in the list
function displayMovies() {
  console.log("Favorite Movies:");
  for (let i = 0; i < favoriteMovies.length; i++) {
    console.log(`${i + 1}. ${favoriteMovies[i]}`);
  }
}

// 4. Function to display the number of movies in the list
function displayMovieCount() {
  console.log(`You have ${favoriteMovies.length} movies in your list.`);
}

// 5. Function to display the last movie added to the list
function displayLastMovie() {
  if (favoriteMovies.length > 0) {
    console.log(`The last movie added is: ${favoriteMovies[favoriteMovies.length - 1]}`);
  } else {
    console.log("No movies in the list yet.");
  }
}

// Test the functions
addMovie("Inception");
addMovie("The Matrix");
displayMovies();
displayMovieCount();
displayLastMovie();
