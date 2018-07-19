# Calculator

Basic Windows 10 style calculator using typescript

So it took me forever to sort out all the gulp config setup but it seems to work as is right now.

Additionally, I ran into a problem with the 'this' context getting lost when handling a DOM event. I eventually found the solutiion from [an example on stackoverflow](https://stackoverflow.com/questions/18423410/typescript-retain-scope-in-event-listener)