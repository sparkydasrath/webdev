let gulp = require("gulp");
let gts = require("gulp-typescript");
let mocha = require("gulp-mocha");
let del = require("del");

let tsProject = gts.createProject("tsconfig.json");
let testProject = gts.createProject("tsconfig.json");

gulp.task("clean", () => {
    return del(["dist/**/*"]);
});

// gulp.task("mocha-sidebar-tests", () => {
//     return testProject.src()
//         .pipe(testProject())
//         .js
//         .pipe(gulp.dest("test/js"));
// });

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