function formatString(input: string, toUpper?: boolean): string {
    return (toUpper ?? true) ? input.toUpperCase() : input.toLowerCase();
}




function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}




function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    arrays.forEach(arr => arr.forEach(item => result.push(item)));
    return result;
}




class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    public getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    public getModel(){
        console.log(`Model: ${this.model}`);
    }
}




function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}




interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }

    return products.reduce((maxPriceProduct, currentPriceProduct) =>
        currentPriceProduct.price > maxPriceProduct.price ? currentPriceProduct : maxPriceProduct
    );
}




enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    return (day === Day.Saturday || day === Day.Sunday) ? "Weekend" : "Weekday";
}




async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        return Promise.reject(new Error("Negative number not allowed"));
    }

    return new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(n * n);
        }, 1000);
    });
}
