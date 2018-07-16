import * as gulp from "gulp";
import * as gts from "gulp-typescript";

let tsProject = gts.createProject("tsconfig.json")
gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest("dist/js"));
});