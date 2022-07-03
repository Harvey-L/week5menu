class Movie {
    constructor(name,actors,genre){
        this.name = name;
        this.actors = actors;
        this.genre = genre;
    }
}
class Menu {
    
    constructor() {
        this.movies = [];
        this.movieSelected;
    }

    moviePrompt() {
        return prompt(`
        List top 3 movies
        Enter the number of one of the options
        0 = exit
        1 = add movie
        2 = delete movie
        3 = list of movies `);
    }
    userSelection() {
        let userSelectionOption = this.moviePrompt();
        while(userSelectionOption != 0) {
            if( userSelectionOption == 1 ) {
                this.addMovie();
            }
            else if( userSelectionOption == 2 ) {
                this.deleteMovie();
            }
            else if( userSelectionOption == 3 ) {
                this.listAllMovies();
            }
            else {
                userSelectionOption = 0;
            }
            userSelectionOption = this.moviePrompt();
        }
        alert(`You had ${this.movies.length} in your list`);
    }
    addMovie() {
        let movieName = prompt(`Enter movie name: `);
        let movieActor = prompt('Enter main actor: ');
        let movieGenre = prompt('Enter movie genre: ');
        this.movies.push(new Movie(movieName, movieActor, movieGenre));
        alert(`You have added a movie named ${movieName}`);
    }

    deleteMovie() {
        let deleteMovieName = prompt('Enter the name of movie you want deleted: ');
        for(let i = 0; i < this.movies.length; i++) {
            if(this.movies[i].name == deleteMovieName) {
                this.movies.splice(i, 1);
                alert('Movie was found and is now deleted.');
            }
        }
    }

    listAllMovies() {
        let allMoviesList = '';
        for(let i = 0; i < this.movies.length; i++) {
            allMoviesList = allMoviesList + 'Movie Name: '+ this.movies[i].name + ' Played By: ' + 
                this.movies[i].actors + ' Genre is: ' + this.movies[i].genre + '\n';
        }
        alert(allMoviesList);
    }
}
let menu = new Menu();
menu.userSelection();