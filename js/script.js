"use strict";


// start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let j = 0; j < 2; j++) {
            const a = prompt('Один из последних просмотренных фильмов?',''),
                  b = prompt('На сколько его оцените?','');
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                j--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
            console.log('Просмотрено мало фильмов!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка!');
        }
    },
    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
       for (let i = 1; i < 2; i++) {
           let genres = prompt('Введите жанры через запятую.');
           if (genres == '' || genres == null) {
               console.log('Вы ввели некорректные данные!');
               i--;
           } else {
               personalMovieDB.genres = genres.split(', ');
               personalMovieDB.genres.sort();
           }
       }
       personalMovieDB.genres.forEach(function(item, i){
            console.log(`Любимый жанр ${i + 1} - это ${item}.`);
       });
    },

    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        
    }
};

// personalMovieDB.toggleVisibleMyDB();
// console.log(personalMovieDB.privat);
// personalMovieDB.showMyDB(personalMovieDB.privat);

