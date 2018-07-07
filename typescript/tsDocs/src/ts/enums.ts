//ex1 numeric enums
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

//ex2 string enum
enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// const enum
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
