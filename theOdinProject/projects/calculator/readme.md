# Calculator 

This is taken from The Odin Project as part of my continuing journey learning web development. This particular app is modeled after the Windows 10 desktop calculator, but with reduced functionality. I was able to leverage several concepts and technology here:

1. Typescript (2.9.2)
2. Unit Testing (Mocha, Chai)
3. Gulp (sourcemap, browserify, tsify)
4. Reveal effect (from Microsoft Fluent Design)

Tasks are tracked on: https://trello.com/b/Yt2qm3lw

It took me forever to sort out all the gulp config setup but finally got most of it sorted out. Will try using it with Webpack next.

Additionally, I ran into a problem with the 'this' context getting lost when handling a DOM event. I eventually found the solutiion from [an example on stackoverflow](https://stackoverflow.com/questions/18423410/typescript-retain-scope-in-event-listener)