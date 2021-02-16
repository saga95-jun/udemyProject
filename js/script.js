"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let j = 0; j < 2; j++) {
    const a = prompt('Один из последних просмотренных фильмов?',''),
          b = prompt('На сколько его оцените?','');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        j--;
    }
}

if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
    console.log('Просмотрено мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка!');
}



console.log(personalMovieDB);