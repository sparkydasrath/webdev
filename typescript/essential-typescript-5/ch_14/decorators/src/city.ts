export class City {

    constructor(public name: string, public population: number) { }

    getSummary(): string {
        return `Name: ${this.name}, Population: ${this.population}`;
    }
}