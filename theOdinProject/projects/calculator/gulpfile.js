let gulp = require("gulp");
let gts = require("gulp-typescript");
let mocha = require("gulp-mocha");
let del = require("del");

let tsProject = gts.createProject("tsconfig.json")

// function clean(cb) {
//     del(["dist/**/*"]);
//     cb();
// }

gulp.task("clean", () => {
    return del(["dist/**/*"]);
});

gulp.task("run-tests", function () {
    return gulp.src("test/ts/*.spec.ts")
        .pipe(mocha({
            reporter: "min",
            require: ["ts-node/register"]
        }));
});

gulp.task("compile", () => {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest("dist/js"));
});

gulp.task("default", gulp.series("clean", "run-tests", "compile", (done) => {
    console.log("GULP: default task running...");
    done();
}));