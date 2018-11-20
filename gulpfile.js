//////////llamamos a las librerías//////////////
var gulp = require ('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync');

//Esto es un array con las tareas automáticas que se ejecutarán por defecto
gulp.task("default",['browser','minify-js','minify-css']);

////////creamos las tareas automáticas//////////

//Tarea de minificado del JS//
gulp.task("minify-js",()=>{
    return gulp.src('public/js/main.js')//archivo origen a minificar
        .pipe(uglify())//orden de minificados
        .pipe(gulp.dest('public/js/main.min.js'))//archivo destino minificado
});

//Tarea de minificado del CSS
gulp.task('minify-css', () => {
    return gulp.src('public/css/main.css')//archivo origen a minificar
        .pipe(cleanCSS({compatibility: 'ie8'})) //tubería de ejecución
        .pipe(gulp.dest('public/css/main.min.css')); //archivo destino minificado
});


//Tarea para levantar el servidor
gulp.task("browser",()=>{
    browserSync.init({
        server:{
            baseDir:"./"
        }
    });
});

//Tarea para que observe si hay cambios en js y haga el minificado él solo
gulp.watch("public/js/**/*.js").on("change",()=>{
    return gulp.src('public/js/main.js')//archivo origen a minificar
        .pipe(uglify())//orden de minificados
        .pipe(gulp.dest('public/js/main.min.js'))//archivo destino minificado
});

//Tarea para que observe si hay cambios en CSS y haga el minificado él solo
gulp.watch("public/css/**/*.css").on("change",()=>{
    return gulp.src('public/css/main.css')//archivo origen a minificar
        .pipe(cleanCSS({compatibility: 'ie8'})) //tubería de ejecución
        .pipe(gulp.dest('public/css/main.min.css')); //archivo destino minificado
});

//Tarea para que refresque el navegador si hay cambios en el index o en js
gulp.watch(['index.html','public/js/main.js', 'public/css/main.css']).on('change',()=>{
    browserSync.reload();
});