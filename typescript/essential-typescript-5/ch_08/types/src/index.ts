// redefining functions
function calculateTax(amount: number): number {
    return amount * 1.2;
}

function calculateTaxWithDiscount(amount: number, discount: number): number {
    return (amount * 1.2) - discount;
}

// optional parameters
function calculateTaxWithOptional(amount: number, discount?: number): number {
    return (amount * 1.2) - (discount || 0);
}

// default parameters
function calculateTaxWithDefault(amount: number, discount: number = 0): number {
    return (amount * 1.2) - discount;
}


// rest parameters
function calculateTaxWithRest(amount: number, discount: number = 0, ...extraFees: number[]): number {
    return (amount * 1.2) - discount + extraFees.reduce((total, val) => total + val, 0);
}