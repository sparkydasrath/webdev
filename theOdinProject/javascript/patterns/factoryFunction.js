const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    return {
        sayName
    };
}

const Nerd = (name) => {
    // simply create a person and pull out the sayName function!
    const {
        sayName
    } = Person(name)
    const doSomethingNerdy = () => console.log('nerd stuff')
    return {
        sayName,
        doSomethingNerdy
    }
}

const j = Nerd("jeff");
j.sayName();
j.doSomethingNerdy();