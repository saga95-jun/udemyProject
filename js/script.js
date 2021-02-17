"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let j = 0; j < 2; j++) {
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('На сколько его оцените?','');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            j--;
        }
    }
}

// rememberMyFilms();
writeYourGenres();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
        console.log('Просмотрено мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка!');
    }
}

// detectPersonalLevel();

function showMyDB(){
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();
console.log(personalMovieDB.genres[0]);

function writeYourGenres() {
    let i = 1;
    do {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
        i++;
    }
    while (i <= 3);     
}