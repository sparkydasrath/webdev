# TODO Version 3

Tasks are tracked on [Trello](https://trello.com/b/8moSOcow) 

I will be using just HTML, CSS and JS to create the main functionality. Using [TodoMvc](http://todomvc.com/examples/) as the rough idea.

V1 was just a naive implementation - globals, referencing the DOM all over the JS. I figure that was a good first shot.

V2 will be about modularizing the existing app, making it more maintainable. 

This was accomplished by a complete refactor using the Module Pattern to organize the original code. It additionally provided opportunity to delete unnecessary parts of the original cdde base and consolidate repeating code (DRY it!).

### Addendum
Call it version 3.5. 

After refactoring v2 to v3, it still felt a bit off. After doing some [research](https://medium.com/@jrschwane/writing-modular-javascript-pt-1-b42a3bd23685), it seems a tweak of the v2 would give me the form I am looking for at this stage. 