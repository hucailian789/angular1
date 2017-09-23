var gulp = require('gulp'); //1引入本地gulp模块

var cssmin = require("gulp-cssmin"); //2.压缩css插件导入

var uglify = require("gulp-uglify"); //3.压缩js插件导入

var concat = require("gulp-concat"); //4.合并文件插件导入

var htmlmin = require("gulp-htmlmin"); //5压缩html插件

gulp.task("yscss", function () {
    gulp.src("./src/**/*.css")
        .pipe(cssmin())
        .pipe(gulp.dest("./dist"));
});

gulp.task("ysjs", function () {
    gulp.src(["./src/**/*.js", "!./src/assets/js/prefixfree.min.js"])
        .pipe(concat("all.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/assets/js"));
})

gulp.task("yshtml", function () {
    gulp.src(["./src/**/*.html"])
        .pipe(htmlmin({
            removeComments: true, //清除html注释
            collapseWhitespace: true //压缩html
        }))
        .pipe(gulp.dest("./dist"));
})