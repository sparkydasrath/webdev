export class Product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
export var Sport;
(function (Sport) {
    Sport[Sport["Running"] = 0] = "Running";
    Sport[Sport["Soccer"] = 1] = "Soccer";
    Sport[Sport["Watersports"] = 2] = "Watersports";
    Sport[Sport["Other"] = 3] = "Other";
})(Sport || (Sport = {}));
export class SportsProduct extends Product {
    _sports;
    constructor(id, name, price, ...sportArray) {
        super(id, name, price);
        this._sports = sportArray;
    }
    usedForSport(s) {
        return this._sports.includes(s);
    }
    get sports() {
        return this._sports;
    }
}
