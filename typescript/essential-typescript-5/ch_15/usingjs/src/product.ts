export class Product {
    constructor(public id: number,
        public name: string,
        public price: number) { }
}

export enum Sport {
    Running, Soccer, Watersports, Other
}

export class SportsProduct extends Product {

    private _sports: Sport[]

    constructor(id: number, name: string, price: number,
        ...sportArray: Sport[]) {
        super(id, name, price);
        this._sports = sportArray;
    }

    usedForSport(s: Sport): boolean {
        return this._sports.includes(s);
    }

    get sports(): Sport[] {
        return this._sports;
    }
}