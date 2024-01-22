type Product = {
    id: number;
    name: string;
    price?: number;
};
type Person = {
    id: string;
    name: string;
    city: string;
};
type UnionType = {
    id: number | string;
    name: string;
};
declare let hat: {
    id: number;
    name: string;
    price: number;
};
declare let gloves: {
    id: number;
    name: string;
    price: number;
};
declare let umbrella: {
    id: number;
    name: string;
    price: number;
};
declare let bob: {
    id: string;
    name: string;
    city: string;
};
declare let dataItems: UnionType[];
